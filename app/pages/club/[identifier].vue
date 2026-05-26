<template>
  <div class="blog-details">
    <UPageSection v-if="blog" :title="blog.title" :ui="{ root: 'm-h-50' }">
      <template #description>
        <NuxtTime :datetime="blog.date" />
        <ContentRenderer :value="blog.body" />
      </template>
      <NuxtImg
        v-if="blog.image"
        v-bind="blog.image"
        class="absolute inset-0 -z-10 -scale-z-105 blur-xs w-full h-full object-cover object-top brightness-25"
        width="300"
      />
    </UPageSection>
  </div>
</template>
<script setup lang="ts">
import type { UserProps } from "@nuxt/ui";

const route = useRoute();

const identifier = computed(() => route.params.identifier);

const parts = computed(() => (identifier.value as string).split("-"));

const dateCondensed = computed(() => parts.value[0] || "00000000");

const date = computed(() => {
  const year = dateCondensed.value.substring(0, 4);
  const month = dateCondensed.value.substring(4, 6);
  const day = dateCondensed.value.substring(6, 8);
  return `${year}-${month}-${day}`;
});

const slug = computed(() => parts.value.slice(1).join("-") || "00000000");

const { data: blog } = await useAsyncData(route.path, () => {
  return queryCollection("club")
    .where("path", "=", `/club/${slug.value}`)
    .where("date", "=", date.value)
    .first();
});

if (!blog.value) {
  // throw createError({
  //   status: 404,
  // });
}

const authors = computed(
  () => blog.value?.chef?.map<UserProps>(useChefAvatar) || [],
);
</script>
<style scoped></style>
