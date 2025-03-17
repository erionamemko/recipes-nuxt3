<script setup lang="ts">
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['page-change']);

function goToPage(page: number) {
    if (page >= 1 && page <= props.totalPages) {
        emit('page-change', page);
    }
}
</script>

<template>
    <div v-if="totalPages > 1" class="recipe-pagination">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
            :class="['recipe-pagination__btn', currentPage === 1 ? 'recipe-pagination__btn--disabled' : '']">
            <UIcon name="i-mdi-chevron-left" />
        </button>

        <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
            :class="['recipe-pagination__btn', currentPage === page ? 'recipe-pagination__btn--active' : '']">
            {{ page }}
        </button>

        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
            :class="['recipe-pagination__btn', currentPage === totalPages ? 'recipe-pagination__btn--disabled' : '']">
            <UIcon name="i-mdi-chevron-right" />
        </button>
    </div>
</template>

<style lang="scss" scoped src="./RecipePagination.scss"></style>