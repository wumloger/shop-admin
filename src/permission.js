import router from '~/router'
import { getToken } from './utils/auth'
import { toast } from './utils/toast'

//全局的路由前置守卫

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    const token = getToken()

    if (!token && to.path != '/login') {
        toast('请先登录', 'error')
        return next({ path: '/login' })
    }

    if (token && to.path == '/login') {
        toast('请勿重复登录', 'error')
        return next({ path: from.path ? from.path : '/' })
    }

    next()
})