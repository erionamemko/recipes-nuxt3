import { type Recipe } from "@types/recipe";
import { useFavoritesStore } from "../store/favorites";

export const useFavorites = () => {
  const favoritesStore = useFavoritesStore();
  const toast = useToast();

  onMounted(() => {
    favoritesStore.initializeFavorites();
  });

  const addFavorite = (recipe: Recipe) => {
    if (!favoritesStore.isFavorite(recipe.id)) {
      favoritesStore.addFavorite(recipe);
      toast.add({
        title: "Recipe added to favorites",
        color: "green",
      });
    }
  };

  const removeFavorite = (id: number) => {
    favoritesStore.removeFavorite(id);
    toast.add({
      title: "Recipe removed from favorites",
      color: "red",
    });
  };

  const toggleFavorite = (recipe: Recipe) => {
    if (favoritesStore.isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return {
    favorites: computed(() => favoritesStore.getFavorites),
    favoritesCount: computed(() => favoritesStore.getFavoritesCount),
    isFavorite: favoritesStore.isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };
};
