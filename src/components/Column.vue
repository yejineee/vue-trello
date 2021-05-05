<template>
  <div class="column">
    <form v-if="showEditForm" @submit.prevent="submitUpdatedTitle">
      <input
        id="column__title-edit-form"
        v-model="updatedTitle"
        :minlength="minTitle"
        :maxlength="maxTitle"
      />
    </form>
    <div v-else class="column__title" @click="toggleEditTitleForm">
      {{ column.title }}
    </div>
  </div>
</template>
<script>
import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from 'src/constants/title';
import { mapActions } from 'vuex';
import { UPDATE_COLUMN } from 'src/stores/column/constants';

export default {
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
  methods: {
    toggleEditTitleForm() {
      this.showEditForm = this.showEditForm !== true;
    },
    submitUpdatedTitle() {
      this.updateTitle({ title: this.updatedTitle, id: this.column.id });
      this.showEditForm = false;
    },
    ...mapActions({ updateTitle: UPDATE_COLUMN })
  }
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';
@import 'src/style/variable.scss';

.column {
  @include round-box;
  @include column-base;
  background: $column-back;
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
  background: $column-back;
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
