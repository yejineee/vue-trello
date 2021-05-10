// src/index.js
import Vue from 'vue';
import store from 'src/stores';
import AppComponent from './components/AppComponent.vue';
import router from './router';
import './style/reset.scss';
// root element

new Vue({
  router,
  store,
  render(h) {
    return h(AppComponent);
  }
}).$mount('#app');
