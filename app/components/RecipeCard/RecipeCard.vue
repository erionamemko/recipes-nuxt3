<script setup lang="ts">
import { type Recipe } from "@types/recipe";
import { useFavorites } from "@composables/useFavorites";

const props = defineProps<{
    recipe: Recipe;
}>();

const { toggleFavorite, isFavorite } = useFavorites();

const favorite = computed(() => isFavorite(props.recipe.id));

const heartIconName = computed(() => favorite.value ? 'i-mdi-heart' : 'i-mdi-heart-outline');
</script>

<template>
    <NuxtLink :to="`/recipes/${recipe.id}`" class="recipe-card">
        <div class="recipe-card__image-container">
            <div class="recipe-card__image-wrapper group">
                <NuxtImg :src="recipe.image" densities="x1" sizes="xs:100vw sm:100vw md:100vw lg:100vw"
                    :alt="recipe.name" class="recipe-card__image" placeholder loading="eager" format="webp" />
                <div class="recipe-card__image-overlay">
                    <span class="recipe-card__view-text">View recipe details</span>
                </div>
            </div>
        </div>

        <button @click.stop.prevent="toggleFavorite(recipe)" class="recipe-card__favorite-btn">
            <ClientOnly>
                <UIcon :name="heartIconName" class="recipe-card__favorite-icon" />
            </ClientOnly>
        </button>

        <div class="recipe-card__content">
            <p class="recipe-card__title">{{ recipe.name }}</p>
            <div class="recipe-card__stats">
                <div class="recipe-card__stat">
                    <UIcon name="i-mdi-timer-outline" class="recipe-card__stat-icon" />
                    <span>{{ recipe.cookTimeMinutes }}</span>
                </div>
                <div class="recipe-card__stat">
                    <UIcon name="i-mdi-fire" class="recipe-card__stat-icon" />
                    <span>{{ recipe.caloriesPerServing }}</span>
                </div>
                <div class="recipe-card__stat">
                    <UIcon name="i-mdi-star" class="recipe-card__stat-icon" />
                    <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped src="./RecipeCard.scss"></style>