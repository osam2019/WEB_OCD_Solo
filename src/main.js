import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);
Vue.use(ElementUI);
Vue.config.productionTip = false;
require('./assets/global.css');
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
