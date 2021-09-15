import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App/App.vue'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
