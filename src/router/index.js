import VueRouter from 'vue-router'

import AboutTab from '../components/Tabs/About/About'
import MainTab from '../components/Tabs/Main/Main'

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: MainTab
        },
        {
            path: '/about',
            component: AboutTab
        }
    ] // сокращённая запись для `routes: routes`
})
