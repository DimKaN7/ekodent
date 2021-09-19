import VueRouter from 'vue-router'

import AboutTab from '../components/Tabs/About/About'
import QuestionsTab from '../components/Tabs/Questions/Questions'
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
        },
        {
            path: '/Questions',
            component: QuestionsTab
        }
    ] // сокращённая запись для `routes: routes`
})
