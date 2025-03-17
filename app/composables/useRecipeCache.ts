import { type Recipe } from '@types/recipe';

export const useRecipeCache = () => {
    // Cache per memorizzare i risultati filtrati
    const cache = new Map<string, Recipe[]>();

    const getCached = (key: string): Recipe[] | undefined => {
        return cache.get(key);
    };

    const setCached = (key: string, recipes: Recipe[]): void => {
        cache.set(key, recipes);
    };

    const hasCache = (key: string): boolean => {
        return cache.has(key);
    };

    const clearCache = (): void => {
        cache.clear();
    };

    return {
        getCached,
        setCached,
        hasCache,
        clearCache
    };
}; 