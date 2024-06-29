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
</style>

