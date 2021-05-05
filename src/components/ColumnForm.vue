<template>
  <div id="column-form">
    <form v-if="showForm" @submit.prevent="submitNewTitle">
      <input
        id="column-form__input"
        v-model.trim="title"
        placeholder="Enter column title..."
        :minlength="minTitle"
        :maxlength="maxTitle"
      />
      <button
        class="column-form__submit"
        :class="{ active: isValidTitle }"
        type="button"
        @click="submitNewTitle"
      >
        Add List
      </button>
      <button id="column-form__cancel" type="button" @click="toggleShowForm">
        X
      </button>
    </form>
    <button v-else id="column-form__button" @click="toggleShowForm">
      + Add another list
    </button>
  </div>
</template>
<script>
import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from '../constants/title';

export default {
  data() {
    return {
      showForm: false,
      title: '',
      maxTitle: MAX_TITLE_LENGTH,
      minTitle: MIN_TITLE_LENGTH
    };
  },
  computed: {
    isValidTitle() {
      return (
        this.title.length >= MIN_TITLE_LENGTH &&
        this.title.length <= MAX_TITLE_LENGTH
      );
    }
  },
  methods: {
    toggleShowForm() {
      this.showForm = this.showForm !== true;
    },
    submitNewTitle() {
      this.$emit('add-new-column', this.title);
      this.resetData();
    },
    resetData() {
      this.showForm = false;
      this.title = '';
    }
  }
};
</script>
<style lang="scss">
@use "sass:color";
@import 'src/style/mixin.scss';
@import 'src/style/variable.scss';
$padding: 0.5rem 0;

.column-form__submit {
  color: gray;
}

.active {
  background: green;
  color: white;
  &:hover {
    background: color.scale(green, $lightness: 10%);
  }
}

#column-form {
  margin-left: 0.5rem;
}

#column-form__button {
  @include flex-center;
  @include round-box;
  @include column-title-base;
  @include column-base;

  width: 100%;
  border: lightgray;
  background: rgba(255, 255, 255, 0.3);
  font: {
    size: 1.2em;
    weight: 500;
  }

  cursor: pointer;
}
#column-form__input {
  @include column-title-base;
  @include column-base;
  width: 100%;
  padding: $padding;
}
</style>
