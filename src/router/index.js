import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFount from '~/pages/404.vue'
import Login from '~/pages/Login.vue'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFount',
        component: NotFount
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;