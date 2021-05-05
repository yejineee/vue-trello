import Vue from 'vue';
import Vuex from 'vuex';
import { getColumns, createNewColumn, updateColumnTitle } from 'src/apis/index';
import {
  CREATE_COLUMN,
  FETCH_COLUMNS,
  UPDATE_COLUMN,
  MUTATE_COLUMNS,
  MUTATE_ADD_COLUMN,
  MUTATE_COLUMN_NAME
} from './constants';

Vue.use(Vuex);

/*
columns: [{
  id: string,
  title: string,
  createdAt: string,
  cards: [
    {
      id: string,
      title: string,
      description: string,
      createdAt: string,
      authorId: string,
    }
  ]
}]
*/
const store = new Vuex.Store({
  state: {
    columns: []
  },
  mutations: {
    [MUTATE_COLUMNS](state, { data }) {
      state.columns = data;
    },
    [MUTATE_ADD_COLUMN](state, { newColumn }) {
      state.columns = [...state.columns, newColumn];
    },
    [MUTATE_COLUMN_NAME](state, { idx, title }) {
      state.columns[idx].title = title;
    }
  },
  actions: {
    async [FETCH_COLUMNS]({ commit }) {
      commit(MUTATE_COLUMNS, { data: await getColumns() });
    },
    async [CREATE_COLUMN]({ commit }, title) {
      const newColumn = await createNewColumn({
        title,
        createdAt: new Date(),
        cards: []
      });
      commit(MUTATE_ADD_COLUMN, { newColumn });
    },
    async [UPDATE_COLUMN]({ commit, getters }, { id, title }) {
      const updatedColumn = await updateColumnTitle(id, { title });
      const idx = getters.getIdxOfColumnId(updatedColumn.id);
      if (idx === -1) {
        return;
      }
      commit(MUTATE_COLUMN_NAME, { idx, title: updatedColumn.title });
    }
  },
  getters: {
    getIdxOfColumnId: state => targetId => {
      return state.columns.findIndex(({ id }) => id === targetId);
    }
  }
});

export default store;
