import { getBoards } from 'src/apis/index';
import { FETCH_BOARDS, MUTATE_BOARDS } from './constants';

const boardModule = {
  namespaced: true,
  state: () => ({
    boards: null
  }),
  mutations: {
    [MUTATE_BOARDS](state, { boards }) {
      state.boards = boards;
    }
  },
  actions: {
    async [FETCH_BOARDS]({ commit }) {
      const boards = await getBoards();
      commit(MUTATE_BOARDS, { boards });
    }
  },
  getters: {}
};

export default boardModule;
