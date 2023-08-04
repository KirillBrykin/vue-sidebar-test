import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    //createWebHistory() - для современных браузеров отображение адресной строк при изменении маршрута
    //createWebHashHistory() - для старых браузеров отображение будет после символа #
    //createMemoryHistory() - не будет отображаться в адресной строке
    history: createWebHistory(),
    routes: [
        {
            name: 'pirateCode',
            path: '/',
            component: () => import("@/components/views/PirateCode.vue")
        },
        {
            name: 'crew',
            path: '/crew',
            component: () => import("@/components/views/CrewView.vue")
        },
        {
            name: 'victims',
            path: '/victims',
            component: () => import("@/components/views/VictimsView.vue")
        }
    ]
})

export default router