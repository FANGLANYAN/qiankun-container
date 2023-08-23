<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TestBtn></TestBtn>
  <div>
    <RouterLink to="/home">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </div>
  <div>我是/home/admin
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';
import TestBtn from './components/test.vue';

@Options({
  components: {
    // HelloWorld,
    TestBtn
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
