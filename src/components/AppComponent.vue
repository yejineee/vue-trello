<template>
  <div id="app">
    <main-header></main-header>
    <board></board>
  </div>
</template>
<script>
import store from '../stores/column/index';
import Board from './Board.vue';
import MainHeader from './MainHeader.vue';

export default {
  store,
  components: {
    MainHeader,
    Board
  }
};
</script>
