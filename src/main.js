import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App/App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router/index'


Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
  router
}).$mount('#app')
