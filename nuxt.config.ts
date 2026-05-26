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
    serverBundle: {
      collections: ["lucide"],
      mode: "server",
    },
  },
  css: ["~/assets/css/master.css"],
  site: { indexable: false },
  devtools: { enabled: true },
});
