import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requiereAuth: false
    }
  },
  {
    path: '/Login',
    name: 'login',
    component: LoginView,
    meta: {
      requiereAuth: false
    }
  },
  {
    path: '/Dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiereAuth: true,
      role: 'admin'
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //const auth = store.jwt !== null
  const auth = false 
  const needAuth = to.meta.requiereAuth
  if(needAuth && !auth){
    //lo sentimos
    next('login')
  }else{
    next()
  }
})

export default router

