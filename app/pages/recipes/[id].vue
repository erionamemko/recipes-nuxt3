<script setup lang="ts">
import { type Recipe } from "@types/recipe";
import { useRecipeService } from "@services/recipeService";
import { useFavorites } from "@composables/useFavorites";
import { useRoute } from "vue-router";
const { id } = useRoute().params;

const recipeId = Number(id);
const recipeService = useRecipeService();

const { data, error } = await recipeService.getRecipeById(recipeId);

const { toggleFavorite, isFavorite } = useFavorites();

const isAddedToFavorite = computed(() => data.value ? isFavorite(data.value.id) : false);

function handleFavoriteClick() {
  if (!data.value) return;
  toggleFavorite(data.value);
}

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  });
}
</script>

<template>
  <main class="recipe-details">
    <section class="recipe-details__header">
      <h2 class="recipe-details__title">{{ data?.name }}</h2>
      <div class="recipe-details__meta">
        <div class="recipe-details__stat">
          <UIcon name="i-mdi-clock-time-eight-outline" class="recipe-details__stat-icon" />
          <span>{{ data?.cookTimeMinutes }} min</span>
        </div>
        <div class="recipe-details__stat">
          <UIcon name="i-mdi-fire" class="recipe-details__stat-icon" />
          <span>{{ data?.caloriesPerServing }} cal</span>
        </div>
        <div class="recipe-details__stat">
          <UIcon name="i-mdi-star" class="recipe-details__stat-icon" />
          <span>{{ data?.rating }} ({{ data?.reviewCount }})</span>
        </div>
        <div class="recipe-details__favorite">
          <button @click.stop.prevent="handleFavoriteClick" class="recipe-details__favorite-btn">
            <ClientOnly>
              <UIcon :name="isAddedToFavorite ? 'i-mdi-heart' : 'i-mdi-heart-outline'" class="recipe-details__favorite-icon" />
            </ClientOnly>
          </button>
        </div>
      </div>
      <hr class="recipe-details__divider" />
    </section>

    <section class="recipe-details__image-container group">
      <NuxtImg :src="data?.image" densities="x1" sizes="xs:100vw sm:100vw md:90vw lg:80vw" class="recipe-details__image"
        :alt="data?.name || 'Immagine della ricetta'" />
      <div class="recipe-details__image-overlay"></div>
      <div class="recipe-details__image-hover"></div>
    </section>

    <section class="recipe-details__ingredients">
      <h2 class="recipe-details__section-title">
        <UIcon name="i-mdi-food-variant" class="recipe-details__section-icon" />
        Ingredienti
      </h2>
      <ul class="recipe-details__ingredients-list">
        <li v-for="ingredient in data?.ingredients" class="recipe-details__ingredient">
          <label class="recipe-details__ingredient-label">
            <input class="recipe-details__ingredient-checkbox peer" type="checkbox" />
            <div class="recipe-details__ingredient-check"></div>
            <span class="recipe-details__ingredient-text">
              {{ ingredient }}
            </span>
          </label>
        </li>
      </ul>
    </section>

    <section class="recipe-details__instructions">
      <h2 class="recipe-details__section-title">
        <UIcon name="i-mdi-chef-hat" class="recipe-details__section-icon" />
        Istruzioni
      </h2>
      <ul class="recipe-details__instructions-list">
        <li v-for="(instruction, index) in data?.instructions" class="recipe-details__instruction">
          <span class="recipe-details__instruction-number">
            {{ index + 1 }}
          </span>
          <span class="recipe-details__instruction-text">{{ instruction }}</span>
        </li>
      </ul>
    </section>

    <section class="recipe-details__back">
      <BaseButton to="/" class="recipe-details__back-btn">
        <UIcon name="i-mdi-arrow-left" class="recipe-details__back-icon" />
        Back to recipes
      </BaseButton>
    </section>
  </main>
</template>

<style lang="scss" scoped src="./styles/recipe-details.scss"></style>
