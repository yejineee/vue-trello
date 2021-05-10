<template>
  <ul>
    <board-card
      v-for="board in boardList"
      :key="board.id"
      :board="board"
    ></board-card>
  </ul>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import BoardCard from 'src/components/BoardCard.vue';
import {
  BOARD_STORE_NAME,
  FETCH_BOARDS,
  boardList
} from 'src/stores/board/constants';

export default {
  components: {
    BoardCard
  },
  computed: {
    ...mapGetters(BOARD_STORE_NAME, [boardList])
  },
  created() {
    this.fetchBoards();
  },
  methods: {
    ...mapActions(BOARD_STORE_NAME, { fetchBoards: FETCH_BOARDS })
  }
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
