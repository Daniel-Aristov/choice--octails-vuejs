<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout
      :imgUrl="cocktail.strDrinkThumb"
      :isBackBtnVisible="true"
    >
      <div class="flex justify-center items-center">
        <div class="py-[80px] text-center">
          <div class="text-muted !pt-[35px] text-[30px] text-center">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <ul class="list">
            <li v-for="(item, key) in ingredients" :key="key" class="list-item">
              {{ item.name }}
              <template v-if="item.measure"> | {{ item.measure }} </template>
            </li>
          </ul>
          <div class="instructions w-[520px] mx-auto font-[20px]">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import AppLayout from "@/components/AppLayout.vue";
import { computed, ref } from "vue";
import { COCKTAIL_BY_ID } from "../constants";
import axios from "axios";

const route = useRoute();

const cocktail = ref(null);
const cocktailId = computed(() => route.path.split("/").pop());
const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = {};
    ingredient.name = cocktail.value[`strIngredient${i}`];
    ingredient.measure = cocktail.value[`strMeasure${i}`];

    ingredients.push(ingredient);
  }
  return ingredients;
});

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`);
  cocktail.value = data?.data?.drinks[0];
}
getCocktail();
</script>
