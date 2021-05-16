<template>
  <div
    class="column"
    v-bind="draggableDataSet"
    :style="styleObj"
    draggable="true"
  >
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
import Vue from 'vue';
import dragAndDropMixin from 'src/mixins/DragAndDrop';
import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from 'src/constants/title';
import ColumnEditForm from './ColumnEditForm.vue';

export default Vue.extend({
  components: {
    ColumnEditForm
  },
  mixins: [dragAndDropMixin],
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
    },
    draggableDataSet() {
      return {
        [`data-${this.DRAGGABLE_ID_KEY}`]: this.column.id
      };
    }
  },
  methods: {
    toggleEditTitleForm() {
      this.showEditForm = this.showEditForm !== true;
    }
  }
});
</script>
<style lang="scss">
@import 'src/style/mixin.scss';
@import 'src/style/variable.scss';

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
