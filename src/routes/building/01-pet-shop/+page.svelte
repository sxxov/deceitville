<script
	lang="ts"
	context="module"
>
	import type { BuildingInfo } from '../lib/BuildingInfo';
	import * as gltfs from '../../../assets/village/parts/gltfs.db';
	import { ic_pets } from 'maic/two_tone';

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

<div class=""></div>

<style lang="postcss">
</style>
