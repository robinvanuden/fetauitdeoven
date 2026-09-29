export default defineAppConfig({
  ui: {
    colors: {
      primary: "baltic-blue",
      secondary: "honey-bronze",
      neutral: "mist",
    },
    blogPost: { defaultVariants: { variant: "soft" } },
    card: { defaultVariants: { variant: "soft" } },
    pageCard: { defaultVariants: { variant: "soft" } },
    changelogVersion: {
      defaultVariants: { variant: "soft" },
      slots: {
        image: "object-center",
        imageWrapper: "aspect-video",
      },
    },
  },
});
