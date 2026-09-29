<template>
  <UContainer>
    <UPage>
      <UPageBody>
        <UPageSection
          v-if="blog"
          :title="blog.title"
          orientation="horizontal"
          :ui="{ root: 'min-h-120' }"
        >
          <template #top>
            <NuxtImg
              v-if="blog.image"
              v-bind="blog.image"
              class="object-cover object-center rounded-xl aspect-banner mx-auto"
            />
          </template>
          <template #description>
            <NuxtTime :datetime="blog.date" locale="nl" />
            <ContentRenderer :value="blog.body" />
          </template>
        </UPageSection>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
<script setup lang="ts">
import type { UserProps } from "@nuxt/ui";

const route = useRoute();

const identifier = computed(() => route.params.identifier);

const parts = computed<string[]>(
  () => identifier.value?.toString()?.split("-") || [],
);

const dateCondensed = computed(() => parts.value[0] || "00000000");

const date = computed(() => {
  const year = dateCondensed.value.substring(0, 4);
  const month = dateCondensed.value.substring(4, 6);
  const day = dateCondensed.value.substring(6, 8);
  return `${year}-${month}-${day}`;
});

const slug = computed(() => parts.value.slice(1).join("-") || "00000000");

const { data: blog } = await useAsyncData(
  () => route.path,
  () => {
    return queryCollection("blog")
      .path(`/blog/${slug.value}`)
      .where("date", "=", date.value)
      .first();
  },
);

if (!blog.value) {
  throw createError({ status: 404 });
}

const authors = computed(
  () => blog.value?.chef?.map<UserProps>(useChefAvatar) || [],
);
</script>
