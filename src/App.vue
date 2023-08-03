<script setup>

import {ref, computed} from "vue";
import UBotton from "@/components/UBotton.vue";

const numb = 3

const products = ['шавуха', 'чебупели', 'беляш']

const users = [
  {id: 1, name: 'Джамшут', age: '34'},
  {id: 2, name: 'Мага', age: '27'},
  {id: 3, name: 'Шамиль', age: '42'}
]

const productData = ref('')

const fruitData = ref('')

const fruits = ref(['яблоко', 'ананас', 'груша', 'киви', 'персик', 'банан', 'абрикос'])

const queryFruits = computed(() => {
  //сравниваем массив символов с помощью indexOf и если этот индекс там есть, то он вернет нам его, в противном случае -1
  return fruits.value.filter((product) => product.indexOf(fruitData.value) !== -1)
})

const color = ref('green')

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}

</script>

<template>

  <nav class="navbar bg-body-tertiary">
    <form class="container-fluid justify-content-start">
      <button class="btn btn-outline-success me-2" type="button">Main button</button>
      <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
    </form>
  </nav>

  <div class="container">
    <p v-if="numb === 4">text 123</p>
    <p v-else-if="numb ===3">text 456</p>
    <p v-else>text 789</p>
  </div>

  <div class="container">
    <p v-show="numb === 3">text 123</p>
    <p v-show="numb ===4">text 456</p>
  </div>

  <div class="container">
    <ul>
      <li v-for="product in products">
        {{ product }}
      </li>
    </ul>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.age }}
      </li>
    </ul>
  </div>

  <div class="container">
    <p>{{ productData }}</p>
    <input type="text" v-model="productData">
  </div>


  <div class="container">
    <p>{{ queryFruits }}</p>
    <input type="text" v-model="fruitData">
    <ul>
      <li v-for="fruit in queryFruits" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>

  <div class="container">
    <p :style="{ color }" @click="toggleColor">
      Зеленый текст становится голубым при клике, и обратно
    </p>
  </div>

  <div class="container">
    <UBotton>КНОПКА1</UBotton>
    <UBotton>КНОПКА2</UBotton>
  </div>

</template>

<style scoped>

</style>