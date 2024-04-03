// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  runtimeConfig: {
    app: {
      baseURL: "/CreativeLanguageArchive-Nuxt3",
    },
  },

  app: {
    baseURL: "/CreativeLanguageArchive-Nuxt3",
  },

  target: "static",
});
