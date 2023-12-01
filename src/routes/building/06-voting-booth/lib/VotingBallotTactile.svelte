<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import { css } from '@sxxov/ut/css';
	import {
		T,
		forwardEventHandlers,
		useLoader,
		useThrelte,
		type Events,
		type Props,
		useFrame,
	} from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { ic_check_box, ic_check_box_outline_blank } from 'maic/two_tone';
	import * as THREE from 'three';
	import type { ReadonlyDeep } from 'type-fest';
	import { useAmbientRendererSize } from '../../../../lib/3d/canvas/useAmbientRendererSize';
	import type { VotingBoothPolicy } from './VotingBoothPolicy';
	import { bezierQuintIn } from '@sxxov/ut/bezier/beziers';
	import { createEventDispatcher } from 'svelte';
	import { R } from '@sxxov/sv/functional';
	import { Store } from '@sxxov/ut/store';

	interface $$Events extends Events<THREE.Group> {
		yes: typeof policy;
		no: typeof policy;
	}
	interface $$Props extends Props<THREE.Group> {
		policy: typeof policy;
		width?: typeof width;
		height?: typeof height;
	}

	const dispatch = createEventDispatcher<$$Events>();
	const A_ASPECT = 1 / 1.41;

	const { camera } = useThrelte();
	const size = useAmbientRendererSize()!;

	export let ref = new THREE.Group();
	export let index = 0;
	export let opacity = 1;
	export let policy: ReadonlyDeep<VotingBoothPolicy>;
	export let width = 1;
	export let height = width / A_ASPECT;
	export let padding = 0.05;
	export let disabled = false;
	export let choice: -1 | 0 | 1 = -1;

	const component = forwardEventHandlers();

	const textureLoader = useLoader(THREE.TextureLoader);
	const backgroundNormalMap = textureLoader.load(
		policy.backgroundNormalMapSrc,
	);
	$: if ($backgroundNormalMap)
		Object.assign($backgroundNormalMap, {
			wrapS: THREE.RepeatWrapping,
			wrapT: THREE.RepeatWrapping,
		});

	let pointingCamera: THREE.PerspectiveCamera;
	const updatePointingCamera = () => {
		pointingCamera = $camera.clone() as THREE.PerspectiveCamera;
		// pointingCamera.position.set(0, 0, 4);
		pointingCamera.lookAt(0, 0, 0);
	};
	$: {
		$camera;

		updatePointingCamera();
	}
	const refWorldPosition = new THREE.Vector3();
	const [refTopLeftScreenPosition, refBottomRightScreenPosition] = [
		new THREE.Vector3(),
		new THREE.Vector3(),
	];
	const refTopLeftPaddingScreenPosition = new THREE.Vector3();
	const cameraWorldPosition = new THREE.Vector3();
	let [refScreenWidth, refScreenHeight] = [0, 0];
	let refPadding = 0;
	useFrame(() => {
		pointingCamera.position.z = 4;
		// $camera.position.distanceTo(refWorldPosition);
		// console.log(
		// 	cameraWorldPosition.clone().distanceTo(refWorldPosition.clone()),
		// 	$camera.position.distanceTo(refWorldPosition),
		// );
	});
	const updateRefScreenDimensions = () => {
		// get centre world position
		ref.getWorldPosition(refWorldPosition);
		// get main camera position
		$camera.getWorldPosition(cameraWorldPosition);
		// init with screen position
		refTopLeftScreenPosition.set(
			refWorldPosition.x - width / 2,
			refWorldPosition.y + height / 2,
			refWorldPosition.z,
		);
		refBottomRightScreenPosition.set(
			refWorldPosition.x + width / 2,
			refWorldPosition.y - height / 2,
			refWorldPosition.z,
		);
		refTopLeftPaddingScreenPosition.set(
			refWorldPosition.x - width / 2 + padding,
			refWorldPosition.y + height / 2 - padding,
			refWorldPosition.z,
		);
		// update pointing camera aspect ratio
		pointingCamera.aspect = $size.width / $size.height;
		pointingCamera.position.z = $size.height / 215;
		// force pointing camera to prepare itself for projection
		pointingCamera.updateMatrixWorld();
		pointingCamera.updateProjectionMatrix();
		// project
		refTopLeftScreenPosition.project(pointingCamera);
		refBottomRightScreenPosition.project(pointingCamera);
		refTopLeftPaddingScreenPosition.project(pointingCamera);
		// map to screen position
		const [screenWidthHalf, screenHeightHalf] = [
			$size.width / 2,
			$size.height / 2,
		];
		[refTopLeftScreenPosition.x, refTopLeftScreenPosition.y] = [
			refTopLeftScreenPosition.x * screenWidthHalf + screenWidthHalf,
			-(refTopLeftScreenPosition.y * screenHeightHalf) + screenHeightHalf,
		];
		[refBottomRightScreenPosition.x, refBottomRightScreenPosition.y] = [
			refBottomRightScreenPosition.x * screenWidthHalf + screenWidthHalf,
			-(refBottomRightScreenPosition.y * screenHeightHalf) +
				screenHeightHalf,
		];
		[refTopLeftPaddingScreenPosition.x, refTopLeftPaddingScreenPosition.y] =
			[
				refTopLeftPaddingScreenPosition.x * screenWidthHalf +
					screenWidthHalf,
				-(refTopLeftPaddingScreenPosition.y * screenHeightHalf) +
					screenHeightHalf,
			];
		// get screen size
		[refScreenWidth, refScreenHeight] = [
			refBottomRightScreenPosition.x - refTopLeftScreenPosition.x,
			refBottomRightScreenPosition.y - refTopLeftScreenPosition.y,
		];
		refPadding =
			refTopLeftPaddingScreenPosition.x - refTopLeftScreenPosition.x;
	};
	$: {
		$size;

		updateRefScreenDimensions();
	}
