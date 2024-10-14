import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import JobView from '../views/Job/JobView.vue'
import JobDetail from '../views/Job/JobDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/job',
      name: 'Job',
      component: JobView,
    },
    {
      path: '/job/:id',
      name: 'JobDetail',
      component: JobDetail,
    },
  ],
})

export default router
