<script lang="ts">
	import { Button } from '@sxxov/sv/button';
	import { Spacer } from '@sxxov/sv/layout';
	import { Svg } from '@sxxov/sv/svg';
	import { ic_arrow_downward } from 'maic/two_tone';
	import { completable } from '../../lib/health/completion';
	import BuildingFailure from '../lib/ending/BuildingFailure.svelte';
	import BuildingSuccess from '../lib/ending/BuildingSuccess.svelte';
	import { useBuildingNav } from '../lib/nav/useBuildingNav';
	import { info } from './@info';
	import ClockHouseScene from './lib/ClockHouseScene.svelte';
	import { ClockHouseSceneState } from './lib/ClockHouseSceneState';

	const { exit } = useBuildingNav()!;

	let picked = false;
	let prices: number[] = [];
	$: price = prices.reduce((a, b) => a + b, 0);

	let clockHouseSceneState = ClockHouseSceneState.IDLE;
	const retry = () => {
		picked = false;
		prices = [];
		clockHouseSceneState = ClockHouseSceneState.RESET;
	};
</script>

<ClockHouseScene
	bind:state={clockHouseSceneState}
	on:pick={({ detail: { price } }) => {
		picked = true;
		prices.push(Number(price));
		prices = prices;
		clockHouseSceneState = ClockHouseSceneState.PAUSED;
	}}
/>
<div
	class="clock-house"
	class:stopped={clockHouseSceneState === ClockHouseSceneState.STOPPED}
	class:down={clockHouseSceneState === ClockHouseSceneState.DOWN}
>
	<div class="sold-out">Sold Out!</div>
	<div class="look-down">
		<Button
			width="auto"
			roundness={28}
			on:click={() => {
				clockHouseSceneState = ClockHouseSceneState.DOWN;
			}}
			><Svg
				width={16}
				svg={ic_arrow_downward}
			/><Spacer width={0} />Look Down</Button
		>
	</div>
</div>
{#if picked}
	{#if price <= 0}
		{#if prices.length > 0}
			{(completable[info.id]?.set(true), '')}
			<BuildingSuccess
				on:complete={exit}
				on:retry={retry}
			>
				{(completable[info.id]?.set(true), '')}
				You discover the discard pile that's just always been there & paid
				${price} for {prices.length} clock{prices.length === 1
					? ''
					: 's'}.
				<br />
				{#if price === 0}
					The store owner personally bans you from coming back.
				{:else}
					The police are on their way.
				{/if}
			</BuildingSuccess>
		{:else}
			<BuildingFailure
				on:exit={exit}
				on:retry={retry}
			>
				You bought no clocks.
				<br />
				Maybe you just lost track of time?
			</BuildingFailure>
		{/if}
	{:else}
		<BuildingFailure
			on:exit={exit}
			on:retry={retry}
		>
			You spent a whopping ${price} for {prices.length} new clock{prices.length ===
			1
				? ''
				: 's'}.
			<br />
			{#if price > 50}
				The store owner calls you a sucker on the way out.
			{:else if price > 30}
				Have you ever bought a clock for that price before?
			{:else if price > 10}
				You seriously couldn't haggle off ${price}?
			{:else if price > 0}
				Who still pays for clocks?
			{:else}
				Did you rob the store owner???
			{/if}
		</BuildingFailure>
	{/if}
{/if}

<style lang="postcss">
	.clock-house {
		height: 100%;
		width: 100%;

		&:not(.stopped) {
			display: none;
		}

		& > .sold-out {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			font-size: max(10rem, 30vw);
			/* text-transform: uppercase; */
			font-family: var(----font-family-display);
			letter-spacing: -0.05em;
			color: var(----colour-text-primary);

			border: 1px solid var(----colour-text-primary);
			border-radius: 9999px;
			padding: 0.3em 0.4em;
			line-height: 0.8em;
			box-sizing: border-box;

			z-index: 1;

			animation: splash-in 1s cubic-bezier(0.77, 0, 0.02, 1.21) backwards;

			@keyframes splash-in {
				0% {
					transform: scale(8);
					opacity: 0;
				}

				40% {
					opacity: 1;
				}

				40% {
					transform: scale(4);
				}

				100% {
					transform: scale(1);
				}
			}
		}

		&.down > .sold-out {
			animation: scale-out 0.4s 0.2s var(----ease-slow-fast) forwards;

			@keyframes scale-out {
				0% {
					transform: scale(1);
				}

				70% {
					opacity: 1;
				}

				99% {
					display: flex;
				}

				100% {
					display: none;
					opacity: 0;
					transform: scale(0.8);
				}
			}
		}

		& > .look-down {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			z-index: 1;

			opacity: 1;
			transition: opacity 0.2s var(----ease-slow-fast);

			animation: fade-in 0.2s 4s var(----ease-fast-slow) backwards;

			@keyframes fade-in {
				0% {
					display: none;
					opacity: 0;
				}

				1% {
					display: flex;
				}

				100% {
					opacity: 1;
				}
			}
		}

		&.down > .look-down {
			animation: fade-out 0.2s var(----ease-fast-slow) forwards;

			@keyframes fade-out {
				0% {
					opacity: 1;
				}

				99% {
					display: flex;
				}

				100% {
					display: none;
					opacity: 0;
				}
			}
		}
	}
</style>
