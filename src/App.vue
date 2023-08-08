<script setup>
import Sidebar from "@/components/parts/Sidebar.vue";
import DividerBar from "@/components/parts/DividerBar.vue";


const authUser = {
  name: "Черная Борода",
  url: "https://sun9-31.userapi.com/impf/c626122/v626122940/4b916/NHsOatxET68.jpg?size=720x1280&quality=96&sign=0ada1be20019613765bb5a3448569716&type=album"
};
</script>

<template>
  <main class="d-flex flex-nowrap">
    <Sidebar :user="authUser"></Sidebar>
    <DividerBar/>
    <div class="container-fluid m-4">
      <div class="row">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  /*height: -webkit-fill-available;*/
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>