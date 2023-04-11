import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFount from '~/pages/404.vue'
import Login from '~/pages/login.vue'

const routes = [
    {
        path: '/',
        component: Index,
        meta: {
            title: '后台首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录页'
        }
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