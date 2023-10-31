<script lang="ts">
	import { page } from '$app/stores';
	import { infos } from './lib/info/infos';
	import { useBuildingInfoRegistration } from './lib/info/useBuildingInfo';
	import BuildingNav from './lib/nav/BuildingNav.svelte';

	const info = infos[$page.route.id as keyof typeof infos];
	$: if (info) useBuildingInfoRegistration(info);
</script>

<BuildingNav>
	<slot />
</BuildingNav>
