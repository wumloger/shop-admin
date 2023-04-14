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
import { useLogin } from '~/composables/useAdmin'
const { loading,
    form,
    rules,
    formRef,
    onSubmit,
    onKeyUp,
    onMounted,
    onBeforeUnmount } = useLogin()




</script>

<style scoped>
.bg-image {
    background-image: url('https://img1.baidu.com/it/u=3742409453,1965896937&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500');
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
</style>