<script lang="ts">
	import { whenResize } from '@sxxov/sv/ut/action/actions';
	import { clamp01, map01 } from '@sxxov/ut/math';
	import { useAmbientRendererSize } from '../../../lib/3d/canvas/useAmbientRendererSize';
	import VillageScene from '../village/VillageScene.svelte';
	import StoryPlane from './StoryPlane.svelte';

	const storyIndexes = [0, 1, 2, 3] as const;
	let scrollY = 0;

	const rendererSize = useAmbientRendererSize();
	$: ({ height: vh } = $rendererSize ?? { height: 0 });

	let storyContentDiv: HTMLDivElement | undefined;
	let storyClientWidth = 0;
	let storyScrollWidth = 0;
	$: storyScrollX =
		clamp01(map01(scrollY, vh * 2, vh * 8)) *
		(storyScrollWidth - storyClientWidth);
	$: storyContentDiv?.scrollTo(storyScrollX, 0);
</script>

<VillageScene />
<svelte:window bind:scrollY />
<div class="story">
	<div class="padding start"></div>

	<div class="content">
		<div
			class="planes"
			use:whenResize={({ width }) => {
				storyClientWidth = width;
				storyScrollWidth = storyContentDiv?.scrollWidth ?? 0;
			}}
			bind:this={storyContentDiv}
		>
			{#each storyIndexes as i}
				<div
					class="plane"
					style="--i: {i}"
				>
					<div class="padding start"></div>
					<div class="content">
						<StoryPlane
							{i}
							progress={map01(
								clamp01(map01(scrollY, vh * 1.3, vh * 8)),
								i / storyIndexes.length,
								(i + 0.3) / storyIndexes.length,
							)}
						/>
					</div>
					<div class="padding end"></div>
				</div>
			{/each}
			<div
				class="padding"
				style="--length: {storyIndexes.length}"
			></div>
		</div>
	</div>

	<div class="padding end"></div>
</div>

<style lang="postcss">
	.story {
		position: relative;
		top: 0;
		min-width: 100%;

		z-index: 1;

		pointer-events: none;

		& > .padding {
			pointer-events: none;

			&.start {
				height: 200vh;
				height: 200lvh;
			}
			&.end {
				height: 600vh;
				height: 600lvh;
			}
		}

		& > .content {
			position: sticky;
			top: 0;
			width: 100%;
			/* height: 900vh;
			height: 900lvh; */

			& > .planes {
				width: calc(100vw - var(----scrollbar-width));
				height: 100vh;
				height: 100lvh;

				overflow: hidden;

				position: relative;
				display: flex;

				& > .plane {
					--i: 0;

					position: absolute;
					left: 0;
					top: 0;
					display: flex;

					& > .padding {
						flex-shrink: 0;
						pointer-events: none;

						&.start {
							width: calc(
								var(--i) * (150vw - var(----scrollbar-width))
							);
						}

						&.end {
							width: 50vw;
						}
					}

					& > .content {
						position: sticky;
						left: 0;
						top: 0;

						height: 100vh;
						height: 100lvh;
						width: calc(100vw - var(----scrollbar-width));

						z-index: 1;

						pointer-events: auto;
					}
				}

				& > .padding {
					flex-shrink: 0;
					width: calc(
						var(--length) * (150vw - var(----scrollbar-width))
					);
				}
			}
		}
	}
</style>
