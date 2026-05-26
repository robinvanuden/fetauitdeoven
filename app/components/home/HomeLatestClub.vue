<template>
  <UContainer>
    <UPageSection
      title="Onze recente avonturen"
      :links="[
        {
          label: 'Meer zien',
          to: '/club',
          color: 'neutral',
        },
      ]"
      :ui="{ title: 'md:text-left font-serif tracking-wider' }"
    >
      <template #body>
        <UBlogPosts>
          <UBlogPost
            v-for="(item, index) in items"
            :key="index"
            v-bind="item"
          />
        </UBlogPosts>
      </template>
    </UPageSection>
  </UContainer>
</template>
<script setup lang="ts">
import type { BlogPostProps, UserProps } from "@nuxt/ui";

const { data: clubs } = await useAsyncData("latest-club", () => {
  return queryCollection("club").order("date", "DESC").limit(3).all();
});

const items = computed<BlogPostProps[]>(
  () =>
    clubs.value?.map<BlogPostProps>((b) => ({
      title: b.title,
      date: b.date,
      description: b.description,
      to: `/club/${b.date.replaceAll("-", "")}-${b.path.replace("/club/", "")}`,
      authors: b.chef?.map<UserProps>(useChefAvatar),
      image: {
        ...b.image,
        width: 400,
        height: 300,
      },
      ui: { image: "object-center", imageWrapper: "aspect-4/3" },
    })) || [],
);
</script>
<style scoped></style>
