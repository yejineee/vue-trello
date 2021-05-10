// src/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from 'src/stores';
import AppComponent from './components/AppComponent.vue';
import Main from './components/Main.vue';
import Login from './components/Login.vue';
import Page404 from './components/Page404.vue';
import './style/reset.scss';
// root element
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/boards', component: Main },
  { path: '*', component: Page404 }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render(h) {
    return h(AppComponent);
  }
}).$mount('#app');
