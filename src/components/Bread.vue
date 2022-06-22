<template>
    <a-breadcrumb :routes="router" style="margin: 16px 15px">
        <a-breadcrumb-item @click="run">首页</a-breadcrumb-item>
        <a-breadcrumb-item>{{ route.name }}</a-breadcrumb-item>
    </a-breadcrumb>
</template>
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
// console.log(route)

const router = useRouter()
const run = () => {
    router.push('/')
}
// console.log(route);
                                      
</script>
 
<style scoped>
</style>