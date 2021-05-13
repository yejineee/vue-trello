<template>
  <div id="board">
    <column
      v-for="column in columns"
      :key="column.id"
      :column="column"
    ></column>
    <column-form></column-form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { FETCH_COLUMNS, COLUMN_STORE_NAME } from 'src/stores/column/constants';
import Column from './Column.vue';
import ColumnForm from './ColumnForm.vue';

export default {
  components: {
    Column,
    ColumnForm
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(COLUMN_STORE_NAME, ['columns'])
  },
  watch: {
    $route(to) {
      this.fetchColumnsByBoardId(to);
    }
  },
  created() {
    this.fetchColumnsByBoardId();
  },
  methods: {
    ...mapActions(COLUMN_STORE_NAME, { fetchColumns: FETCH_COLUMNS }),
    fetchColumnsByBoardId(route = this.$route) {
      const { boardId } = route.params;
      this.fetchColumns({ boardId });
    }
  }
};
</script>
<style lang="scss">
#board {
  display: flex;
  width: 100%;
  height: 95vh;
  padding: 1rem;

  overflow-x: scroll;
  background-image: url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1281x1920/d81c37a3fbc40849c2550d0739900950/photo-1592842825197-89dd8efba31f.jpg');
  background-size: 100% 100%;
}
</style>
