<script lang="ts">
	import { Spacer } from '@sxxov/sv/layout';
	import { whenResize } from '@sxxov/sv/ut/use';
	import { clamp01, map01 } from '@sxxov/ut/math';
	import { client, inner } from '@sxxov/ut/viewport';
	import { T, useThrelte } from '@threlte/core';
	import VillageScene from './lib/village/VillageScene.svelte';
	import Waze from './lib/waze/Waze.svelte';
	import * as THREE from 'three';
	import Story from './lib/story/Story.svelte';

	// useRender(console.log);

	const { renderer } = useThrelte();

	const storyIndexes = [0, 1, 2, 3] as const;

	let scrollY = 0;
	$: vw = Math.max(
		$inner.width,
		$client.width,
		renderer.getSize(new THREE.Vector2()).width,
	);
	$: vh = Math.max(
		$inner.height,
		$client.height,
		renderer.getSize(new THREE.Vector2()).height,
	);

	let storyFirstWidth = 0;
	$: storyFirstPadding = Math.max(($inner.width - storyFirstWidth) / 2, 200);
	let storyContentDiv: HTMLDivElement | undefined;
	let storyClientWidth = 0;
	let storyScrollWidth = 0;
	$: storyScrollX =
		clamp01(map01(scrollY, vh * 2, vh * 8)) *
		(storyScrollWidth - storyClientWidth);
	$: storyContentDiv?.scrollTo(storyScrollX, 0);
</script>

<svelte:window bind:scrollY />
<div class="route home">
	<T.PerspectiveCamera
		makeDefault
		position={[0, 0, 0]}
	/>

	<div class="frame">
		<div class="waze">
			<Waze
				m={scrollY}
				timeline={[
					{
						m: vh * 1.5,
						direction: 'straight',
					},
					{
						m: vh * 3,
						direction: 'right',
					},
					{
						m: vh * 5.2,
						direction: 'left',
					},
					{
						m: vh * 7,
						direction: 'right',
					},
					{
						m: vh * 9,
						direction: 'straight',
					},
				]}
			/>
		</div>
	</div>

	<div class="cover">
		<div class="heading">
			<!-- <h6>Welcome to</h6> -->
			<!-- <h1>Deceitville</h1> -->
			<!-- <div style="width: 100px; height: 100px">
				<Lmth debug>
					<T.Mesh>
						<T.BoxGeometry args={[1, 1, 1]} />
						<T.MeshBasicMaterial color={[1, 0, 0]} />
					</T.Mesh>
				</Lmth>
			</div> -->
		</div>
	</div>

	<VillageScene />

	<div class="intro">
		<div class="padding start"></div>

		<div class="story">
			<div
				class="content"
				use:whenResize={({ width }) => {
					storyClientWidth = width;
					storyScrollWidth = storyContentDiv?.scrollWidth ?? 0;
				}}
				bind:this={storyContentDiv}
			>
				<!-- <p>
					<Spacer width={storyFirstPadding} />
					<span
						class="sentence"
						use:whenResize={({ width }) => {
							storyFirstWidth = width;
						}}
					>
						Deceitville is a town owned by Evil Corp.
					</span>
					<Spacer width="20vw" />
					<span class="sentence">
						You're in charge of taking it back!
					</span>
					<Spacer width="20vw" />
					<span class="sentence">
						But beware, it's filled with deceit&hellip;
					</span>
					<Spacer width="20vw" />
					<span class="sentence">
						like the types you find in your favourite websites.
					</span>
					<Spacer width={storyFirstPadding} />
				</p> -->
				{#each storyIndexes as i}
					<div
						class="plane"
						style="--i: {i}"
					>
						<div class="padding start"></div>
						<div class="content">
							<Story
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
			<!-- <Story /> -->
		</div>

		<div class="padding end"></div>
	</div>
</div>

<style lang="postcss">
	.home {
		display: contents;

		& > .frame {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;

			z-index: 10;
			mix-blend-mode: difference;

			display: grid;
			grid-template-areas:
				'. . .'
				'. content .'
				'. waze .';
			grid-template-columns: auto 1fr auto;
			grid-template-rows: auto 1fr auto;

			pointer-events: none;

			& > .waze {
				grid-area: waze;
				width: 100%;

				display: grid;
				place-items: center;
			}
		}

		& > .cover {
			position: relative;

			width: 100%;
			height: 100vh;

			/* cursor: crosshair;

			z-index: 1; */

			& > .heading {
				width: 100%;
				height: 100%;

				display: grid;
				place-items: center;
				align-items: start;
				padding: 84px;
				box-sizing: border-box;

				& > h1 {
					font-size: 25vw;
					margin: 0;

					color: white;
					text-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);
				}

				& > h6 {
					font-size: 1rem;
					margin: 0;
					font-weight: 900;
					text-transform: uppercase;

					color: white;
					text-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);
				}
			}
		}

		& > .intro {
			position: absolute;
			top: 0;
			min-width: 100%;

			z-index: 1;

			& > .padding {
				&.start {
					height: 200vh;
					height: 200lvh;
				}
				&.end {
					height: 600vh;
					height: 600lvh;
				}
			}

			& > .story {
				position: sticky;
				top: 0;
				width: 100%;
				height: 900vh;
				height: 900lvh;

				& > .content {
					width: calc(100vw - var(----scrollbar-width));
					height: 100vh;
					height: 100lvh;

					overflow: hidden;

					position: relative;
					/* display: grid;
					place-items: center; */
					display: flex;

					& > p {
						font-size: clamp(1rem, 4vw, 2rem);
						margin: 0;
						white-space: nowrap;
						padding-left: 0vw;

						display: flex;

						& > .sentence {
							display: inline-block;

							&:nth-child(1) {
							}
						}
					}

					& > .plane {
						--i: 0;

						position: absolute;
						left: 0;
						top: 0;
						display: flex;
						/* display: contents; */
						/* width: calc(
							(var(--i) + 1) * (100vw - var(----scrollbar-width))
						); */

						& > .padding {
							flex-shrink: 0;

							&.start {
								width: calc(
									var(--i) *
										(150vw - var(----scrollbar-width))
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
	}
</style>
