<template>
    <header class="base-nav">
        <nav class="base-nav__container">
            <NuxtLink to="/" class="base-nav__logo">
                <NuxtImg src="lo.png" alt="Logo" densities="x1" width="50" height="50" class="base-nav__logo-img" />
                <span class="base-nav__logo-text">Recipes</span>
            </NuxtLink>
            <ul class="base-nav__menu">
                <li>
                    <NuxtLink to="/favorites" class="base-nav__link">
                        <UIcon name="i-heroicons-heart" class="base-nav__link-icon" />
                        Favorites
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped src="./BaseNavigation.scss"></style>