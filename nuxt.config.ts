// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // title: "aaaaaaa",
  // app: {
  //   head: {
  //     link: {
  //       rel: "stylesheet",
  //       href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
  //     }
  //   }
  // },

  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
})
