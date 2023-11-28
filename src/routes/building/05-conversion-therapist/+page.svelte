<script lang="ts">
	import { completable } from '../../lib/health/completion';
	import BuildingFailure from '../lib/ending/BuildingFailure.svelte';
	import BuildingSuccess from '../lib/ending/BuildingSuccess.svelte';
	import { useBuildingNav } from '../lib/nav/useBuildingNav';
	import { info } from './@info';
	import ConversionTherapistScene from './lib/ConversionTherapistScene.svelte';
	import { ConversionTherapistSceneState } from './lib/ConversionTherapistSceneState';

	const { exit } = useBuildingNav()!;

	let sceneState = ConversionTherapistSceneState.IDLE;
	const retry = () => {
		broken = false;
		offed = false;
		sceneState = ConversionTherapistSceneState.RESET;
	};

	let broken = false;
	let offed = false;
</script>

<ConversionTherapistScene
	bind:state={sceneState}
	on:break={() => {
		broken = true;
	}}
	on:off={() => {
		offed = true;
	}}
/>

{#if broken}
	<BuildingFailure
		on:complete={exit}
		on:retry={retry}
	>
		You broke the TV.
	</BuildingFailure>
{:else if offed}
	<BuildingSuccess
		on:complete={exit}
		on:retry={retry}
	>
		{(completable[info.id]?.set(true), '')}
		You turned off the TV!
		<br />
		The folks are free, they frollick in joy.
	</BuildingSuccess>
{/if}
