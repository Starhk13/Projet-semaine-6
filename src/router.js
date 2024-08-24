import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./MainPage.vue";
import People from "./People.vue";
import Statistiques from './Statistiques.vue';
import Login from "./Login.vue";
import Register from "./Register.vue";
import Profile from "./Profile.vue";

const requireAuth = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
    next('/login');
  } else {
    next();
  }
};

const routes = [
  { path: '/', component: MainPage },
  { path: '/statistiques/:slug', component: Statistiques },
  { path: '/people', component: People, beforeEnter: requireAuth },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile, beforeEnter: requireAuth }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
