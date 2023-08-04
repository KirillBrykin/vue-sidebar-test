<script setup>
import Sidebar from "@/components/parts/Sidebar.vue";
import AboutRMS from "@/components/views/ProjectDescriptionView.vue";
import TeamRMS from "@/components/views/TeamView.vue";
import Client from "@/components/views/ClientsView.vue";

const authUser = {
  name: "Черная Борода",
  url: "https://sun9-31.userapi.com/impf/c626122/v626122940/4b916/NHsOatxET68.jpg?size=720x1280&quality=96&sign=0ada1be20019613765bb5a3448569716&type=album"
};
</script>

<template>
  <main class="d-flex flex-nowrap">
    <Sidebar :user="authUser"></Sidebar>
    <div class="b-example-divider b-example-vr"></div>
  </main>
</template>

<style scoped>
.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}
</style>