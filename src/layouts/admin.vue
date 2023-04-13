<template>
    <el-container :direction="vertical">
        <el-header height="">
            <!-- Header content -->
            <f-header></f-header>
        </el-header>
        <el-container :direction="horizontal">
            <el-aside width="200px">
                <!-- Aside content -->
                <f-menu></f-menu>
            </el-aside>
            <el-main height="">
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

<style lang="scss" scoped></style>