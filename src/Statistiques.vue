<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStats } from './storeDataStats';
  
  const route = useRoute();

  const store = useStats()

  const stat = computed(() => store.stats[route.params.slug]);
  const number = computed(() => store.numbers[route.params.slug]);
  </script>

<template>
    <main>
      <header class="header-top-page">
        <h1>{{ stat.title }}</h1>
    </header>
      <div>
        <h1>{{ stat.title }}</h1>
        <p>{{ number }}</p>
    </div>
    <router-link to="/">Revenir à la page d'accueil</router-link>
    </main>
  </template>
  
<style lang="scss" scoped >
  .header-top-page {
    max-width: 1110px;
    margin-right: auto;
    margin-left: auto;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);

    h1 {
        font-weight: bold;
        font-size: 24px;
    }
  }

  div {
    max-width: 171px;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    background-color: white;
    border-radius: 20px;
    text-align: center;

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    p {
      display: inline-block;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }
  }

</style>
  