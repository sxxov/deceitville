<script
	lang="ts"
	context="module"
>
	import * as gltfs from '../../../assets/village/parts/gltfs.db';

	import PetShopScene from './lib/PetShopScene.svelte';
	import BuildingNav from '../lib/nav/BuildingNav.svelte';
	import type { BuildingInfo } from '../lib/info/BuildingInfo';

	export const info = {
		name: 'Pet Shop',
		description:
			"The local pet shop, where all kids' dream come true. You will need to pick between 3 unknown animals, based on their vague & incomplete descriptions.",
		lessons: [
			'Learn how websites can obstruct your comparison process.',
			'Know the difficulty of making a decision based on incomplete information.',
		],
		brignull: {
			kind: 'Comparison Prevention',
			url: 'https://www.deceptive.design/types/comparison-prevention',
		},
		icon: ic_pets,
		facade: gltfs.building_1,
	} as const satisfies BuildingInfo;
</script>

<script lang="ts">
	import { useBuildingInfo } from '../lib/info/useBuildingInfo';
	import { Pet } from './lib/Pet';
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import { ic_done, ic_arrow_back, ic_pets } from 'maic/two_tone';
	import { fadeIn } from '@sxxov/sv/ut/transition/transitions';
	import BuildingSuccess from '../lib/ending/BuildingSuccess.svelte';
	import BuildingFailure from '../lib/ending/BuildingFailure.svelte';

	useBuildingInfo(info);

	let selected: Pet | 0;
	let chosen: Pet | 0;

	let ok: boolean | undefined;
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
		<BuildingSuccess />
	{:else}
		<BuildingFailure />
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
