<script setup lang="ts">
import { useFavorites } from '@composables/useFavorites';
import { usePagination } from '@composables/usePagination';


const { favorites } = useFavorites();

const resultsPerPage = 12;

const { currentPage, paginatedItems: paginatedFavorites, totalPages, goToPage } = usePagination(favorites, resultsPerPage);
</script>

<template>
  <main class="favorites">
    <section class="favorites__section">
      <div class="favorites__header">
        <h2 class="favorites__title">Your Favorite Recipes</h2>
        <div class="favorites__divider"></div>
      </div>

      <div v-if="favorites.length">
        <div class="favorites__grid">
          <RecipeCard v-for="recipe in paginatedFavorites" :key="recipe.id" :recipe="recipe" class="favorites__card" />
        </div>

        <RecipePagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages"
          @page-change="goToPage" class="mt-12" />
      </div>

      <div v-else class="favorites__empty">
        <UIcon name="i-mdi-heart-outline" class="favorites__empty-icon" />
        <p class="favorites__empty-text">You don't have any favorite recipes yet.</p>
        <NuxtLink to="/" class="favorites__empty-link">
          Explore recipes
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped src="./styles/favorites.scss"></style>