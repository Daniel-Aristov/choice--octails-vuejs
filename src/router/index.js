import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'
import { ROUTES_PATHS } from '@/constants'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: ROUTES_PATHS.HOME,
			name: ROUTES_PATHS.HOME,
			component: Home
		},
		{
			path: ROUTES_PATHS.COCTAIL,
			name: ROUTES_PATHS.COCTAIL,
			component: Cocktail
		},
		{
			path: ROUTES_PATHS.COCTAIL_RANDOM,
			name: ROUTES_PATHS.COCTAIL_RANDOM,
			component: CocktailRandom
		}
	]
})

export default router
