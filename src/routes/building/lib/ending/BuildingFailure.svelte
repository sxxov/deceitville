<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import {
		ic_arrow_back,
		ic_arrow_forward,
		ic_home,
		ic_restart_alt,
	} from 'maic/two_tone';
	import { createEventDispatcher } from 'svelte';
	import BuildingStatus from './BuildingStatus.svelte';

	const dispatch = createEventDispatcher();
</script>

<BuildingStatus>
	<svelte:fragment slot="status">Failure</svelte:fragment>
	<slot>Oh no. Try again?</slot>
	<svelte:fragment slot="buttons">
		<Button
			{...ButtonVariants.Primary}
			{...ButtonVariants.Shadow.Md}
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
			Retry
		</Button>
		<Button
			{...ButtonVariants.Transparent}
			{...ButtonVariants.Shadow.None}
			width="100%"
			roundness={28}
			on:click={() => {
				dispatch('exit');
			}}
		>
			<Svg
				slot="left"
				svg={ic_home}
			/>
			Return
			<Svg
				slot="right"
				svg={ic_arrow_back}
			/>
		</Button>
	</svelte:fragment>
</BuildingStatus>

<style lang="postcss">
</style>
