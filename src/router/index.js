import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage
  },
  {
    path: '/tarif',
    name: 'tarif',
    component: () => import('../pages/TarifPage.vue')
  },
  {
    path: '/tarif/time',
    name: 'time-tarif',
    component: () => import('../pages/TimeTarifPage.vue')
  },
  {
    path: '/tarif/volume',
    name: 'volume-tarif',
    component: () => import('../pages/VolumeTarifPage.vue')
  },
  {
    path: '/tarif/custom',
    name: 'custom-tarif',
    component: () => import('../pages/CustomTarifPage.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../pages/FaqPage.vue')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../pages/SupportPage.vue')
  },
  {
    path: '/cash',
    name: 'cash',
    component: () => import('../pages/CashPage.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../pages/PayPage.vue')
  },
  {
    path: '/paylog',
    name: 'paylog',
    component: () => import('../pages/PaylogPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/LoginPage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../pages/RegistrationPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
