import {createApp} from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import router from "@/router";

import {createPinia} from "pinia";

import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-bootstrap.css'

import Loader from "@/components/parts/Loader.vue";

createApp(App)
    .use(router)
    .use(createPinia())
    .use(ToastPlugin)
    .component('Loader', Loader)
    .mount('#app')