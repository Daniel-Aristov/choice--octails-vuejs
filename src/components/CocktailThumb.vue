<template>
	<router-link :to="`/cocktails/${cocktail.idDrink}`">
		<div class="cocktail-wrapper">
			<div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic"></div>
			<div class="name">{{ cocktail.strDrink }}</div>
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

<style lang="scss" scoped>
	@import '../assets/styles/main';

	.cocktail-wrapper {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		flex-basis: 33.3%;
		align-items: center;
	}

	.pic {
		width: 120px;
		height: 120px;
		margin: 0 auto;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: 100%;
	}

	.name {
		padding-top: 15px;
		letter-spacing: 0.1em;
		max-width: 130px;
	}
</style>
