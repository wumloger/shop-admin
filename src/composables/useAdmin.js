import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminStore } from '~/store'
import { showModal, toast } from '~/composables/util'
import { updatepassword, adminLogin } from '~/api/admin'

import { setToken } from '~/composables/auth'

export function useRepassword() {
    const form = reactive({
        oldpassword: "123456",
        password: "admin",
        repassword: "admin"
    })
    const rePassRule = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('确认密码不能为空'))
        } else if (value !== form.password) {
            callback(new Error('确认密码必须和新密码一致'))
        } else {
            callback()
        }
    }

    const rules = {
        oldpassword: [{
            required: true,
            message: '旧密码不能为空',
            trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '新密码不能为空',
            trigger: 'blur'
        }],
        repassword: [{
            validator: rePassRule,
            trigger: 'blur'
        }]
    }
    const formRef = ref(null)
    const formDrawerRef = ref(null)
    const store = useAdminStore()
    const { adminLogout, getInfo } = store

    getInfo()
    const router = useRouter()
    const rePassword = () => {
        formDrawerRef.value.open()
    }
    const onSubmit = () => {
        formRef.value.validate((valid) => {
            if (!valid) {
                return false
            }
            // loading.value = true
            formDrawerRef.value.showLoading()
            updatepassword(form)
                .then((res) => {
                    console.log(res);
                    if (res.code == 200) {
                        toast("修改密码成功,请重新登录")
                        // showDrawer.value = false
                        adminLogout().then(() => {
                            router.push('/login')
                        })
                    } else {
                        toast(res.msg, 'error')
                    }
                }).finally(() => {
                    formDrawerRef.value.hideLoading()
                })
        })
    }

    return { onSubmit, rePassword, formRef, formDrawerRef, rules, form }
}

export function useLogout() {
    const router = useRouter()
    const store = useAdminStore()
    const { adminLogout } = store
    const handleLogout = () => {
        showModal('是否要退出登录?').then(() => {
            adminLogout()
            toast('退出成功')
            router.push('/login')

        })
    }

    return { handleLogout }
}

export function useLogin() {


    const { setStoreToken } = useAdminStore()
    const loading = ref(false)

    const router = useRouter()

    const form = reactive({
        username: 'admin',
        password: '123456'
    })

    const rules = {
        username: [{
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        },],
        password: [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        },]
    }

    const formRef = ref(null)

    const onSubmit = () => {
        formRef.value.validate((valid) => {
            if (!valid) {
                return false;
            }
            loading.value = true
            adminLogin(form.username, form.password)
                .then((res) => {
                    if (res.code == 200) {
                        //将token存入cookie
                        setToken(res.data.token)

                        toast('登录成功', 'success')
                        router.push('/')
                    } else {

                        toast('账号或密码错误', 'error')
                    }
                }).catch((err) => {
                    console.log(err);
                    toast('请求失败', 'error')
                }).finally(() => {
                    loading.value = false
                })
        })
    }

    function onKeyUp(e) {
        if (e.key == 'Enter') {
            onSubmit()
        }
    }

    onMounted(() => {
        document.addEventListener("keyup", onKeyUp)
    })
    onBeforeUnmount(() => {
        document.removeEventListener("keyup", onKeyUp)
    })

    return {
        loading,
        form,
        rules,
        formRef,
        onSubmit,
        onKeyUp,
        onMounted,
        onBeforeUnmount
    }
}
