import {defineStore} from "pinia";

const clientId = import.meta.env.VITE_APP_KEYCLOAK_CLIENT_ID
const logoutUrl = import.meta.env.VITE_APP_KEYCLOAK_LOGOUT
const TOKEN_MIN_VALIDITY_SECONDS = 300

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        keycloak: Object
    }),
    getters: {
        getRoles() {
            const token = this.keycloak.tokenParsed
            if (token !== null && token.resource_access != null && token.resource_access[clientId] != null) {
                return token.resource_access[clientId].roles
            }
            return []
        },
        getUserName() {
            return this.keycloak.tokenParsed.preferred_username
        },
        isAdmin() {
            return this.getRoles.indexOf('client_role_admin') > -1
        },
        isUser() {
            return this.getRoles.indexOf('client_role_user') > -1
        },
        getToken() {
            return this.keycloak.token
        }
    },
    actions: {
        setKeycloak(keycloak) {
            this.keycloak = keycloak
        },
        async logout() {
            await this.keycloak.logout({redirectUri: logoutUrl})
        },
        async updateToken() {
            await this.keycloak.updateToken(TOKEN_MIN_VALIDITY_SECONDS)
                .then((refreshed) => {
                    if (refreshed) {
                        console.log("Токен обновлен")
                    } else {
                        console.log("Токен не обновлен, действителен " +
                            Math.round(
                                this.keycloak.tokenParsed.exp +
                                this.keycloak.timeSkew -
                                new Date().getTime() / 1000) + " секунд"
                        );

                    }
                })
                .catch(() => {
                    console.error("Не удалось обновить токен")
                })
        }
    }
})