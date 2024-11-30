<template>
  <div class="root">
    <div class="img background-image"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackBtnVisible"
          type="primary"
          :icon="Back"
          class="back-btn"
          @click="goBack"
          circle
        />
        <el-button class="random-btn" @click="goForCocktailRandom"
          >Get random cocktail</el-button
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

.root {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: $background;
}

.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.background-image {
  background-image: url('/src/assets/img/bg-1.jpg');
}

.main {
  position: relative;
  width: 50%;
  padding: 32px 40px;
}

.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.random-btn {
  position: absolute;
  top: 32px;
  right: 40px;
  font-size: 1rem;
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

.back-btn {
  background-color: transparent;
  border-color: white;

  &:hover {
    background-color: transparent;
    border-color: $accent;
  }
}
</style>
