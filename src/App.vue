<script setup>
import '@/fonts/stylesheet.css';
import MainPage from './MainPage.vue';
import SideBar from './SideBar.vue';
</script>

<template>
    <div class="container">
        <SideBar/>
        <MainPage/>     
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
</style>

