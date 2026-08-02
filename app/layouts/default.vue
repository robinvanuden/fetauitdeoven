<template>
  <div id="feta">
    <UMain>
      <UHeader to="/" :ui="{ root: 'shadow-0 border-0' }">
        <template #title>
          <NuxtImg src="/logo.png" height="80" class="h-10" />
        </template>
        <template #right>
          <UNavigationMenu
            class="md:flex hidden"
            variant="link"
            :items="items"
          />
        </template>
        <template #body>
          <UNavigationMenu
            variant="pill"
            :items="items"
            orientation="vertical"
          />
        </template>
      </UHeader>
      <slot />
    </UMain>
    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Feta uit de Oven © 2024-{{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UFooter>
  </div>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Kookclub",
    to: "/blog",
  },
  {
    label: "Recepten",
    to: "/kookboek",
  },
  {
    label: "Over ons",
    to: "/about",
  },
]);
</script>
