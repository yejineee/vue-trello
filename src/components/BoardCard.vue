<template>
  <li class="board-card">
    <div class="board-card__title">{{ board.title }}</div>
  </li>
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

$box-shadow-info: 0px 5px 17px 5px;
.board-card {
  @include flex-center;
  @include round-box;
  height: 15rem;
  width: 15rem;
  margin: 0 1rem;

  box-shadow: $box-shadow-info rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: $box-shadow-info rgba(0, 0, 0, 0.2);
  }
}
.board-card__title {
  font-size: 3rem;
  font-weight: 500;
}
</style>
