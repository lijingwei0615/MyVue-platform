import Vue from 'vue'
<<<<<<< HEAD
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
=======
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/route'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(router);
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

>>>>>>> test_1
