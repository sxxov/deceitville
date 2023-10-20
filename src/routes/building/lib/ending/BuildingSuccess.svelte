<script lang="ts">
	import BuildingStatus from './BuildingStatus.svelte';
</script>

<BuildingStatus>
	<svelte:fragment slot="status">Success</svelte:fragment>
	<slot>Yay!</slot>
</BuildingStatus>

<style lang="postcss">
</style>
