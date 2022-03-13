import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/redacoes',
      name: 'redacoes',
      component: () => import('../views/ListEssaysView.vue')
    },
    {
      path: '/redacao',
      name: 'redacao',
      component: () => import('../views/ReadEssayView.vue')
    },

  ]
})

export default router
