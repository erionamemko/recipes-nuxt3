# Recipe Finder - Nuxt 3 App

Welcome to **Recipe Finder**, a web application built with **Nuxt 3** that allows users to search for recipes based on title and the list of ingredients. This README will guide you through the setup, development, and deployment processes.

![Recipe Finder Screenshot](public/home.png)

## Table of Contents

- [Overview](#overview)
- [Tools & Libraries Used](#tools--libraries-used)
- [Setup](#setup)
- [Development Server](#development-server)
- [Production](#production)
- [Linting and Formatting](#linting-and-formatting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

**Recipe Finder** is designed to help users discover. The application uses an intuitive interface and a fast search engine to provide relevant results quickly. Built with **Nuxt 3**, it leverages Vue.js, server-side rendering (SSR). The application is responsive and works on all devices.

### 🔹 **Core Dependencies**

- [**Nuxt 3**](https://nuxt.com/) - The heart of the project, a powerful Vue-based framework.
- [**Pinia**](https://pinia.vuejs.org/) - State management library for Vue.js.
- [**@nuxt/image**](https://image.nuxt.com/) - Optimized image handling for better performance.
- [**@nuxt/ui**](https://ui.nuxt.com/) - A set of UI components for faster development.
- [**@nuxt/icon**](https://icon.nuxt.com/) - Easily manage icons in your Nuxt app.
- [**@nuxtjs/google-fonts**](https://google-fonts.nuxtjs.org/) - Simplifies the integration of Google Fonts.
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.

### 🔹 **Development & Linting**

- [**ESLint**](https://eslint.org/) - Linting tool to enforce code quality.
- [**@nuxt/eslint-config**](https://github.com/nuxt/eslint-config) - Nuxt-specific ESLint rules.
- [**Sass Embedded**](https://sass-lang.com/) - Used for styling with SCSS.
- [**@iconify-json/mdi**](https://iconify.design/) - Material Design Icons for UI enhancements.

## Setup

Before starting, ensure you have Node.js installed on your system. The required Node.js version is specified in the .npmrc file. Then, install dependencies:

```bash
# Using yarn
yarn install

# Using npm
npm install

# Using pnpm
pnpm install

# Using bun
bun install
```

## Development Server

To start the development server, run:

```bash
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm run dev

# bun
bun run dev
```

The application will be available at `http://localhost:3000`.

## Production

To build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

To preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Linting and Formatting

Ensure your code follows the project's standards:

```bash
# Lint the code
npm run lint

# Format the code
npm run format
```

## Deployment

For detailed instructions on deploying your Nuxt 3 application, refer to the official [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Next Steps

To improve **Recipe Finder**, the following enhancements are planned:

- 🚀 **Performance Optimization**:

  - Reduce bundle size and improve loading speed.
  - Optimize API responses.

- ✅ **Testing Enhancements**:

  - Add **end-to-end (E2E) tests** to verify user interactions.
  - Implement **unit tests** for the API to ensure data accuracy.

- 🎯 **Accessibility Improvements**:

  - Improve contrast ratios and keyboard navigation.
  - Ensure proper ARIA attributes for better screen reader support.

- 🖼 **Better Image Optimization**:

  - Further compress images to reduce load times.

- 🗂 **Enhanced Caching Strategy**:
  - Improve caching policies to reduce unnecessary API calls.
  - Leverage service workers for offline capabilities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
