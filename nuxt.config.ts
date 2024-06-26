// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  runtimeConfig: {
    app: {
      baseURL: (process.env.NODE_ENV === "production") ? "/CreativeLanguageArchive-Nuxt3" : "/",
    },
  },

  app: {
    baseURL: (process.env.NODE_ENV === "production") ? "/CreativeLanguageArchive-Nuxt3" : "/",
  },
});
