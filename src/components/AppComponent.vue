<template>
  <div id="app">
    <main-header></main-header>
    <board></board>
  </div>
</template>
<script>
import Board from './Board.vue';
import MainHeader from './MainHeader.vue';

export default {
  components: {
    MainHeader,
    Board
  }
};
</script>
