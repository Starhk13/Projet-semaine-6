import { createWebHistory, createRouter } from "vue-router";

import MainPage from "./MainPage.vue";
import Statistiques from './Statistiques.vue';

const routes = [
    { path: '/', component: MainPage},
    { path: '/statistiques/:slug', component: Statistiques},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;