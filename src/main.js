import {createApp} from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import router from "@/router";

import {createPinia} from "pinia";

import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-bootstrap.css'

import Loader from "@/components/parts/Loader.vue";

import Keycloak from "keycloak-js";
import {useAuthStore} from "@/store/authStore";

import axios from "axios";

const initOptions = {
    url: import.meta.env.VITE_APP_KEYCLOAK_URL,
    realm: import.meta.env.VITE_APP_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_APP_KEYCLOAK_CLIENT_ID
}

const keycloak = new Keycloak(initOptions)

keycloak.init({
    onLoad: 'login-required',
    checkLoginIframe: false
}).then(async (auth) => {
    if (!auth) {
        window.location.reload()
    } else {
        const app = createApp(App)
            .use(router)
            .use(createPinia())
            .use(ToastPlugin)
            .component('Loader', Loader)

        const authStore = useAuthStore()

        await authStore.setKeycloak(keycloak)

        axios.interceptors.request.use(function (config) {
            console.log('updateToken interceptors')
            authStore.updateToken()
            config.headers.Authorization = `Bearer ${authStore.getToken}`
            return config
        })

        // обновление токена при фокусе (переключение между вкладками)
        window.onfocus = () => {
            console.log('updateToken onfocus')
            authStore.updateToken()

        }

        app.mount('#app')
    }
}).catch((e) => {
    console.log("Ошибка авторизации: " + e)
})