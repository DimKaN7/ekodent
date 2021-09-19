import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App/App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router/index'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)


new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
  router
}).$mount('#app')
