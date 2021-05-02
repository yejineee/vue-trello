<template>
  <header id="header">
    {{ title }}
  </header>
</template>
<script>
export default {
  data() {
    return {
      title: "Lillie's Trello"
    };
  }
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';

#header {
  @include flex-center;
  color: #170f14;
  font: {
    size: 1.3em;
    weight: 800;
  }
  background: #cdb1c1;
  height: 3rem;
}
</style>
