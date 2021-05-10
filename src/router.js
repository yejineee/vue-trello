import Vue from 'vue';
import VueRouter from 'vue-router';
import BoardsComponent from './components/BoardsComponent.vue';
import Main from './components/Main.vue';
import Page404 from './components/Page404.vue';
import './style/reset.scss';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Main },
  { path: '/boards', component: BoardsComponent },
  { path: '*', component: Page404 }
];

const router = new VueRouter({
  routes
});

export default router;
