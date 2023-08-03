<script setup>
import "../assets/css/sidebar.css"
import SvgIcons from "@/components/icon/SvgIcons.vue";

</script>

<template>
  <SvgIcons/>


  <div class="d-flex flex-nowrap flex-column flex-shrink-0 p-3 text-bg-dark main-menu" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32">
        <use xlink:href="#bootstrap"/>
      </svg>
      <span class="fs-5">Летучий голландец</span>
    </a>

    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#yinYang"/>
          </svg>
          О проекте
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#people"/>
          </svg>
          Команда
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16">
            <use xlink:href="#emojiKiss"/>
          </svg>
          Клиенты
        </a>
      </li>
    </ul>
    <hr>

    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
         data-bs-toggle="dropdown" aria-expanded="false">
        <img
            src="https://sun9-31.userapi.com/impf/c626122/v626122940/4b916/NHsOatxET68.jpg?size=720x1280&quality=96&sign=0ada1be20019613765bb5a3448569716&type=album"
            alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>Кирилл</strong>
      </a>
    </div>
  </div>

</template>

<style scoped>

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

</style>