import Vue from 'vue';
import VueRouter from 'vue-router';
import Boards from './pages/Boards.vue';
import Main from './pages/Main.vue';
import Page404 from './pages/Page404.vue';
import './style/reset.scss';

Vue.use(VueRouter);

export const MAIN_ROUTE = 'main';
export const BOARD_ROUTE = 'boards';
export const NOTFOUND_ROUTE = 'notFound';

const routes = [
  { path: '/', name: MAIN_ROUTE, component: Main },
  { path: '/boards/:boardId', name: BOARD_ROUTE, component: Boards },
  { path: '*', name: NOTFOUND_ROUTE, component: Page404 }
];

const router = new VueRouter({
  routes
});

export default router;
