export default defineAppConfig({
  ui: {
    colors: {
      primary: "baltic-blue",
      secondary: "honey-bronze",
      neutral: "mist",
    },
    pageSection: {
      slots: {
        title: "font-serif",
      },
    },
    pageHero: {
      slots: {
        title: "font-serif",
      },
    },
    blogPost: {
      slots: { image: "rounded-3xl", root: "rounded-3xl" },
      defaultVariants: { variant: "subtle" },
    },
    changelogVersion: {
      slots: {
        image: "object-center rounded-3xl",
        imageWrapper: "aspect-video",
      },
    },
  },
});
