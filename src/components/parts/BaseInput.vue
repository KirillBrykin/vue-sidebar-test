<script setup>
import {defineProps} from 'vue'

const {modelValue} = defineProps({
  modelValue: String,
  errors: Array,
  label: String,
  inputName: String,
  isError: Boolean,
  type: {
    type: String,
    //значение по умолчанию
    default: 'text',
    validator: (v) => [
      'text',
      'password',
      'tel',
      'email',
      'search'
    ].includes(v)
  }
})
</script>

<template>
  <div class="mb-3">
    <label :for="inputName" class="form-label">{{ label }}</label>
    <!-- $emit - можно использовать для объявления событий, которые могут быть сгенерированы компонентом для своих родителей -->
    <input :type="type" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"
           class="form-control" :id="inputName">
    <div class="mt-2 text-danger" v-if="isError">
      <ul>
        <li v-for="error in errors">
          {{ error.$message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>