<script setup>
import "../../assets/css/sidebar.css"
import SvgBootstrap from "@/components/parts/SvgBootstrap.vue";
import {useAuthStore} from "@/store/authStore";

const authStore = useAuthStore()

const menuList = [
  {url: '/', name: 'Пиратский кодекс', svg: '#tsunami'},
  {url: '/crew', name: 'Команда корабля', svg: '#gender-trans'},
  {url: '/victims', name: 'Жертвы', svg: '#emojiKiss'}
];

const dropdownMenu = [
  {name: 'Новый проект'},
  {name: 'Настроить'},
  {name: 'Профиль'}
];

const props = defineProps({user: Object});
</script>

<template>
  <!-- SVG -->
  <SvgBootstrap/>

  <!-- sidebar -->
  <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark main-menu" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32">
        <use xlink:href="#radioactive"/>
      </svg>
      <i class="bi bi-radioactive"></i>
      <span class="fs-5">Летучий Голландец</span>
    </a>

    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="menu in menuList" :key="menu.url">
        <router-link :to="menu.url" active-class="active" class="nav-link text-white" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use :href="`${menu.svg}`"/>
          </svg>
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
    <hr>

    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
         data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="props.user.url" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>{{ props.user.name }}</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li v-for="(item, index) in dropdownMenu" :key="index">
          <a class="dropdown-item" href="#">{{ item.name }}</a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a @click="authStore.logout()" class="dropdown-item" href="#">Выход</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bi {
  vertical-align: -.125em;
  fill: currentColor;
}
</style>