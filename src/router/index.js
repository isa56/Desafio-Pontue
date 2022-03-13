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

  ]
})

export default router
