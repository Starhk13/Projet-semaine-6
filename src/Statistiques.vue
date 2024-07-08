<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const store = useStatsStore();
  
  const stat = computed(() => store.stats[route.params.slug]);
  </script>

<template>
    <main>
    <div>
      <h1>{{ stat.title }}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas quisquam sunt suscipit architecto modi aut dolore, enim, earum autem explicabo quaerat! Voluptate distinctio cumque doloribus voluptatem mollitia cum voluptatibus!</p>
    </div>
    </main>
  </template>
  
  <style lang="scss" >

</style>
  