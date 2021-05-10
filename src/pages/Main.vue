<template>
  <div id="main">
    <h1 id="main__title">
      Lillie's Trello
    </h1>
    <div id="main__boards-list">
      <board-list></board-list>
    </div>
  </div>
</template>
<script>
import BoardList from 'src/components/BoardList.vue';

export default {
  components: {
    BoardList
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';

#main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#main__title {
  @include flex-center;
  flex: 2 1 0;
  font: {
    weight: 600;
    size: 10rem;
  }
}
#main__boards-list {
  flex: 1 1 0;
}
</style>
