import { type Recipe, type RecipeResponse } from "@types/recipe";

export const useRecipeService = () => {
  const config = useRuntimeConfig();
  const baseUrl = "https://dummyjson.com";

  const getAllRecipes = async () => {
    return await useFetch<RecipeResponse>(`${baseUrl}/recipes`, {
      params: {
        limit: 100,
      },
    });
  };

  const getRecipeById = async (id: number) => {
    return await useFetch<Recipe>(`${baseUrl}/recipes/${id}`);
  };

  const searchRecipes = async (query: string) => {
    return await useFetch<RecipeResponse>(`${baseUrl}/recipes/search`, {
      params: {
        q: query,
      },
    });
  };

  return {
    getAllRecipes,
    getRecipeById,
    searchRecipes,
  };
};
