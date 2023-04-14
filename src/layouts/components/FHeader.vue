<template>
    <div class="v-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0 h-16">
        <div class="f-center text-xl bg-blue-500 h-[100%] transition-all" :style="{ width: sideWidth }">
            <el-icon class="mr-1 text-3xl">
                <ElementPlus></ElementPlus>
            </el-icon>
            <span v-if="sideWidth == '200px'">极客空间</span>

        </div>
        <el-icon class="icon-btn" @click="handleSideWidth">
            <fold v-if="sideWidth == '200px'" />
            <Expand v-else />
        </el-icon>
        <div class="v-center ml-auto">
            <el-icon class="icon-btn" @click="$router.go(0)">
                <Refresh />
            </el-icon>
            <el-icon class="icon-btn" @click="toggle">
                <FullScreen v-if="!isFullscreen" />
                <Aim v-else />
            </el-icon>
            <el-icon class="icon-btn">
                <Printer />
            </el-icon>
            <el-icon class="icon-btn">
                <Setting />
            </el-icon>
            <el-dropdown class="f-center mx-2 h-64 cursor-pointer">
                <span class="v-center text-light-50">
                    <el-avatar class="mr-2" size="25" :src="adminInfo.avatar"></el-avatar>
                    {{ adminInfo.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>

    <FormDrawer ref="formDrawerRef" destroy-on-close @submit="onSubmit" size="40%">
        <el-form label-width="80px" :model="form" :rules="rules" ref="formRef">
            <el-form-item label="旧密码" prop="oldpassword">
                <el-input placeholder="请输入旧密码" v-model="form.oldpassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                <el-input type="password" v-model="form.password" show-password placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="repassword">
                <el-input type="password" v-model="form.repassword" show-password placeholder="请输入确认密码"></el-input>
            </el-form-item>
        </el-form>
    </FormDrawer>
</template>

<script setup>
import FormDrawer from '../../components/FormDrawer.vue';
import { storeToRefs } from 'pinia'
import { useAdminStore } from '~/store'
import { useFullscreen } from '@vueuse/core'
import { useLogout, useRepassword } from '~/composables/useAdmin'

const { handleLogout } = useLogout()
const { isFullscreen, toggle } = useFullscreen()
const store = useAdminStore()
const { adminInfo, sideWidth } = storeToRefs(store)
const { getInfo, handleSideWidth } = store

// getInfo()
const { formRef, formDrawerRef, rules, form, rePassword, onSubmit } = useRepassword()

</script>

<style scoped>
.icon-btn {
    @apply flex justify-center items-center mx-1 cursor-pointer
}

.icon-btn:hover {
    @apply bg-indigo-300;
}
</style>