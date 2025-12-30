// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskDetail from '../views/TaskDetail.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/task/:id', component: TaskDetail, name: 'TaskDetail' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router