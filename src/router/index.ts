import AlbumsView from '@/router/views/AlbumsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'albums',
      component: AlbumsView,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('@/router/views/NotFoundView.vue'),
    },
  ],
})

export default router
