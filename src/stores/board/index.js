import { getBoards } from 'src/apis/index';
import { FETCH_BOARDS, MUTATE_BOARDS, boardList } from './constants';

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
  getters: {
    [boardList](state) {
      if (state.boards === null) {
        return [];
      }
      return Object.values(state.boards).map(({ id, title }) => ({
        id,
        title
      }));
    }
  }
};

export default boardModule;
