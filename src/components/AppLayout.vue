<template>
  <div class="flex h-[100vh] overflow-hidden bg-[#141414]">
    <div class="background-image w-[50%] no-repeat cover bg-center hidden lg:block"></div>
    <div class="relative w-full lg:w-[50%] py-[30px] px-[20px] md:px-[40px]">
      <div class="flex justify-between items-center">
        <el-button
          v-if="isBackBtnVisible"
          type="primary"
          :icon="Back"
          class="!border-none !bg-[#9400de]"
          @click="goBack"
          circle
        />
        <el-button class="random-btn" @click="goForCocktailRandom"
          >Получить рандомный коктель</el-button
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { Back } from "@element-plus/icons-vue";
import { computed } from "vue";
import { ROUTES_PATHS } from "@/constants";

const props = defineProps({
  backFunc: {
    type: Function,
  },
  isBackBtnVisible: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);

function goForCocktailRandom() {
  router.push(ROUTES_PATHS.COCTAIL_RANDOM);

  if (routeName.value === ROUTES_PATHS.COCTAIL_RANDOM) {
    router.go();
  }
}

function goBack() {
  props.backFunc ? props.backFunc() : router.go(-1)
}
</script>

<style lang="scss">
@import "../assets/styles/main";

.random-btn {
  position: absolute;
  top: 32px;
  right: 40px;
  font-size: 1.1rem;
  font-family: "Raleway", "Arial", sans-serif;
  background-color: $accent;
  border-color: $accent;
  color: $text;

  &:hover,
  &:active {
    background-color: darken($color: $accent, $amount: 10%);
    border-color: darken($color: $accent, $amount: 10%);
    color: $text;
  }
}
</style>
