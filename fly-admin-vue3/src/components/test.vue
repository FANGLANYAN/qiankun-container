<template>
    <button @click="clickMe">
        我是测试按钮
    </button>
</template>

<script setup lang="ts">
// import { getCurrentInstance } from 'vue'
// const proxy = getCurrentInstance();

const clickMe = () => {
    window.history.replaceState({
        user: {}
    }, '', '/home/micro-react-app2')
    //todo  封装公共函数发布到npm
    // window.history.replaceState({
    //     user: {}
    // }, '', '/login')
}

</script>