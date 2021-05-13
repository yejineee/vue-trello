<template>
  <ul id="board-list">
    <board-card
      v-for="board in boards"
      :key="board.id"
      :board="board"
    ></board-card>
  </ul>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import BoardCard from 'src/components/BoardCard.vue';
import { BOARD_STORE_NAME, FETCH_BOARDS } from 'src/stores/board/constants';

export default {
  components: {
    BoardCard
  },
  computed: {
    ...mapState(BOARD_STORE_NAME, ['boards'])
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

#board-list {
  display: flex;
  padding: 2rem;
}
</style>
