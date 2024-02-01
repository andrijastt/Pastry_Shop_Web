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
  },
  {
    path: '/changeProfileInfo',
    name: 'changeProfileInfo',
    component: () => import('../views/ChangeProfileInfoView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('../views/NotificationsView.vue')
  },
  {
    path: '/dessertDetails/:id',
    name: 'dessertDetails',
    component: () => import('../views/DessertDetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
