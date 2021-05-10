import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './user';
import columnModule from './column';
import boardModule from './board';
import { USER_STORE_NAME } from './user/constants';
import { COLUMN_STORE_NAME } from './column/constants';
import { BOARD_STORE_NAME } from './board/constants';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    [USER_STORE_NAME]: userModule,
    [BOARD_STORE_NAME]: boardModule,
    [COLUMN_STORE_NAME]: columnModule
  }
});

export default store;
