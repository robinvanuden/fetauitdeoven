<template>
  <UPageSection v-if="section" v-bind="section" orientation="horizontal">
    <template #description>
      <ContentRenderer :value="section" />
    </template>
    <div class="image">
      <NuxtImg
        v-if="section.image"
        v-bind="section.image"
        class="rounded-3xl"
        width="600"
      />
      <small class="text-dimmed mt-2 block"
        >Andrea, Lisa, Raymond en Robin</small
      >
    </div>
  </UPageSection>
</template>
<script setup lang="ts">
const { data: section } = await useSection("about", "oorsprong");
</script>
