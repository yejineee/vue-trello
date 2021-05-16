const DRAGGABLE_ID_KEY = 'id';

const dataType = {
  ORIG_OPACITY: 'origOpacity',
  SRC_ID: 'srcId'
};

const swapHTML = (srcElem, destElem) => {
  const origSrcElemHTML = srcElem.innerHTML;
  srcElem.innerHTML = destElem.innerHTML;
  destElem.innerHTML = origSrcElemHTML;
};

export default {
  data() {
    return {
      DRAGGABLE_ID_KEY,
      isDropTarget: false,
      dropStyle: {
        border: '0.3rem dashed gray'
      }
    };
  },
  computed: {
    styleObj() {
      return this.isDropTarget ? this.dropStyle : {};
    }
  },
  mounted() {
    const dragStartHandler = function(e) {
      const origOpacity = this.style.opacity;
      e.dataTransfer.setData(dataType.SRC_ID, this.dataset[DRAGGABLE_ID_KEY]);
      e.dataTransfer.setData(dataType.ORIG_OPACITY, origOpacity);
      e.dataTransfer.effectAllowed = 'move';
      this.style.opacity = '0.4';
    };
    const dragEnterHandler = e => {
      e.preventDefault();
      this.isDropTarget = true;
    };
    const dragOverHandler = function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };
    const dragLeaveHandler = () => {
      this.isDropTarget = false;
    };
    const dropHandler = e => {
      e.preventDefault();
      const { target } = e;
      this.isDropTarget = false;
      const srcId = e.dataTransfer.getData(dataType.SRC_ID);
      const destId = target.dataset[DRAGGABLE_ID_KEY];
      if (srcId === destId) {
        return;
      }
      const srcElem = document.querySelector(
        `[data-${DRAGGABLE_ID_KEY}=${srcId}`
      );
      swapHTML(srcElem, target);
    };
    const dragEndHandler = function(e) {
      this.style.opacity = e.dataTransfer.getData(dataType.ORIG_OPACITY);
    };
    this.$el.addEventListener('dragstart', dragStartHandler);
    this.$el.addEventListener('dragenter', dragEnterHandler);
    this.$el.addEventListener('dragover', dragOverHandler);
    this.$el.addEventListener('dragleave', dragLeaveHandler);
    this.$el.addEventListener('drop', dropHandler);
    this.$el.addEventListener('dragend', dragEndHandler);
  }
};
