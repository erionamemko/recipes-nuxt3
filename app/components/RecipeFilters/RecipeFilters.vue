<script setup lang="ts">
const emit = defineEmits(['update:timeFilter', 'update:caloriesFilter', 'update:ratingFilter', 'apply', 'reset']);

const props = defineProps({
    timeFilter: String,
    caloriesFilter: String,
    ratingFilter: String
});

function applyFilters() {
    emit('apply');
}

function resetFilters() {
    emit('reset');
}
</script>

<template>
    <div class="recipe-filters">
        <div class="recipe-filters__select-container">
            <span class="recipe-filters__label">Time:</span>
            <select :value="timeFilter" @input="$emit('update:timeFilter', ($event.target as HTMLSelectElement).value)"
                class="recipe-filters__select">
                <option value="">All</option>
                <option value="15">Less than 15 min</option>
                <option value="30">Less than 30 min</option>
                <option value="60">Less than 60 min</option>
            </select>
        </div>

        <div class="recipe-filters__select-container">
            <span class="recipe-filters__label">Calories:</span>
            <select :value="caloriesFilter"
                @input="$emit('update:caloriesFilter', ($event.target as HTMLSelectElement).value)"
                class="recipe-filters__select">
                <option value="">All</option>
                <option value="300">Less than 300</option>
                <option value="500">Less than 500</option>
                <option value="800">Less than 800</option>
            </select>
        </div>

        <div class="recipe-filters__select-container">
            <span class="recipe-filters__label">Rating:</span>
            <select :value="ratingFilter"
                @input="$emit('update:ratingFilter', ($event.target as HTMLSelectElement).value)"
                class="recipe-filters__select">
                <option value="">All</option>
                <option value="4">4+ stars</option>
                <option value="4.5">4.5+ stars</option>
                <option value="5">5 stars</option>
            </select>
        </div>

        <div class="recipe-filters__buttons">
            <button @click="applyFilters" class="recipe-filters__apply-btn">
                <UIcon name="i-mdi-filter" />
                Apply filters
            </button>

            <button @click="resetFilters" class="recipe-filters__reset-btn">
                <UIcon name="i-mdi-refresh" />
                Reset
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./RecipeFilters.scss"></style>