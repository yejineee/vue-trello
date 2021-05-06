import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './user';
import columnModule from './column';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,
    columnModule
  }
});

export default store;
