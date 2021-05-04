<template>
  <div id="board">
    <column
      v-for="column in columns"
      :key="column.id"
      :title="column.title"
    ></column>
    <column-form @add-new-column="onAddNewColumn"></column-form>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { FETCH_COLUMNS } from '../stores/column/constants';
import Column from './Column.vue';
import ColumnForm from './ColumnForm.vue';

export default {
  components: {
    Column,
    ColumnForm
  },
  data() {
    return {
      columnList: [{ id: 1, title: 'todo' }]
    };
  },
  computed: {
    ...mapState(['columns'])
  },
  created() {
    this.fetchColumns();
  },
  methods: {
    onAddNewColumn(title) {
      this.columnList.push({ id: `new-column-${title}`, title });
    },
    ...mapActions({ fetchColumns: FETCH_COLUMNS })
  }
};
</script>
<style lang="scss">
#board {
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 95vh;

  overflow-x: scroll;
  border: 1px solid red;
}
</style>
