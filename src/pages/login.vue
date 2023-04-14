<template>
    <div>
        <el-row class="w-full h-screen">
            <el-col :span="14" class="bg-indigo-500 flex justify-center items-center text-light-50 flex-col bg-image">
                <p class="text-5xl font-bold">shop admin</p>
                <p class="text-3xl">Vue 3 和 Vite 的后台管理系统</p>
            </el-col>
            <el-col :span="10" class="flex flex-col justify-center items-center">
                <h2 class="text-gray-600 text-3xl">后台登录</h2>
                <div class="flex justify-center items-center my-5 space-y-2">
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                    <span>账号密码登录</span>
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                </div>
                <el-form :model="form" :rules="rules" ref="formRef">
                    <el-form-item label="Username" prop="username">
                        <el-input placeholder="Username" v-model="form.username">
                            <template #prefix>
                                <el-icon>
                                    <user />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="Password" prop="password">
                        <el-input type="password" placeholder="Password" v-model="form.password">
                            <template #prefix>
                                <el-icon>
                                    <lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button :loading="loading" @click="onSubmit" type="primary" size="default"
                            class="w-full py-4 bg-indigo-600 text-white rounded-full">登
                            录</el-button>
                    </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { adminLogin } from '~/api/admin'
import { useRouter } from 'vue-router'
// import { ElNotification } from 'element-plus'
// import { useCookies } from '@vueuse/integrations/useCookies'
import { toast } from '~/composables/util'
import { setToken } from '~/composables/auth'
import { useAdminStore } from '~/store'

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
</script>

<style scoped>
.bg-image {
    background-image: url('https://img1.baidu.com/it/u=3742409453,1965896937&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500');
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
</style>