import { getUserData } from 'src/apis';
import { MUTATE_USER, FETCH_USER } from './constants';

const userModule = {
  namespaced: true,
  state: () => ({
    id: null,
    name: null
  }),
  mutations: {
    [MUTATE_USER](state, { data: { id, name } }) {
      state.id = id;
      state.name = name;
    }
  },
  actions: {
    async [FETCH_USER]({ commit }) {
      commit(MUTATE_USER, { data: await getUserData() });
    }
  }
};

export default userModule;
