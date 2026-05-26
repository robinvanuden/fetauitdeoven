<template>
  <!-- Placeholder PageHero voor onze kookboek -->
  <UPageHero v-if="section" v-bind="section">
    <NuxtImg
      v-if="section.image"
      v-bind="section.image"
      class="absolute inset-0 -z-10 -scale-z-105 blur-xs w-full h-full object-cover object-top brightness-50"
      width="100"
    />
  </UPageHero>
</template>
<script setup lang="ts">
const { data: section } = await useSection("kookboek", "intro");
</script>
<style scoped></style>
