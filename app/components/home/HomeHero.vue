<template>
  <UPageHero
    v-if="section"
    v-bind="section"
    class="overflow-hidden"
    orientation="horizontal"
    :ui="{ title: 'font-serif tracking-wide text-primary sm:text-6xl' }"
  />
</template>
<script setup lang="ts">
const { data: section } = await useSection("home", "intro");
</script>
<style scoped></style>
