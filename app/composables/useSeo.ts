interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useSeo = (options: SeoOptions = {}) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const defaults: Required<SeoOptions> = {
    title: "Recipes",
    description: "Recipes for you to cook!",
    image: "/nuxt-course-hero.png",
    url: (config.public.siteUrl as string) ?? "http://localhost:3000",
  };

  const seoOptions = computed(() => ({
    ...defaults,
    ...options,
  }));

  const getSeoMeta = (opts: SeoOptions) => ({
    title: opts.title || "",
    description: opts.description || "",
    ogTitle: opts.title || "",
    ogDescription: opts.description || "",
    ogImage: opts.image || "",
    ogUrl: `${opts.url}${route.path}`,
    twitterTitle: opts.title || "",
    twitterDescription: opts.description || "",
    twitterImage: opts.image || "",
    twitterCard: "summary" as "summary",
  });

  useSeoMeta(getSeoMeta(seoOptions.value));

  const updateSeo = (newOptions: SeoOptions) => {
    useSeoMeta(getSeoMeta({ ...seoOptions.value, ...newOptions }));
  };

  return { updateSeo };
};
