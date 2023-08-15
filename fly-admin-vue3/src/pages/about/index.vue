<template>
    <div class="home" @click="clickMe">我是about</div>
</template>
<script setup lang="ts">
const clickMe = () => {
    window.history.replaceState(null, '', '/micro-vue-app1')
}
</script>

<style scoped lang="scss"></style>