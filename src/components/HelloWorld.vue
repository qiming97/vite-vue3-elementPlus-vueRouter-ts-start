<template>
  <h1>{{ msg }}</h1>

  <el-button icon="el-icon-success" type="primary" @click="count++"
    >count is: {{ count }}</el-button
  >

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const props = defineProps(["msg"]);
const count = ref(0);
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
