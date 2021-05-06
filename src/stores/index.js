import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './user';
import columnModule from './column';
import { USER_STORE_NAME } from './user/constants';
import { COLUMN_STORE_NAME } from './column/constants';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    [USER_STORE_NAME]: userModule,
    [COLUMN_STORE_NAME]: columnModule
  }
});

export default store;
