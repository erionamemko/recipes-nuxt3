<script setup lang="ts">
defineProps<{
    label?: string;
    to?: string;
}>();
</script>

<template>
    <NuxtLink :to="to" class="base-button">
        <slot>{{ label }}</slot>
    </NuxtLink>
</template>

<style lang="scss" scoped src="./BaseButton.scss"></style>