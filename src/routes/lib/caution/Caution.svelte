<script lang="ts">
	import * as THREE from 'three';
	import { client, inner } from '@sxxov/ut/viewport';
	import { useThrelte } from '@threlte/core';
	import { usePseudoHeight } from '../layout/usePseudoHeight';
	import { ic_block } from 'maic/two_tone';
	import { Svg } from '@sxxov/sv/svg';

	const { renderer } = useThrelte();
	$: vh = Math.max(
		$inner.height,
		$client.height,
		renderer.getSize(new THREE.Vector2()).height,
	);
	const pseudoHeight = usePseudoHeight();
	const { self, top } = pseudoHeight;
	$: self.set(vh);

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<div class="caution">
	<div
		class="padding start"
		style="--top: {$top}px"
	></div>

	<div class="content">
		<!-- <div class="heading">
			<h2>
				<span class="icon">
					<Svg
						height="100%"
						width="1em"
						svg={ic_block}
					/>
				</span> Corporate Secrets
			</h2>
		</div> -->
		<div class="tape _1"></div>
		<div class="tape _2"></div>
		<div class="tape _3"></div>
		<div class="tape _4"></div>
		<div class="tape _5"></div>
	</div>

	<div class="padding end"></div>
</div>

<style lang="postcss">
	.caution {
		position: absolute;
		top: 0;
		width: 100%;
		pointer-events: none;

		z-index: 2;

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
			/* position: sticky;
			top: 0; */
			position: relative;
			top: 0;

			width: 100%;
			height: 100vh;
			height: 100lvh;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0;
			/* justify-content: space-between; */
			justify-content: center;

			pointer-events: auto;

			overflow-x: hidden;
			overflow-x: clip;

			& > .heading {
				position: absolute;
				top: 0;
				display: flex;
				flex-direction: column;
				gap: 28px;
				height: 100%;
				align-items: center;
				justify-content: center;

				/* background: var(----colour-background-primary); */

				z-index: 1;

				/* transform: rotate3d(1, 1, 1, -60deg); */
				border-radius: var(----roundness);

				/* box-shadow: var(----shadow-lg); */

				& > h2 {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					gap: 0.2em;

					color: var(----colour-text-primary);
					/* letter-spacing: -0.04em; */
					/* font-size: 8rem; */
					margin: 0;
					text-transform: uppercase;
					font-family: var(----font-family-sans);
					font-weight: 900;
					font-size: 2rem;

					padding: 28px;
					box-sizing: border-box;
					backdrop-filter: blur(28px);
					border: 1px solid var(----colour-background-tertiary);
				}
			}

			& > .tape {
				height: 140px;
				width: 200%;

				background: repeating-linear-gradient(
					45deg,
					#000,
					#000 60px,
					var(----colour-text-primary) 60px,
					var(----colour-text-primary) 60px
				);
				border: 1.5px solid var(----colour-text-primary);
				/* box-shadow: var(----shadow-lg); */
				box-shadow: 5px 5px 500px -3px rgb(0 0 0 / 50%);

				&._1 {
					transform: rotate3d(10, 10, 1, 20deg);
				}

				&._2 {
					transform: rotate(15deg);
				}

				&._3 {
					transform: rotate3d(0, 10, 1, -40deg);
				}

				&._4 {
					transform: rotate(10deg);
				}

				&._5 {
					transform: rotate(-10deg);
				}
			}
		}
	}
</style>
