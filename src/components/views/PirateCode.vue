<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function handleClick() {
  router.push({name: 'crew'})
}
</script>

<template>
  <h2>Пиратский кодекс</h2>
  <p>text1</p>
  <p>text2</p>
  <p>text3</p>

  <p><a href="#" @click="handleClick">click me to go to the crew</a></p>
  <p><a href="#" @click="$router.push({name: 'victims'})">click me to go to the victims</a></p>
</template>

<style scoped>
</style>