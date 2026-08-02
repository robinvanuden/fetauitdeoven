<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script lang="ts" setup>
useHead({
  title: "Feta uit de Oven",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icon/favicon-180x180.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      href: "/icon/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      href: "/icon/favicon-16x16.png",
    },
  ],
});
</script>
