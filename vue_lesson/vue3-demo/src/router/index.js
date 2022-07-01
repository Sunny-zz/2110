import { createRouter , createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  // { path: '/:param(\\d+)', component: About },
  { path: '/about', component: About },
  { path: '/:pathParam(.*)*', component: NotFound}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router