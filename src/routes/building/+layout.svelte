<script lang="ts">
	import { page } from '$app/stores';
	import Meta from '../../lib/meta/Meta.svelte';
	import { infos } from './lib/info/infos';
	import { useBuildingInfoRegistration } from './lib/info/useBuildingInfo';
	import BuildingNav from './lib/nav/BuildingNav.svelte';

	const info = infos[$page.route.id as keyof typeof infos]!;
	useBuildingInfoRegistration(info);
</script>

<Meta
	title={info.name}
	description={info.description}
	keywords={[
		...info.brignulls.map((v) => v.kind),
		'deceptive design',
		'dark patterns',
	]}
	src=""
/>
<BuildingNav>
	<slot />
</BuildingNav>
