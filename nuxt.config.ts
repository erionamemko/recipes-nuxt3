// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },

  colorMode: {
    preference: "light",
  },

  build: {
    terser: {
      compress: {
        drop_console: true,
      },
    },
    splitChunks: {
      chunks: "all",
    },
  },

  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/ui"],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3001",
    },
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  alias: {
    "@composables": "~/composables",
    "@services": "~/services",
    "@types": "../types",
    "@utils": "~/utils",
    "@assets": "~/assets",
  },

  compatibilityDate: "2025-03-17",
});