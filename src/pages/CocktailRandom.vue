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
          <div class="py-[50px] ml-[20px]">
            <swiper :slides-per-view="3" :space-between="50" class="w-[586px]">
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
								<img :src="`${INGREDIENT_PIC}/${ingredient}-Small.png`" class="mx-auto">
                <p class="pt-[20px]">
									{{ ingredient }}
								</p>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions w-full md:w-[520px] mx-auto font-[20px] overflow-y-auto">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import AppLayout from "@/components/AppLayout.vue";
import axios from "axios";
import { COCKTAIL_RANDOM, INGREDIENT_PIC } from "../constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const cocktail = ref(null);
const ingredients = computed(() => {
  const ingredientsArr = [];
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;
    const ingredient = cocktail.value[`strIngredient${i}`];
    ingredientsArr.push(ingredient);
  }
  return ingredientsArr;
});

async function getCocktail() {
  const data = await axios.get(COCKTAIL_RANDOM);
  cocktail.value = data?.data?.drinks[0];
}
getCocktail();
</script>
