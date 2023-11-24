import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessView from '../views/AccessView.vue'

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
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiereAuth: false
    }
  },
  {
    path: '/Access',
    name: 'access',
    component: AccessView,
    meta: {
      requiereAuth: true
    }
  },
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
