import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowTable from '../views/ShowTable/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: ShowTable,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
