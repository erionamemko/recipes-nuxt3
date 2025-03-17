import { type Recipe } from "@types/recipe";

export const useRecipeFilters = () => {
  const searchQuery = ref("");
  const timeFilter = ref("");
  const caloriesFilter = ref("");
  const ratingFilter = ref("");

  const { getCached, setCached, hasCache, clearCache } = useRecipeCache();

  const applySearchFilter = (
    recipes: Recipe[],
    searchQuery: string
  ): Recipe[] => {
    const cacheKey = searchQuery.toLowerCase();

    if (hasCache(cacheKey)) {
      return getCached(cacheKey) || [];
    }

    const searchTerms = searchQuery
      .toLowerCase()
      .split(/[\s,]+/)
      .filter((term) => term.length > 0);

    const filteredRecipes = recipes.filter((recipe) => {
      const nameMatch = recipe.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const ingredientMatch = searchTerms.some((term) =>
        recipe.ingredients?.some((ingredient) =>
          ingredient.toLowerCase().includes(term)
        )
      );

      return nameMatch || ingredientMatch;
    });

    setCached(cacheKey, filteredRecipes);
    return filteredRecipes;
  };

  const applyFilters = (recipes: Recipe[]) => {
    if (!recipes) return [];

    let filteredRecipes = getCached("all") || recipes;

    if (searchQuery.value) {
      filteredRecipes = applySearchFilter(filteredRecipes, searchQuery.value);
    }

    if (timeFilter.value) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.cookTimeMinutes <= parseInt(timeFilter.value)
      );
    }

    if (caloriesFilter.value) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.caloriesPerServing <= parseInt(caloriesFilter.value)
      );
    }

    if (ratingFilter.value) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.rating >= parseFloat(ratingFilter.value)
      );
    }

    return filteredRecipes;
  };

  const resetFilters = () => {
    searchQuery.value = "";
    timeFilter.value = "";
    caloriesFilter.value = "";
    ratingFilter.value = "";
    clearCache();
  };

  return {
    searchQuery,
    timeFilter,
    caloriesFilter,
    ratingFilter,
    applyFilters,
    resetFilters,
  };
};
