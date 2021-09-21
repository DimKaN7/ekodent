import VueRouter from 'vue-router'

import AboutTab from '../components/Tabs/About/About'
import QuestionsTab from '../components/Tabs/Questions/Questions'
import VacanciesTab from '../components/Tabs/Vacancies/Vacancies'
import MainTab from '../components/Tabs/Main/Main'
import ServicesTab from '../components/Tabs/Services/Services'
import PriceTab from '../components/Tabs/Price/Price'
import CertificatesTab from '../components/Tabs/Certificates/Certificates'
import NewsTab from '../components/Tabs/News/News'
import StocksTab from '../components/Tabs/Stocks/Stocks'
import FeedbackTab from '../components/Tabs/Feedback/Feedback'

import TherapyChildTab from '../components/Tabs/Services/Therapy/Therapy'
import RestorationChildTab from '../components/Tabs/Services/Restoration/Restoration'
import PersonalCleaningChildTab from '../components/Tabs/Services/PersonalCleaning/PersonalCleaning'
import DentalImplantationChildTab from '../components/Tabs/Services/DentalImplantation/DentalImplantation'
import PeriodonticsChildTab from '../components/Tabs/Services/Periodontics/Periodontics'
import GingivitisChildTab from '../components/Tabs/Services/Gingivitis/Gingivitis'
import PeriodontitisChildTab from '../components/Tabs/Services/Periodontitis/Periodontitis'
import ChildrenDentistryChildTab from '../components/Tabs/Services/ChildrenDentistry/ChildrenDentistry'
import SurgeryChildTab from '../components/Tabs/Services/Surgery/Surgery'
import ToothRemovalChildTab from '../components/Tabs/Services/ToothRemoval/ToothRemoval'
import ProstheticsChildTab from '../components/Tabs/Services/Prosthetics/Prosthetics'
import PhysiotherapyChildTab from '../components/Tabs/Services/Physiotherapy/Physiotherapy'
import OrthodonticsChildTab from '../components/Tabs/Services/Orthodontics/Orthodontics'
import BracesChildTab from '../components/Tabs/Services/Braces/Braces'
import RemovableStructuresChildTab from '../components/Tabs/Services/RemovableStructures/RemovableStructures'
import SurgicalMethodsChildTab from '../components/Tabs/Services/SurgicalMethods/SurgicalMethods'

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
            path: '/Price',
            component: PriceTab
        },
        {
            path: '/Certificates',
            component: CertificatesTab
        },
        {
            path: '/News',
            component: NewsTab
        },
        {
            path: '/Stocks',
            component: StocksTab
        },
        {
            path: '/Feedback',
            component: FeedbackTab
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
                },
                {
                    path: 'DentalImplantation',
                    component: DentalImplantationChildTab
                },
                {
                    path: 'Periodontics',
                    component: PeriodonticsChildTab
                },
                {
                    path: 'Gingivitis',
                    component: GingivitisChildTab
                },
                {
                    path: 'Periodontitis',
                    component: PeriodontitisChildTab
                },
                {
                    path: 'ChildrenDentistry',
                    component: ChildrenDentistryChildTab
                },
                {
                    path: 'Surgery',
                    component: SurgeryChildTab
                },
                {
                    path: 'ToothRemoval',
                    component: ToothRemovalChildTab
                },
                {
                    path: 'Prosthetics',
                    component: ProstheticsChildTab
                },
                {
                    path: 'Physiotherapy',
                    component: PhysiotherapyChildTab
                },
                {
                    path: 'Orthodontics',
                    component: OrthodonticsChildTab
                },
                {
                    path: 'Braces',
                    component: BracesChildTab
                },
                {
                    path: 'RemovableStructures',
                    component: RemovableStructuresChildTab
                },
                {
                    path: 'SurgicalMethods',
                    component: SurgicalMethodsChildTab
                }
            ]
        }
    ] // сокращённая запись для `routes: routes`
})
