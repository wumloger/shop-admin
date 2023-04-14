import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFount from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Admin from '~/layouts/admin.vue'
import GoodsList from '~/pages/goods/list.vue'
import setting from '~/pages/setting.vue'
const routes = [
    {
        path: '/',
        name: 'index',
        component: Admin,

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

const asyncRoutes = [

    {
        path: '/',
        component: Index,
        meta: {
            title: '后台首页'
        }
    },
    {
        path: '/goods/list',
        component: GoodsList,
        meta: {
            title: '商品管理'
        }
    },
    {
        path: '/setting',
        component: setting
    },

]

export const router = createRouter({
    routes,
    history: createWebHashHistory(),

})


// 动态添加路由的方法
export function addRoutes(menus) {
    // 是否有新的路由
    let hasNewRoutes = false
    const findAndAddRoutesByMenus = (arr) => {
        arr.forEach(e => {
            const item = asyncRoutes.find(obj => obj.path == e.frontpath)
            if (item && router.hasRoute(item.path)) {
                router.addRoute('admin', item)
                hasNewRoutes = true
            }
            if (e.child && e.child.length > 0) {
                findAndAddRoutesByMenus(e.child)
            }
        })
    }
    findAndAddRoutesByMenus(menus)
    return hasNewRoutes
}
