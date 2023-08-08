<script setup>
import {useCrewStore} from "@/store/crewStore";
import {computed, onMounted, ref} from "vue";

const crewStore = useCrewStore()

let loading = ref(true)

const getCrew = computed(() => {
  return crewStore.getCrew
})

onMounted(async () => {
  await crewStore.fetchCrew()
  loading.value = false
})

async function deletePirate(id, index) {
  await crewStore.deletePirateById(id)
  this.getCrew.splice(index, 1)
}
</script>

<template>
  <div class="col-11">
    <h1>Команда корабля</h1>
  </div>
  <div class="col-1">
    <router-link :to="{name: 'crew.add'}" class="btn btn-primary float-end">Добавить</router-link>
  </div>

  <Loader v-if="loading"/>

  <table class="table table-striped table-bordered table-dark" v-if="!loading">
    <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Кличка</th>
      <th scope="col">Почта</th>
      <th scope="col">Должность</th>
      <th scope="col">Действие</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(pirate,index) in getCrew" :key="pirate.id" :index="index">
      <td>{{ pirate.name }}</td>
      <td>{{ pirate.nickName }}</td>
      <td>{{ pirate.email }}</td>
      <td>{{ pirate.position }}</td>
      <td>
        <router-link :to="{name: 'crew.edit',params:{id : pirate.id}}" class="btn btn-success m-1">Изменить
        </router-link>
        <input type="submit" class="btn btn-danger m-1" value="Удалить" @click="deletePirate(pirate.id, index)">
      </td>
    </tr>
    <tr>
      <td colspan="4">Всего</td>
      <td>{{ getCrew.length }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped></style>