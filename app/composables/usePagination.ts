export function usePagination<T>(items: Ref<T[]>, resultsPerPage: number = 12) {
  const currentPage = ref(1);

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    return items.value.slice(start, end);
  });

  const totalPages = computed(() => {
    return Math.ceil(items.value.length / resultsPerPage);
  });

  const goToPage = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const resetPage = () => {
    currentPage.value = 1;
  };

  return {
    currentPage,
    paginatedItems,
    totalPages,
    goToPage,
    resetPage,
  };
}
