<template>
    <div>
        <h2>index</h2>
        <p>{{ token }}</p>
        <p>{{ admin.nickname }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCookies } from "@vueuse/integrations/useCookies";
import { storeToRefs } from 'pinia'
import { useAdmin } from '~/store'

const store = useAdmin()
const { admin } = storeToRefs(store)
console.log(admin);
const cookie = useCookies()
const token = ref(cookie.get('admin-token'))

</script>

<style lang="scss" scoped></style>