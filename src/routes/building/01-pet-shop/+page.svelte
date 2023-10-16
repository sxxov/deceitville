<script
	lang="ts"
	context="module"
>
	import { ic_pets } from 'maic/two_tone';
	import * as gltfs from '../../../assets/village/parts/gltfs.db';
	import type { BuildingInfo } from '../lib/info/BuildingInfo';
	import PetShopScene from './lib/PetShopScene.svelte';

	export const info: BuildingInfo = {
		name: 'Pet Shop',
		description:
			"The local pet shop, where all kids' dream come true. You will need to pick between 3 unknown animals, based on their vague & incomplete descriptions.",
		icon: ic_pets,
		facade: gltfs.building_1,
	};
</script>

<script lang="ts">
</script>

<div class="pet-shop"></div>
<PetShopScene />

<style lang="postcss">
</style>
