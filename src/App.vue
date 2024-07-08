<script setup>
import '@/fonts/stylesheet.css';

import SideBar from './SideBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container">
        <SideBar/>
        <RouterView/>     
    </div>
</template>

<style lang="scss">

body {
    font-family: 'Inter';  
}

.container {
    display: flex;
    width: 100%;
}

.drop-shadow {
    filter: drop-shadow(0 , 5px, 20px, rgba(0, 0, 0, 0.05));
}

.custom-link {
  all: unset;
}
</style>

