<script lang="ts">
	import { LoaderLine } from '@sxxov/sv/loaders';
	import { Svg } from '@sxxov/sv/svg';
	import { ic_favorite, ic_info } from 'maic/two_tone';
	import { useAmbientRendererSize } from '../../../lib/3d/canvas/useAmbientRendererSize';
	import { usePseudoHeight } from '../layout/usePseudoHeight';
	import HealthScene from './HealthScene.svelte';

	export let health = 0.5;

	const rendererSize = useAmbientRendererSize();
	$: ({ height: vh } = $rendererSize ?? { height: 0 });

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
		<h2></h2>
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
					backgroundStrokeColour="----colour-text-tertiary"
					completion={Math.max(health, 0.001)}
				/>
			</div>
			<div
				class="hint"
				class:visible={hint}
			>
				<div class="content">
					<Svg svg={ic_info} /><b>Hint:</b>
					{#if health >= 1}Use the directory.{:else if health >= 0.75}Explore
						the town.{:else if health >= 0.5}Find clues.{:else if health >= 0.25}Almost
						there.{:else if health >= 0}I am become death, destroyer
						of towns.{:else}Explore the town.{/if}
				</div>
			</div>
		</div>
		<h2>
			De Corp.®: Status {health >= 1
				? 'Healthy'
				: health >= 0.75
				? 'Compromised'
				: health >= 0.5
				? 'Degraded'
				: health >= 0.25
				? 'Critical'
				: health > 0
				? 'Terminal'
				: 'Dead'}
		</h2>
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

			/* border-bottom: 1px solid var(----colour-text-primary); */

			& > h2 {
				color: var(----colour-text-primary);
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
				border: 1px solid var(----colour-background-tertiary);

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 28px;

				cursor: help;
				-webkit-tap-highlight-color: transparent;

				background: var(----colour-background-primary);
				color: var(----colour-text-primary);

				transition:
					background 0.2s var(----ease-fast-slow),
					color 0.2s var(----ease-fast-slow);

				&:hover {
					background: var(----colour-text-primary);
					color: var(----colour-background-primary);
				}

				&:active {
					background: var(----colour-background-primary);
					color: var(----colour-text-primary);

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
					background: var(----colour-background-primary); */

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

						@media (max-width: 600px) {
							width: 400%;
						}
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
