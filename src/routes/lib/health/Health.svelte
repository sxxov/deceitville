<script lang="ts">
	import * as THREE from 'three';
	import { client, inner } from '@sxxov/ut/viewport';
	import { useThrelte } from '@threlte/core';
	import { usePseudoHeight } from '../layout/usePseudoHeight';
	import HealthScene from './HealthScene.svelte';
	import { ic_favorite, ic_info } from 'maic/two_tone';
	import { Svg } from '@sxxov/sv/svg';
	import { LoaderLine } from '@sxxov/sv/loaders';

	export let health = 1;

	const { renderer } = useThrelte();
	$: vh = Math.max(
		$inner.height,
		$client.height,
		renderer.getSize(new THREE.Vector2()).height,
	);
	const pseudoHeight = usePseudoHeight();
	const { self, top } = pseudoHeight;
	$: self.set(vh);

	let hint = false;
</script>

<div class="health">
	<div
		class="padding start"
		style="--top: {$top}px"
	></div>
	<div class="content">
		<h2>De Corp.™</h2>
		<div
			class="progress"
			role="presentation"
			on:click={() => (hint = !hint)}
		>
			<div class="info">
				<div class="icon">
					<Svg svg={ic_favorite} />
				</div>
				<p class="percent">{(health * 100).toFixed(0)}</p>
			</div>
			<div class="bar">
				<LoaderLine
					strokeColour="currentColor"
					backgroundStrokeColour="#fff3"
					completion={Math.max(health, 0.001)}
				/>
			</div>
			<div
				class="hint"
				class:visible={hint}
			>
				<div class="content">
					<Svg svg={ic_info} />{#if health >= 1}Explore the town.{:else if health >= 0.75}Explore
						more of the town.{:else if health >= 0.5}Find clues.{:else if health >= 0.25}Destroy
						the rest of the town.{:else}Explore the town.{/if}
				</div>
			</div>
		</div>
		<h2>Status Dashboard</h2>
	</div>

	<div class="padding end"></div>
</div>
<HealthScene {pseudoHeight} />

<style lang="postcss">
	.health {
		position: absolute;
		top: 0;
		width: 100%;
		pointer-events: none;

		z-index: 1;

		& > .padding {
			pointer-events: none;

			&.start {
				--top: 0px;

				height: var(--top);
			}
			&.end {
				height: 100vh;
				height: 100lvh;
			}
		}

		& > .content {
			width: 100%;
			height: 100vh;
			height: 100lvh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;

			pointer-events: auto;

			& > h2 {
				color: #fff;
				letter-spacing: -0.04em;
			}

			& > .progress {
				width: 100%;
				max-width: 600px;
				padding-left: 20px;
				box-sizing: border-box;
				box-sizing: border-box;
				/* padding-block: 28px; */
				border-radius: var(----roundness);
				border: 1px solid #fff3;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 28px;

				cursor: pointer;
				-webkit-tap-highlight-color: transparent;

				background: #000;
				color: #fff;

				transition:
					background 0.2s var(----ease-fast-slow),
					color 0.2s var(----ease-fast-slow);

				&:hover {
					background: #fff;
					color: #000;
				}

				&:active {
					background: #000;
					color: #fff;

					transition:
						background 0s var(----ease-fast-slow),
						color 0s var(----ease-fast-slow);
				}

				& > .info {
					display: flex;
					gap: 14px;
					align-items: center;
					/* position: absolute;
					padding-inline: 20px;
					background: #000; */

					z-index: 1;
				}

				& > .bar {
					flex-grow: 1;
					width: 400px;
				}

				& > .hint {
					position: relative;
					width: 0;
					height: 50px;
					overflow: hidden;
					overflow: clip;
					opacity: 0;
					pointer-events: none;

					display: flex;
					align-items: center;

					transition:
						width 0.2s var(----ease-fast-slow),
						opacity 0.1s 0s var(----ease-fast-slow);

					&.visible {
						width: 100%;
						opacity: 1;
						pointer-events: auto;

						transition:
							width 0.2s var(----ease-fast-slow),
							opacity 0s 0.01s var(----ease-fast-slow);
					}

					& > .content {
						display: none;
						position: absolute;
						display: flex;
						align-items: center;
						gap: 14px;
						width: 100%;
					}
				}
			}
		}
	}
</style>
