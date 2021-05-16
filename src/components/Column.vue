<template>
  <div :data-column-id="column.id" class="column" draggable="true">
    <ColumnEditForm
      v-if="showEditForm"
      :id="column.id"
      :title="column.title"
      @update-title="toggleEditTitleForm"
    >
    </ColumnEditForm>
    <div v-else class="column__title" @click="toggleEditTitleForm">
      {{ column.title }}
    </div>
  </div>
</template>
<script>
import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from 'src/constants/title';
import ColumnEditForm from './ColumnEditForm.vue';

export default {
  components: {
    ColumnEditForm
  },
  props: {
    column: {
      type: Object,
      required: true,
      validator({ id, title, createdAt, cards }) {
        return (
          typeof id === 'string' &&
          typeof title === 'string' &&
          (typeof createdAt === 'string' || createdAt instanceof Date) &&
          cards instanceof Array
        );
      }
    }
  },
  data() {
    return {
      showEditForm: false,
      updatedTitle: this.column.title,
      minTitle: MIN_TITLE_LENGTH,
      maxTitle: MAX_TITLE_LENGTH
    };
  },
  computed: {
    isValidTitle() {
      return (
        this.updatedTitle.length >= this.minTitle &&
        this.updatedTitle.length <= this.maxTitle
      );
    }
  },
  mounted() {
    const dragStartHandler = function(e) {
      const origOpacity = this.style.opacity;
      e.dataTransfer.setData('text/plain', this.dataset.columnId);
      e.dataTransfer.setData('text/html', this.innerHTML);
      e.dataTransfer.setData('origOpacity', origOpacity);
      e.dataTransfer.effectAllowed = 'move';
      this.style.opacity = '0.4';
    };
    const dragEnterHandler = function(e) {
      e.preventDefault();
      this.classList.add('drop-target-over');
    };
    const dragOverHandler = e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };
    const dragLeaveHandler = function() {
      this.classList.remove('drop-target-over');
    };
    const dropHandler = function(e) {
      e.preventDefault();
      this.classList.remove('drop-target-over');
      const srcColId = e.dataTransfer.getData('text/plain');
      const destColId = this.dataset.columnId;
      if (srcColId !== destColId) {
        const srcElem = document.querySelector(`[data-column-id=${srcColId}`);
        srcElem.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
    };
    const dragEndHandler = function(e) {
      this.style.opacity = e.dataTransfer.getData('origOpacity');
    };
    this.$el.addEventListener('dragstart', dragStartHandler);
    this.$el.addEventListener('dragenter', dragEnterHandler);
    this.$el.addEventListener('dragover', dragOverHandler);
    this.$el.addEventListener('dragleave', dragLeaveHandler);
    this.$el.addEventListener('drop', dropHandler);
    this.$el.addEventListener('dragend', dragEndHandler);
  },
  methods: {
    toggleEditTitleForm() {
      this.showEditForm = this.showEditForm !== true;
    }
  }
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';
@import 'src/style/variable.scss';

.drop-target-over {
  border: 0.3rem dashed gray;
}

.column {
  @include round-box;
  @include column-base;
  background: $column-back;
  cursor: move;
  & + & {
    margin-left: 0.5rem;
  }
}
.column__title {
  @include round-box;
  @include flex-center;
  @include column-title-base;
  font: {
    size: 1.2em;
    weight: 500;
  }
  cursor: pointer !important;
  background: $darkgray;
  color: $white;
}

#column__title-edit-form {
  @include column-title-base;
  @include column-base;
  display: flex;
  margin: auto;
  width: 90%;
  padding: 0.5rem 0;
}
</style>