</script>

<T
	is={ref}
	bind:this={$component}
	{...$$restProps}
>
	<T.Mesh>
		<T.PlaneGeometry args={[width, height]} />
		<T.MeshPhysicalMaterial
			side={THREE.DoubleSide}
			color={policy.backgroundColour}
			{opacity}
			transparent
			{...$backgroundNormalMap && { normalMap: $backgroundNormalMap }}
		/>
	</T.Mesh>
	<HTML
		transform
		pointerEvents="none"
		position.z={0.0001}
		scale={[0.1, 0.1, 0.1]}
		zIndexRange={[0, 0]}
	>
		<div
			class="paper"
			style="
				--width: {css(refScreenWidth)};
				--height: {css(refScreenHeight)};
				--padding: {css(refPadding)};
				--colour-text: {css(policy.textColour)};
				--colour-background: {css(policy.backgroundColour)};
				--index: {index};
				--opacity: {bezierQuintIn.at(opacity)};
				--pointer-events: {disabled ? 'none' : 'auto'};
			"
		>
			<div class="top">
				<div class="heading">
					<span class="short">Topic—<b>{policy.short}</b></span>
					<span class="index">{index + 1}</span>
				</div>
				<div class="content">
					<p>{policy.description}</p>
				</div>
			</div>
			<div class="bottom">
				<div class="question">
					<hr />
					<h2>{policy.title}</h2>
				</div>
				<div class="buttons">
					{#each policy.choices as text, i}
						<div class="button">
							<Button
								{...ButtonVariants.Secondary}
								{...ButtonVariants.Shadow.Sm}
								width="100%"
								on:click={() => {
									// blergh
									choice = i === 0 ? 0 : i === 1 ? 1 : -1;

									dispatch(i === 0 ? 'yes' : 'no', policy);
								}}
							>
								<svelte:fragment slot="left">
									<Svg
										svg={choice === i
											? ic_check_box
											: ic_check_box_outline_blank}
									/>
								</svelte:fragment>
								{text}
								<div slot="right"></div>
							</Button>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</HTML>
</T>

<style lang="postcss">
	.paper {
		position: relative;

		color: var(--colour-text);
		width: var(--width);
		height: var(--height);
		padding: var(--padding);
		box-sizing: border-box;
		opacity: var(--opacity);

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			/* background: var(--colour-background);
			opacity: 1; */

			z-index: -1;
		}

		& > .top {
			display: flex;
			flex-direction: column;
			gap: 1em;

			& > .heading {
				display: flex;
				gap: 0.5em;
				align-items: center;
				justify-content: space-between;

				& > .index {
					font-size: 1em;
					color: var(----colour-text-primary);

					&::after {
						content: '.';
						animation: blink 2s calc(var(--index) * 200ms)
							var(----ease-slow-slow) infinite;

						@keyframes blink {
							0% {
								opacity: 0;
							}
							50% {
								opacity: 1;
							}
							100% {
								opacity: 0;
							}
						}
					}
				}

				& > .short {
					font-size: 1em;
					font-weight: 100;
					text-transform: uppercase;
					color: var(----colour-text-primary);

					border: 1px solid var(----colour-text-primary);
					padding: 0.25em 0.5em;
					margin: 0 -0.5em;
					border-radius: 9999px;

					& > b {
						font-weight: 900;
					}
				}
			}

			& > .content {
				display: flex;
				flex-direction: column;
				gap: 1em;

				& > p {
					margin: 0;
					white-space: pre-line;
				}
			}
		}

		& > .bottom {
			display: flex;
			flex-direction: column;
			gap: 1em;

			& > .question {
				display: flex;
				flex-direction: column;
				gap: 1em;

				& > hr {
					border: 0;
					border-top: 1px solid var(----colour-text-primary);
					margin: 0;
				}

				& > h2 {
					margin: 0;
					color: var(----colour-text-primary);
				}
			}

			& > .buttons {
				display: flex;

				gap: 14px;

				& > .button {
					flex-grow: 1;
					width: max-content;

					pointer-events: var(--pointer-events);
				}
			}
		}
	}
</style>
