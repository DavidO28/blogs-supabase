import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-blog',
      name: 'create-blog',
      component: () => import('../views/CreateBlog.vue')
    },
    {
      path: '/update/:blogId',
      name: 'UpdateBlog',
      component: () => import('../components/UpdateBlog.vue'),
      props: true
    },
  ]
})

export default router
