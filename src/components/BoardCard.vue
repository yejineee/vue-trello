<template>
  <li id="board-card">{{ board.title }}</li>
</template>
<script>
export default {
  props: {
    board: {
      type: Object,
      required: true,
      validator({ id, title }) {
        return typeof id === 'string' && typeof title === 'string';
      }
    }
  }
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';
</style>
