import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./MainPage.vue";
import People from "./People.vue";
import Statistiques from './Statistiques.vue';

const routes = [
    { path: '/', component: MainPage},
    { path: '/statistiques/:slug', component: Statistiques},
    { path: '/people', component: People}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;