import { createRouter, createWebHashHistory } from 'vue-router'
import ListView from '../views/ListView.vue'

const routes = [
  {
    path: '/',
    name: 'liste',
    component: ListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
