// src/index.js
import Vue from 'vue';
import AppComponent from './components/AppComponent.vue';
import './style/reset.scss';
// root element
new Vue({
  el: '#body',
  render(h) {
    return h(AppComponent);
  }
});
