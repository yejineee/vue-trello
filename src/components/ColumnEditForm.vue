<template>
  <form @submit.prevent="submitUpdatedTitle">
    <input
      id="column__title-edit-form"
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
import { UPDATE_COLUMN } from 'src/stores/column/constants';

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
    ...mapActions({ updateTitle: UPDATE_COLUMN })
  }
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';

#column__title-edit-form {
  @include column-title-base;
  @include column-base;
  display: flex;
  margin: auto;
  width: 90%;
  padding: 0.5rem 0;
}
</style>
