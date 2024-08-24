import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueToast from "vue-toast-notification"
import 'vue-toast-notification/dist/theme-sugar.css'
import App from './App.vue'
import router from './router'
 

const pinia = createPinia()

const app = createApp(App) 
app.use(pinia)
app.use(router)
app.use(VueToast)
app.mount('#app')
