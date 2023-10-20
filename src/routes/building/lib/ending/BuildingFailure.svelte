<script lang="ts">
	import BuildingStatus from './BuildingStatus.svelte';
</script>

<BuildingStatus>
	<svelte:fragment slot="status">Failure</svelte:fragment>
	<slot>Oh no. Try again?</slot>
</BuildingStatus>

<style lang="postcss">
</style>
