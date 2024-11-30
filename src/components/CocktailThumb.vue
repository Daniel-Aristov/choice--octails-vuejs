<template>
	<router-link :to="`/cocktails/${cocktail.idDrink}`">
		<div class="flex justify-start items-center flex-col">
			<div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="w-[120px] h-[120px] mx-auto bg-center bg-no-repeat bg-cover"></div>
			<div class="pt-[10px] max-w-[130px]">{{ cocktail.strDrink }}</div>
		</div>
	</router-link>
</template>

<script setup>
	const props = defineProps({
		cocktail: {
			type: Object,
			required: true,
		}
	})
</script>
