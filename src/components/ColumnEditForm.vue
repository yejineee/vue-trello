<template>
  <form id="column__title-edit-form" @submit.prevent="submitUpdatedTitle">
    <input
      id="column__title-edit-input"
      v-model="updatedTitle"
      :minlength="minTitle"
      :maxlength="maxTitle"
      @click.stop
    />
  </form>
</template>
<script>
import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from 'src/constants/title';
import { mapActions } from 'vuex';
import { UPDATE_COLUMN, COLUMN_STORE_NAME } from 'src/stores/column/constants';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      updatedTitle: this.title,
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
  created() {
    window.addEventListener('click', this.clickOuterHandler);
  },
  destroyed() {
    window.removeEventListener('click', this.clickOuterHandler);
  },
  methods: {
    clickOuterHandler({ target }) {
      if (target.className === 'column__title') {
        return;
      }
      this.submitUpdatedTitle();
    },
    submitUpdatedTitle() {
      this.$emit('update-title');
      if (!this.isValidTitle) {
        return;
      }
      this.updateTitle({ title: this.updatedTitle, id: this.id });
    },
    ...mapActions(COLUMN_STORE_NAME, { updateTitle: UPDATE_COLUMN })
  }
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';
@import 'src/style/variable.scss';

#column__title-edit-form {
  display: flex;
}
#column__title-edit-input {
  height: $column-title-height;
  flex: 1 1 0;
}
</style>
