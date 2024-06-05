import { ref } from "vue";

export function useRecipe() {
  const recipes = ref([]);
  const current = ref(null);

  const addRecipes = (recipe) => {
    recipes.value.push(recipe);
  };

  const selectRecipe = (id) => {
    current.value = recipes.value.find((r) => r.id === id);
  };

  const removeRecipe = (id) => {
    current.value = null;
    recipes.value = recipes.value.filter((p) => p.id !== id);
  };

  return { recipes, current, addRecipes, selectRecipe, removeRecipe };
}
