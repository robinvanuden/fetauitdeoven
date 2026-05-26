<template>
  <UApp>
    <UTheme :ui="ui">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UTheme>
  </UApp>
</template>
<script lang="ts" setup>
import type { ThemeUI } from "#ui/composables";

const ui = computed<ThemeUI>(() => ({
  pageSection: { title: "font-serif tracking-wider" },
  pageHero: { title: "font-serif tracking-wider" },
}));

useHead({
  title: "Feta uit de Oven",
});
</script>
