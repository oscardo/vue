import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import  PostListView  from '../views/PostListView.vue';
import  PostDetailsView  from '../views/PostDetailsView.vue';
const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: to => {return {name: 'PostList'}},
    },
    {
        path: '/post',
        name: 'PostList',
        component: PostListView,
    },
    {
        path: '/post/:id',
        name: 'PostDetails',
        component: PostDetailsView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router