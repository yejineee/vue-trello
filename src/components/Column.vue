<template>
  <div class="column">
    <div class="column__title">
      {{ title }}
    </div>
  </div>
</template>
<script>
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
</style>
