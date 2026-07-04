import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import TechDetail from '../views/TechDetail.vue'
import CompanyDetail from '../views/CompanyDetail.vue'
import IndustryDetail from '../views/IndustryDetail.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'CompanyDetail',
    component: CompanyDetail,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/tech/:id',
    name: 'TechDetail',
    component: TechDetail,
  },
  {
    path: '/application/:id',
    name: 'IndustryDetail',
    component: IndustryDetail,
  },
]

export function createRouterInstance() {
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
    scrollBehavior() {
      return { top: 0 }
    },
  })
}

export default createRouterInstance
