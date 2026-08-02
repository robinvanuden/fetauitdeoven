// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/robots",
  ],
  icon: {
    mode: "server",
    serverBundle: { collections: ["lucide"] },
  },
  css: ["~/assets/css/main.css"],
  site: { indexable: false },
  devtools: { enabled: true },
});
