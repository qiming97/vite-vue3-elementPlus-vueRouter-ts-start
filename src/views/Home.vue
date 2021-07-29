<template>
  <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "@vue/runtime-core";
import HelloWorld from "../components/HelloWorld.vue";
let instance = getCurrentInstance()?.proxy;

instance?.$message.success("感谢使用");
instance?.$notify({
  type: "success",
  title: "提示",
  message: "欢迎使用",
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}
</style>
