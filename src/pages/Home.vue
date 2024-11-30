<template>
  <AppLayout
    :backFunc="removeIngredient"
    :isBackBtnVisible="!!ingredient"
  >
    <div class="flex justify-center items-center">
      <div v-if="!ingredient || !cocktails" class="py-[80px] text-center">
        <div class="text-muted !pt-[35px] text-[30px] text-center">Выбери свой напиток</div>
        <div class="line"></div>
        <div class="!pt-[40px]">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Выбери основной ингредиент"
            size="large"
            filterable
            allow-create
            class="max-w-[260px] !pointer"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :value="item.strIngredient1"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
            />
          </el-select>
        </div>
        <p class="text-muted !pt-[30px] text-[19px] text-center">
          Попробуй наши вкусные рецепты коктейлей на любой случай жизни. Находите
          рецепты коктейлей по ингредиентам с помощью нашего генератора коктейлей!
        </p>
        <img src="/src/assets/img/cocktails.png" alt="коктели" class="mx-auto mt-[70px]" />
      </div>
      <div v-else class="py-[80px] text-center">
        <div class="text-muted !pt-[35px] text-[30px] text-center">Коктель с {{ ingredient }}</div>
        <div class="line"></div>
        <div class="flex justify-start flex-wrap max-h-[400px] overflow-y-auto mt-[50px]">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
            class="basis-1/3"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import CocktailThumb from "@/components/CocktailThumb.vue";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore);

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
  rootStore.setIngredient(null);
}
</script>
