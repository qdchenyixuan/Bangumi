import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import axios from 'axios';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(MuseUI);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
