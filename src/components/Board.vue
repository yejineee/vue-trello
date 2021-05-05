<template>
  <div id="board">
    <column
      v-for="column in columns"
      :key="column.id"
      :column="column"
    ></column>
    <column-form @add-new-column="onAddNewColumn"></column-form>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { FETCH_COLUMNS, CREATE_COLUMN } from 'src/stores/column/constants';
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
    ...mapState(['columns'])
  },
  created() {
    this.fetchColumns();
  },
  methods: {
    onAddNewColumn(title) {
      this.addNewColumn(title);
    },
    ...mapActions({ fetchColumns: FETCH_COLUMNS, addNewColumn: CREATE_COLUMN })
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
