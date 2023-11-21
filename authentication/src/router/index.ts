import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Authview from '../views/AuthView.vue';
import Firebase from '../views/FirebaseView.vue'
import SocialView from '../views/SocialView.vue';
import AWSView from '../views/AWSView.vue';
import AzureView from '../views/AzureView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: Authview
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: Firebase
  },
  {
    path: '/social',
    name: 'social',
    component: SocialView
  },
  {
    path: '/aws',
    name: 'aws',
    component: AWSView
  },
  {
    path: '/azure',
    name: 'azure',
    component: AzureView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
