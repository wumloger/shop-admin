<template>
    <el-container :direction="vertical">
        <el-header height="">
            <!-- Header content -->
            <f-header></f-header>
        </el-header>
        <el-container :direction="horizontal">
            <el-aside>
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

</script>

<style scoped>
.el-aside {
    @apply w-min
}

.el-main {
    @apply w-full h-[65.3vw] bg-sky-300
}
</style>