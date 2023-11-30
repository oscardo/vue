import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NoteCreateView from '../views/NoteCreateView.vue'
import NoteView from '../views/NotesView.vue'

import useAuth from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/NoteCreate',
    name: 'NoteCreate',
    component: NoteCreateView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/NoteView',
    name: 'NoteView',
    component: NoteView,
    meta: {
      requireAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  const isAuth = useAuth().token
  if((to.meta.requireAuth) && (isAuth === null)){
    next('login')
  }else{
    next()
  }
}) 

export default router
