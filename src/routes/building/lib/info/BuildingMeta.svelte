<script lang="ts">
	import Meta from '../../../../lib/meta/Meta.svelte';
	import type { BuildingInfo } from './BuildingInfo';

	export let info: BuildingInfo;
</script>

<!-- TODO: src -->
<Meta
	title={info.name}
	description={info.description}
	keywords={[]}
	src={''}
/>
