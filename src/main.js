import Vue from 'vue';
import App from './App';
import fastclick from 'fastclick';
import router from './router';

import 'common/sass/index.scss';

fastclick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
