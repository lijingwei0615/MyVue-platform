import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/route'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


Vue.use(router);
Vue.use(ElementUI);
Vue.prototype.$axios=axios;
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

