import Vue from 'vue';
import VueRouter from 'vue-router';
import Boards from './pages/Boards.vue';
import Main from './pages/Main.vue';
import Page404 from './pages/Page404.vue';
import './style/reset.scss';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Main },
  { path: '/boards', component: Boards },
  { path: '*', component: Page404 }
];

const router = new VueRouter({
  routes
});

export default router;
