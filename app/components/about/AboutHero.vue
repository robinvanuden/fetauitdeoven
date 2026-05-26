<template>
  <UPageHero v-if="section" v-bind="section" />
</template>
<script setup lang="ts">
const { data: section } = await useSection("about", "intro");
</script>
<style scoped></style>
