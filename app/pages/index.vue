<script setup lang="ts">
import { usePagination } from "@composables/usePagination";
import { useRecipeFilters } from "@composables/useRecipeFilters";
import { useSeo } from '@composables/useSeo';
import { useRecipeService } from "@services/recipeService";

useSeo();

const recipeService = useRecipeService();
const { data, error } = await recipeService.getAllRecipes();

const {
  searchQuery,
  timeFilter,
  caloriesFilter,
  ratingFilter,
  applyFilters: applyRecipeFilters,
  resetFilters
} = useRecipeFilters();

const filteredRecipes = computed(() => {
  if (!data?.value?.recipes) return [];
  return applyRecipeFilters(data.value.recipes);
});

const { currentPage, paginatedItems: paginatedRecipes, totalPages, goToPage, resetPage } = usePagination(filteredRecipes);

const applyFilters = () => {
  resetPage();
}
</script>

<template>
  <main>
    <section class="hero-section">
      <div class="overlay"></div>
      <div class="content">
        <div class="hero-text">
          <h1>Cook Like a Pro: Discover Your Inner Chef!</h1>
          <div class="search-bar">
            <input v-model="searchQuery" type="text" placeholder="Search by ingredients or keywords..." />
            <UIcon name="i-heroicons-magnifying-glass" class="search-icon" />
          </div>
        </div>
      </div>
    </section>

    <section class="filters-section">
      <div class="container">
        <RecipeFilters v-model:timeFilter="timeFilter" v-model:caloriesFilter="caloriesFilter"
          v-model:ratingFilter="ratingFilter" @apply="applyFilters" @reset="resetFilters" />
      </div>
    </section>

    <section id="recipes" class="recipes-section">
      <div v-if="!error && filteredRecipes.length > 0" class="recipes-grid">
        <RecipeCard v-for="recipe in paginatedRecipes" :key="recipe.id" :recipe="recipe" />
      </div>

      <div v-else-if="!error && filteredRecipes.length === 0" class="empty-state">
        <UIcon name="i-mdi-food-off" class="empty-icon" />
        <p class="empty-title">Oops! The kitchen is empty!</p>
        <p class="empty-description">Looks like we've run out of ingredients for your search.</p>
        <button @click="resetFilters" class="reset-button">
          <UIcon name="i-mdi-refresh" />
          Restock the kitchen
        </button>
      </div>

      <p v-else class="error-message">Oops, something went wrong. Please try again later</p>
      <RecipePagination :current-page="currentPage" :total-pages="totalPages" @page-change="goToPage" />
    </section>
  </main>
</template>

<style lang="scss" scoped src="./styles/home.scss"></style>
