<template>
    <div class="side transition-all" :style="{ width: sideWidth }">
        Menu
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAdminStore } from '~/store'
const store = useAdminStore()
const { sideWidth } = storeToRefs(store)

</script>

<style scoped>
.side {
    width: 200px;
    @apply h-[93.2vh] bg-blue-200
}
</style>