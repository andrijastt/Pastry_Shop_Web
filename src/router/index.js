import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }  ,
  {
    path: '/buyer',
    name: 'buyer',
    component: () => import('../views/BuyerView.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('../views/SellerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
