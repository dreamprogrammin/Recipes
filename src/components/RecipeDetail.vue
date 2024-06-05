<template>
  <div class="detail">
    <div class="recipe" v-if="recipe">
      <h2>{{ recipe.title }}</h2>
      <a href="#" @click.prevent="toggle">{{
        visible ? "Скрыть" : "Показать"
      }}</a>
      <p v-if="visible">{{ recipe.description }}</p>
      <button class="btn remove" @click="$emit('remove', recipe.id)">
        Удалить
      </button>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from "@/composition/UseToggle.js";
import { defineProps } from "vue";

const { recipe } = defineProps({
  recipe: Object,
});

const { visible, toggle } = useToggle();
</script>

<style>
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.recipe p {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.recipe a,
.recipe h2 {
  margin-bottom: 0.5rem;
}
</style>
