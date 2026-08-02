<template>
  <UContainer>
    <UPageSection headline="Genieten" title="Al onze avonturen">
      <UChangelogVersions :versions="items" />
    </UPageSection>
  </UContainer>
</template>
<script setup lang="ts">
import type { ChangelogVersionProps, UserProps } from "@nuxt/ui";

const { data: clubs } = await useAsyncData("all-blog", () => {
  return queryCollection("blog").order("date", "DESC").all();
});

const items = computed<ChangelogVersionProps[]>(
  () =>
    clubs.value?.map<ChangelogVersionProps>((b) => ({
      title: b.title,
      date: b.date,
      description: b.description,
      to: `/blog/${b.date.replaceAll("-", "")}-${b.path.replace("/blog/", "")}`,
      authors: b.chef?.map<UserProps>(useChefAvatar),
      image: b.image,
    })) || [],
);
</script>
