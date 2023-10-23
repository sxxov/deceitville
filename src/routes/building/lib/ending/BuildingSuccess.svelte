<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import {
		ic_arrow_back,
		ic_arrow_forward,
		ic_assignment_turned_in,
		ic_restart_alt,
	} from 'maic/two_tone';
	import { createEventDispatcher } from 'svelte';
	import BuildingStatus from './BuildingStatus.svelte';

	const dispatch = createEventDispatcher();
</script>

<BuildingStatus>
	<svelte:fragment slot="status">Success</svelte:fragment>
	<slot>Yay!</slot>
	<svelte:fragment slot="buttons">
		<Button
			{...ButtonVariants.Primary}
			{...ButtonVariants.Shadow.Md}
			width="100%"
			roundness={28}
			on:click={() => {
				dispatch('complete');
			}}
		>
			<Svg
				slot="left"
				svg={ic_assignment_turned_in}
			/>
			Finish
			<Svg
				slot="right"
				svg={ic_arrow_back}
			/>
		</Button>
		<Button
			{...ButtonVariants.Transparent}
			{...ButtonVariants.Shadow.None}
			width="100%"
			roundness={28}
			on:click={() => {
				dispatch('retry');
			}}
		>
			<Svg
				slot="left"
				svg={ic_restart_alt}
			/>
			Replay
		</Button>
	</svelte:fragment>
</BuildingStatus>

<style lang="postcss">
</style>
