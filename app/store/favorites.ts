import { defineStore } from "pinia";
import { type Recipe } from "@types/recipe";

interface FavoritesState {
  recipes: Recipe[];
}

export const useFavoritesStore = defineStore('favorites', {
  // State
  state: (): FavoritesState => ({
    recipes: []
  }),

  // Getters
  getters: {
    getFavorites: (state): Recipe[] => state.recipes,

    getFavoriteById: (state) => {
      return (id: number): Recipe | undefined =>
        state.recipes.find(recipe => recipe.id === id);
    },

    isFavorite: (state) => {
      return (id: number): boolean =>
        state.recipes.some(recipe => recipe.id === id);
    },

    getFavoritesCount: (state): number => state.recipes.length
  },

  // Actions
  actions: {
    initializeFavorites() {
      if (process.client) {
        const stored = localStorage.getItem('favorites');
        if (stored) {
          this.recipes = JSON.parse(stored);
        }
      }
    },

    addFavorite(recipe: Recipe) {
      if (!this.isFavorite(recipe.id)) {
        this.recipes.push(recipe);
        this.saveFavorites();
      }
    },

    removeFavorite(id: number) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      this.saveFavorites();
    },

    clearFavorites() {
      this.recipes = [];
      this.saveFavorites();
    },

    saveFavorites() {
      if (process.client) {
        localStorage.setItem('favorites', JSON.stringify(this.recipes));
      }
    }
  }
});
