import {defineStore} from "pinia";
import axios from "axios";

import {useToast} from "vue-toast-notification";

const $toast = useToast();
const URL = 'http://localhost:8080/api'

export const useCrewStore = defineStore("crewStore", {
    state: () => ({
        // переменные store
        crew: [],
        pirate: null
    }),
    // для получения данных из store
    getters: {
        getCrew() {
            return this.crew
        },
        getPirate() {
            return this.pirate
        },
        getCookTeam() {
            return this.crew.filter((el) => el.position === 'Повар')
        }
    },
    // действия с внешним источником
    actions: {
        async fetchPirateById(id) {
            try {
                const result = await axios.get(`${URL}/crew/${id}`)
                this.pirate = result.data
            } catch (error) {
                console.log(error)
                $toast.error('Не удалось получить члена экипажа! Ошибка: ' + error.message)
            }
        },
        async fetchCrew() {
            try {
                const result = await axios.get(`${URL}/crew`)
                this.crew = result.data
            } catch (error) {
                console.log(error)
                $toast.error('Не удалось получить членов экипажа! Ошибка: ' + error.message)
            }
        },
        async addPirate(pirate) {
            await axios.post(`${URL}/crew`, pirate)
                .then(() => {
                    $toast.success('Успешно сохранено!');
                })
                .catch((error) => {
                    console.log(error)
                    $toast.error('Не удалось сохранить! Ошибка: ' + error.message)
                })

        },
        async updatePirate(pirate) {
            await axios.put(`${URL}/crew/${pirate.id}`, pirate)
                .then(() => {
                    $toast.success('Успешно обновлено!');
                })
                .catch((error) => {
                    console.log(error)
                    $toast.error('Не удалось обновить! Ошибка: ' + error.message)
                })

        },
        async deletePirateById(id) {
            await axios.delete(`${URL}/crew/${id}`)
                .then(() => {
                    $toast.success('Успешно удалили!');
                })
                .catch((error) => {
                    console.log(error)
                    $toast.error('Не удалось удалить! Ошибка: ' + error.message)
                })

        }
    }
})