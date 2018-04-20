import Vue from 'vue';
import Vant from 'vant';
import App from './App.vue';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

new Vue({
  el: '#app',
  render: h => h(App)
});
