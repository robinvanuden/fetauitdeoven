<template>
  <UMain v-if="title">
    <UPageHero :title="title" :description="description" :links="links" />
  </UMain>
  <UError v-else :error="error" />
</template>
<script setup lang="ts">
const error = useError();

const title = computed(() => {
  switch (error.value?.status) {
    case 404:
      return "Heeft iemand de kip gezien?!";
    case 500:
      return "Dit loopt helemaal in de soep!";
    default:
      return undefined;
  }
});

const description = computed(() => {
  switch (error.value?.status) {
    case 404:
      return "Het lijk erop dat deze pagina niet (meer) bestaat.";
    case 500:
      return "Er is iets misgegaan. Probeer het later opnieuw.";
    default:
      return undefined;
  }
});

const links = computed(() => [
  {
    label: "Terug naar home",
    to: "/",
  },
]);
</script>