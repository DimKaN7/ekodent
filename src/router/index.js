import VueRouter from 'vue-router'

import AboutTab from '../components/Tabs/About/About'
import QuestionsTab from '../components/Tabs/Questions/Questions'
import VacanciesTab from '../components/Tabs/Vacancies/Vacancies'
import MainTab from '../components/Tabs/Main/Main'
import ServicesTab from '../components/Tabs/Services/Services'
import TherapyChildTab from '../components/Tabs/Services/Therapy/Therapy'
import RestorationChildTab from '../components/Tabs/Services/Restoration/Restoration'
import PersonalCleaningChildTab from '../components/Tabs/Services/PersonalCleaning/PersonalCleaning'

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: MainTab
        },
        {
            path: '/About',
            component: AboutTab
        },
        {
            path: '/Questions',
            component: QuestionsTab
        },
        {
            path: '/Vacancies',
            component: VacanciesTab
        },
        {
            path: '/Services',
            component: ServicesTab,
            children: [
                {
                    path: 'Therapy',
                    component: TherapyChildTab
                },
                {
                    path: 'Restoration',
                    component: RestorationChildTab
                },
                {
                    path: 'PersonalCleaning',
                    component: PersonalCleaningChildTab
                }
            ]
        }
    ] // сокращённая запись для `routes: routes`
})
