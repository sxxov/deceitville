<script
	lang="ts"
	context="module"
>
	import { ic_bedroom_baby } from 'maic/two_tone';
	import * as gltfs from '../../../assets/village/parts/gltfs.db';
	import { useBuildingInfo } from '../lib/info/useBuildingInfo';
	import type { BuildingInfo } from '../lib/info/BuildingInfo';

	export const info = {
		name: 'Carridge Showroom',
		description:
			"Residents' one-stop-shop for all things carridge. You will need to avoid the advances of the salesman, & leave through the back door.",
		lessons: [
			'Learn how websites can shame you into making a decision.',
			'Know the influence that confirm-shaming might have on you, unknowingly.',
		],
		brignull: {
			kind: 'Confirmshaming',
			url: 'https://www.deceptive.design/types/confirmshaming',
		},
		icon: ic_bedroom_baby,
		facade: gltfs.building_2,
	} as const satisfies BuildingInfo;
</script>

<script lang="ts">
	useBuildingInfo(info);
</script>

<div class=""></div>

<style lang="postcss">
</style>
