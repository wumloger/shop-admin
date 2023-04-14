import router from '~/router'
import { getToken } from './composables/auth'
import { toast, showFullLoading, hideFullLoading } from './composables/util'

//全局的路由前置守卫

router.beforeEach((to, from, next) => {
    //显示进度条
    showFullLoading()
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


    //设置页面标题
    let title = '商品管理后台-' + (to.meta.title ? to.meta.title : '')
    document.title = title

    next()
})

router.afterEach((to, from) => {
    // to and from are both route objects.
    hideFullLoading()
})