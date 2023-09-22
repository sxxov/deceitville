<script
	lang="ts"
	context="module"
>
	import type { BuildingInfo } from '../lib/BuildingInfo';
	import * as gltfs from '../../../assets/village/parts/gltfs.db';
	import { ic_bedroom_baby } from 'maic/two_tone';

	export const info: BuildingInfo = {
		name: 'Carridge Showroom',
		description:
			"Residents' one-stop-shop for all things carridge. You will need to avoid the advances of the salesman, & leave through the back door.",
		icon: ic_bedroom_baby,
		facade: gltfs.building_2,
	};
</script>

<script lang="ts">
</script>

<div class=""></div>

<style lang="postcss">
</style>
