import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/politicos',
    name: 'Politicos',
    component: () => import("@/views/Politicos.vue")
  },
  {
    path: '/partidos',
    name: 'Partidos',
    component: () => import("@/views/Partidos.vue")
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import("@/views/Noticias.vue")
  },
  {
    path: '/analises',
    name: 'Analises',
    component: () => import("@/views/Analises.vue")
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
