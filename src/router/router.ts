import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: () => import('../views/DownCount.vue')
  },
  {
    path: '/table',
    name: '',
    component: () => import('../views/Table.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router