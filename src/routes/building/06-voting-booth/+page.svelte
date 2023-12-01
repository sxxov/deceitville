<script lang="ts">
	import { completable } from '../../lib/health/completion';
	import BuildingFailure from '../lib/ending/BuildingFailure.svelte';
	import BuildingSuccess from '../lib/ending/BuildingSuccess.svelte';
	import { useBuildingNav } from '../lib/nav/useBuildingNav';
	import { info } from './@info';
	import VotingBoothScene from './lib/VotingBoothScene.svelte';
	import { VotingBoothSceneState } from './lib/VotingBoothSceneState';

	const { exit } = useBuildingNav()!;

	let done = false;
	let good = false;
	let sceneState = VotingBoothSceneState.IDLE;

	const retry = () => {
		done = false;
		good = false;
		sceneState = VotingBoothSceneState.RESET;
	};
</script>

<VotingBoothScene
	bind:state={sceneState}
	on:good={() => {
		good = true;
		done = true;
	}}
	on:bad={() => {
		good = false;
		done = true;
	}}
/>

{#if done}
	{#if good}
		<BuildingSuccess
			on:complete={exit}
			on:retry={retry}
		>
			{(completable[info.id]?.set(true), '')}
			All of your chosen policies improved the town.
			<br />
			Suffering shall be no more. You are the messiah.
		</BuildingSuccess>
	{:else}
		<BuildingFailure
			on:complete={exit}
			on:retry={retry}
		>
			Not all of your chosen policies improved the town.
			<br />
			Suffering shall remain.
		</BuildingFailure>
	{/if}
{/if}
