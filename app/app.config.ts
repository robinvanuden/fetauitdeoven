export default defineAppConfig({
  ui: {
    colors: {
      primary: "baltic-blue",
      secondary: "honey-bronze",
      neutral: "mist",
    },
    pageSection: {
      slots: {
        title: "font-serif"
      }
    },
    pageHero: {
      slots: {
        title: "font-serif"
      }
    },
    blogPost: {
      defaultVariants: {variant: "subtle"},
    },
  },
})
