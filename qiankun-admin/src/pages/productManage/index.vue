<template>
    <div class="home" @click="clickMe">我是商品管理</div>
</template>
<script setup lang="ts">
const clickMe = () => {
    window.history.replaceState(null, '', '/micro-vue-app1')
}
</script>

<style scoped lang="scss"></style>