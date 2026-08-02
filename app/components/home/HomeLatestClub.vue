<template>
    <UPageSection
      title="Onze recente avonturen"
      :links="[
        {
          label: 'Meer zien',
          to: '/blog',
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
</template>
<script setup lang="ts">
import type { BlogPostProps, UserProps } from "@nuxt/ui";

const { data: clubs } = await useAsyncData("latest-blog", () => {
  return queryCollection("blog").order("date", "DESC").limit(3).all();
});

const items = computed<BlogPostProps[]>(
  () =>
    clubs.value?.map<BlogPostProps>((b) => ({
      title: b.title,
      date: b.date,
      description: b.description,
      to: `/blog/${b.date.replaceAll("-", "")}-${b.path.replace("/blog/", "")}`,
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
