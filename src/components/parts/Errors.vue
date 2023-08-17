<script setup>
import {defineProps} from 'vue'

defineProps({
  errorMsg: Array
})
</script>

<template>
  <div class="alert alert-danger">
    <p>Ошибки:</p>
    <ul>
      <li v-for="error in errorMsg">
        {{ error.$property }} - {{ error.$message }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>