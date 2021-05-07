// src/index.js
import Vue from 'vue';
import store from 'src/stores';
import AppComponent from './components/AppComponent.vue';
import './style/reset.scss';
// root element
new Vue({
  render(h) {
    return h(AppComponent);
  },
  store
}).$mount('body');
