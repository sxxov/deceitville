<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import { fadeIn } from '@sxxov/sv/ut/transition/transitions';
	import { ic_arrow_back, ic_done } from 'maic/two_tone';
	import { completable } from '../../lib/health/completion';
	import BuildingFailure from '../lib/ending/BuildingFailure.svelte';
	import BuildingSuccess from '../lib/ending/BuildingSuccess.svelte';
	import { useBuildingInfo } from '../lib/info/useBuildingInfo';
	import { info } from './info';
	import { Pet } from './lib/Pet';
	import BuildingNav from '../lib/nav/BuildingNav.svelte';
	import PetShopScene from './lib/PetShopScene.svelte';

	useBuildingInfo(info);

	let selected: Pet | 0 = 0;
	let chosen: Pet | 0 = 0;
	let ok: boolean | undefined;

	const reset = () => {
		selected = 0;
		chosen = 0;
		ok = undefined;
	};
</script>

<BuildingNav />
<div class="pet-shop">
	{#if selected && !chosen}
		<div
			class="info"
			in:fadeIn={{ duration: 1000 }}
			out:fadeIn={{ duration: 1000 }}
		>
			<div class="content">
				{#if selected & Pet.CAT}
					<h3>???</h3>
					<p>Sneaky rascal that will keep you company.</p>
				{:else if selected & Pet.ROCK}
					<h3>????</h3>
					<p>Calm buddy that won't leave your side.</p>
				{:else if selected & Pet.DUCK}
					<h3>????</h3>
					<p>Swimmer friend that will float your boat.</p>
				{/if}

				<div class="buttons">
					<Button
						{...ButtonVariants.Secondary}
						{...ButtonVariants.Shadow.Sm}
						colourBackground="----colour-background-primary"
						colourBackgroundHover="----colour-background-secondary"
						roundness={28}
						on:click={() => {
							chosen = selected;
						}}
					>
						<Svg
							slot="left"
							width="1em"
							svg={ic_done}
						/>
						Pick
					</Button>

					<Button
						{...ButtonVariants.Transparent}
						{...ButtonVariants.Shadow.None}
						colourBackgroundHover="----colour-background-secondary"
						roundness={28}
						on:click={() => {
							selected = 0;
						}}
					>
						<Svg
							slot="left"
							width="1em"
							svg={ic_arrow_back}
						/>
						Back
					</Button>
				</div>
			</div>
		</div>
	{/if}
</div>
{#if ok !== undefined}
	{#if ok}
		<BuildingSuccess
			on:complete={() => {
				completable[info.id]?.set(true);

				if (
					document.referrer &&
					document.referrer.startsWith(window.location.origin)
				)
					history.back();
				else void goto('/');
			}}
			on:retry={() => {
				reset();
			}}
		>
			{#if chosen === Pet.CAT}
				<!---->
			{:else if chosen === Pet.ROCK}
				"..."<br />
				A beauty of nature.
			{:else if chosen === Pet.DUCK}
				<!---->
			{/if}</BuildingSuccess
		>
	{:else}
		<BuildingFailure
			on:exit={() => {
				if (
					document.referrer &&
					document.referrer.startsWith(window.location.origin)
				)
					history.back();
				else void goto('/');
			}}
			on:retry={() => {
				reset();
			}}
		>
			{#if chosen === Pet.CAT}
				"Awww... so cute! Wait where is it-"<br />
				You already lost the cat.
			{:else if chosen === Pet.ROCK}
				<!---->
			{:else if chosen === Pet.DUCK}
				A low quality rubber duck.<br />
				It sinks.
			{/if}
		</BuildingFailure>
	{/if}
{/if}
<PetShopScene
	bind:selected
	bind:chosen
	on:chosen={() => {
		ok = chosen === Pet.ROCK;
	}}
/>

<style lang="postcss">
	.pet-shop {
		position: relative;
		height: 100%;
		width: 100%;

		pointer-events: none;

		& > .info {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			height: 100lvh;

			display: flex;
			align-items: center;
			justify-content: center;

			z-index: 1;

			background: radial-gradient(
				ellipse at center,
				var(----colour-background-primary) 0%,
				var(----colour-background-transparent) 100%
			);

			& > .content {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				gap: 28px;

				text-align: center;

				& > h3 {
					margin: 0;
					font-family: var(----font-family-sans);
					-webkit-text-stroke: unset;
					text-stroke: unset;
					color: var(----colour-text-primary);
					font-size: 1.5rem;
					font-weight: 500;

					padding: 14px;
					box-sizing: border-box;

					border-radius: 28px;
					border: 1px solid var(----colour-text-secondary);

					pointer-events: auto;
				}

				& > p {
					font-size: 1.5rem;

					pointer-events: auto;
				}

				& > .buttons {
					width: 100%;

					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;

					pointer-events: auto;
				}
			}
		}
	}
</style>
