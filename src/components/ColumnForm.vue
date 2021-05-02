<template>
  <div id="column-form">
    <h1 v-if="showForm">타이틀입력하기</h1>
    <button v-else id="column-form__button" @click="toggleShowForm">
      + Add another list
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showForm: false
    };
  },
  methods: {
    toggleShowForm() {
      this.showForm = this.showForm !== true;
    }
  }
};
</script>
<style lang="scss">
@use "sass:color";
@import 'src/style/mixin.scss';
@import 'src/style/variable.scss';

#column-form {
  @include round-box;
  @include column-base;

  background: #f9f9f9;
}
#column-form__button {
  @include round-box;
  @include column-title-base;

  width: 100%;
  border: lightgray;
  background: color.scale($column-back, $lightness: 50%);
  font: {
    size: 1.2em;
    weight: 500;
  }

  cursor: pointer;

  &:hover {
    background: color.scale($column-back, $lightness: 80%);
  }
}
</style>
