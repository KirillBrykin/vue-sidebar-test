<script setup>
import {useCrewStore} from "@/store/crewStore";
import {ref} from "vue";

const crewStore = useCrewStore()

let pirate = ref({
  name: '',
  nickName: '',
  email: '',
  position: ''
})

function submit(pirate) {
  crewStore.addPirate(pirate)
  this.pirate = {
    name: '',
    nickName: '',
    email: '',
    position: ''
  }
}
</script>

<template>

  <div class="card">
    <div class="card-header3">
      <h4>Сохранить члена команды</h4>
    </div>
    <div class="card-body">
      <form @submit.prevent.stop="submit(pirate)">
        <div class="mb-3">
          <label for="name" class="form-label">Имя</label>
          <input type="text" required v-model="pirate.name" class="form-control" id="name">
        </div>
        <div class="mb-3">
          <label for="nickName" class="form-label">Кличка</label>
          <input type="text" required v-model="pirate.nickName" class="form-control" id="nickName">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Почта</label>
          <input type="text" required v-model="pirate.email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="position" class="form-label">Должность</label>
          <input type="text" required v-model="pirate.position" class="form-control" id="position">
        </div>
        <button type="submit" class="btn btn-primary m-1">Сохранить</button>
        <router-link :to="{name: 'crew'}" class="btn bg-body-secondary">Назад</router-link>
      </form>
    </div>
  </div>


</template>

<style scoped>

</style>