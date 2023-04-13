import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFount from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Admin from '~/layouts/admin.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Admin,
        children: [{
            path: '/',
            component: Index
        }],
        meta: {
            title: '后台首页'
        }
    },
    {
        path: '/login',
        name: 'login',
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