import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
// import LandingPage from '../components/LandingPage.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },

//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/About.vue')
//   }
]
const router = new VueRouter({
  routes
})
export default router
