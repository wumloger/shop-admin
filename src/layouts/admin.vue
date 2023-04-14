<template>
    <el-container :direction="vertical">
        <el-header height="">
            <!-- Header content -->
            <f-header></f-header>
        </el-header>
        <el-container>
            <el-aside :style="{ width: sideWidth }">
                <!-- Aside content -->
                <f-menu></f-menu>
            </el-aside>
            <el-main>
                <!-- Main content -->
                <f-tag-list></f-tag-list>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
import { storeToRefs } from 'pinia';
import { useAdminStore } from '~/store'
const store = useAdminStore()
const { sideWidth } = storeToRefs(store)

</script>

<style scoped>
.el-main {
    @apply w-full h-[48.3vw] bg-sky-300;
}
</style>