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
      <div>
        <h1>{{ stat.title }}</h1>
        <p>{{ number }}</p>
    </div>
    <router-link to="/">Revenir à la page d'accueil</router-link>
    </main>
  </template>
  
<style lang="scss" scoped >
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
  