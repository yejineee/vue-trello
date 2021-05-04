import Vue from 'vue';
import Vuex from 'vuex';
import { getColumns } from 'src/apis/index';
import { FETCH_COLUMNS, MUTATE_COLUMNS } from './constants';

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
    }
  },
  actions: {
    async [FETCH_COLUMNS]({ commit }) {
      commit(MUTATE_COLUMNS, { data: await getColumns() });
    }
  }
});

export default store;
