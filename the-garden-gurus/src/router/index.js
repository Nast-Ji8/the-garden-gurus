import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/table',
    name: 'table',
    component: function () {
      return import('../views/Table.vue')
    }
  },
  {
    path: '/answer',
    name: 'answer',
    component: function () {
      return import('../views/Answer.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
