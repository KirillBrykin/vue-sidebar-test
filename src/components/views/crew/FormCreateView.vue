<script setup>
import {useCrewStore} from "@/store/crewStore";
import {computed, reactive, ref} from "vue";
import {useVuelidate} from '@vuelidate/core'
import {email, minLength, required} from "@vuelidate/validators";
import BaseInput from "@/components/parts/BaseInput.vue";
import Errors from "@/components/parts/Errors.vue";

const crewStore = useCrewStore()

const initialState = {
  name: '',
  nickName: '',
  email: '',
  position: ''
}

// ref - для примитивных типов
let pirate = reactive({...initialState})

// правила валидации
const rules = {
  name: {required, minLength: minLength(3)},
  nickName: {required},
  email: {required, email},
  position: {required}
}

const v$ = useVuelidate(rules, pirate)

const isError = computed(() => {
  return v$.value.$error
})

const submit = async () => {
  const result = await v$.value.$validate()
  if (result) {
    await crewStore.addPirate(pirate)
    resetForm()
  }
}

function resetForm() {
  Object.assign(pirate, initialState)
  //сброить состояние объекта валидатора
  v$.value.$reset()
}
</script>

<template>
  <div class="card">
    <div class="card-header3">
      <h4>Сохранить члена команды</h4>
    </div>
    <div class="card-body">
      <!--      Вынесли в компонент -->
      <!--      <div class="alert alert-danger" v-if="isError">-->
      <!--        <p>Ошибки:</p>-->
      <!--        <ul>-->
      <!--          <li v-for="error in v$.$errors">-->
      <!--            {{ error.$property }} - {{ error.$message }}-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </div>-->
      <Errors :error-msg="v$.$errors" v-if="isError"/>

      <form @submit.prevent.stop="submit">
        <!--      Вынесли в компонент -->
        <!--        <div class="mb-3">-->
        <!--          <label for="name" class="form-label">Имя</label>-->
        <!--          <input type="text" v-model="pirate.name" class="form-control" id="name">-->
        <!--          <div class="m2 text-danger">-->
        <!--            <ul>-->
        <!--              <li v-for="error in v$.name.$errors">-->
        <!--                {{ error.$message }}-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--        </div>-->
        <BaseInput v-model="pirate.name" input-name="name" label="Имя" :errors="v$.name.$errors" :is-error="isError"/>
        <BaseInput v-model="pirate.nickName" input-name="nickName" label="Кличка" :errors="v$.nickName.$errors"
                   :is-error="isError"/>
        <BaseInput v-model="pirate.email" input-name="email" label="Почта" type="email" :errors="v$.email.$errors"
                   :is-error="isError"/>
        <BaseInput v-model="pirate.position" input-name="position" label="Должность" :errors="v$.position.$errors"
                   :is-error="isError"/>
        <button type="submit" class="btn btn-primary m-1">Сохранить</button>
        <router-link :to="{name: 'crew'}" class="btn bg-body-secondary">Назад</router-link>
      </form>
    </div>
  </div>
</template>

<style scoped></style>