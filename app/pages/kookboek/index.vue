<template>
  <!-- Placeholder PageHero voor onze kookboek -->
  <UPageHero v-if="section" v-bind="section" />
</template>
<script setup lang="ts">
const { data: section } = await useSection("kookboek", "intro");
</script>
