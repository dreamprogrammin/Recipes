<template>
  <form class="form" @submit.prevent>
    <h1>Добавить рецепт</h1>
    <div v-if="visible">
      <div class="input">
        <input
          type="text"
          placeholder="Название рецепта"
          v-model="form.title"
        />
      </div>
      <div class="input">
        <input
          type="text"
          placeholder="Описание рецепта"
          v-model="form.description"
        />
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid" @click="submit">
        Создать
      </button>
      <button class="btn secondary" @click="toggle" type="button">
        {{ visible ? "Убрать" : "Показать" }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { defineProps } from "vue";
import { useToggle } from "@/composition/UseToggle.js";
import { useForm } from "@/composition/UseForm.js";

const props = defineProps({
  addRecipe: Function,
});

const { submit, valid, form } = useForm(props);

const { visible, toggle } = useToggle();
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 1rem;
}

.form h1 {
  margin: 0;
  margin-bottom: 1rem;
}

.input {
  margin-bottom: 1rem;
}

.input input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  width: 400px;
}

.buttons {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
