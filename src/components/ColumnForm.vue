<template>
  <div id="column-form">
    <form
      v-if="showForm"
      id="create-form__container"
      @submit.prevent="submitNewTitle"
    >
      <input
        id="column-form__input"
        v-model.trim="title"
        placeholder="Enter column title..."
        :minlength="minTitle"
        :maxlength="maxTitle"
      />
      <div id="column-form-control__container">
        <button
          class="column-form__submit"
          :class="{ active: isValidTitle }"
          type="button"
          @click.prevent="submitNewTitle"
        >
          Add List
        </button>
        <button id="column-form__cancel" type="button" @click="toggleShowForm">
          X
        </button>
      </div>
    </form>
    <button v-else id="column-form__button" @click="toggleShowForm">
      + Add another list
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { CREATE_COLUMN } from 'src/stores/column/constants';
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
      if (!this.isValidTitle) {
        return;
      }
      this.addNewColumn(this.title);
      this.resetData();
    },
    resetData() {
      this.showForm = false;
      this.title = '';
    },
    ...mapActions({ addNewColumn: CREATE_COLUMN })
  }
};
</script>
<style lang="scss">
@use "sass:color";
@import 'src/style/mixin.scss';
@import 'src/style/variable.scss';

#column-form {
  @include column-base;
  margin-left: 0.5rem;
}

#create-form__container {
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  background: rgba(255, 255, 255, 0.3);
  height: $column-title-height * 3;
}

#column-form__button {
  @include flex-center;
  @include round-box;
  @include column-title-base;

  width: 100%;
  border: lightgray;
  background: rgba(255, 255, 255, 0.3);
  font: {
    size: 1.2em;
    weight: 500;
  }
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
}
#column-form__input {
  flex: 1 1 0;
}

#column-form-control__container {
  display: flex;
  flex: 1 1 0;
}
.column-form__submit {
  @include round-box;
  color: darkgray;
  cursor: not-allowed;
  width: 70%;
}

#column-form__cancel {
  @include round-box;
  width: 30%;
  background: $darkgray;
  color: white;
  cursor: pointer;
  &:hover {
    background: color.scale($darkgray, $lightness: 14%);
  }
}

.active {
  $active-color: #33a148;
  cursor: pointer;
  background: $active-color;
  color: white;
  font-weight: 500;
  &:hover {
    background: color.scale($active-color, $lightness: 10%);
  }
}
</style>
