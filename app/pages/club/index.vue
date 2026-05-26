<template>
  <UContainer>
    <UPageHeader headline="Genieten" title="Al onze avonturen" />
    <UChangelogVersions :versions="items" />
  </UContainer>
</template>
<script setup lang="ts">
import type { ChangelogVersionProps, UserProps } from "@nuxt/ui";

const { data: clubs } = await useAsyncData("all-club", () => {
  return queryCollection("club").order("date", "DESC").all();
});

const items = computed<ChangelogVersionProps[]>(
  () =>
    clubs.value?.map<ChangelogVersionProps>((b) => ({
      title: b.title,
      date: b.date,
      description: b.description,
      to: `/club/${b.date.replaceAll("-", "")}-${b.path.replace("/club/", "")}`,
      authors: b.chef?.map<UserProps>(useChefAvatar),
      image: {
        ...b.image,
      },
      ui: { image: "object-center", imageWrapper: "aspect-4/3" },
    })) || [],
);
</script>
<style scoped></style>
