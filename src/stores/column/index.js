import Vue from 'vue';
import Vuex from 'vuex';
import { getColumns, createNewColumn } from 'src/apis/index';
import {
  CREATE_COLUMN,
  FETCH_COLUMNS,
  MUTATE_COLUMNS,
  MUTATE_ADD_COLUMN
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
    }
  }
});

export default store;
