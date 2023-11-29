<script lang="ts">
	import { browser } from '$app/environment';
	import { Rr } from '@sxxov/sv/functional';
	import { Layer } from '@sxxov/ut/animation';
	import type { ReadableBezier } from '@sxxov/ut/bezier';
	import { bezierQuintIn, bezierQuintInOut } from '@sxxov/ut/bezier/beziers';
	import { UnreachableError } from '@sxxov/ut/errors';
	import { raise } from '@sxxov/ut/functional';
	import { map } from '@sxxov/ut/math';
	import { T, useThrelte } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import * as clock_pit from '../../../../assets/routes/building/04-clock-house/lib/clock-pit/parts';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientInteractivity } from '../../../../lib/3d/canvas/useAmbientInteractivity';
	import Part from '../../../../lib/3d/part/Part.svelte';
	import Parts from '../../../../lib/3d/part/Parts.svelte';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';
	import Peek from '../../lib/peek/Peek.svelte';
	import ClockTactile from './ClockTactile.svelte';
	import { ClockHouseSceneState } from './ClockHouseSceneState';
	import { ClockTactileState } from './ClockTactile';

	useAmbientInteractivity();
	useThrelte();

	const dispatch = createEventDispatcher();

	export let state: ClockHouseSceneState = ClockHouseSceneState.IDLE;

	const camera = new THREE.PerspectiveCamera(50);
	camera.position.set(0, 4, 1.5);
	camera.lookAt(0, 0, 0);

	let time = 60 * 60 * 1000;
	$: if (time <= 0) state = ClockHouseSceneState.STOPPED;
	const positions: [x: number, y: number, z: number][] = [
		[-2.77, -2.56, -1.9],
		[1.78, -9.01, 2.66],
		[-2.77, -20.5, -1.9],
		[2.89, -0.12, -1.55],
		[-2.66, -6.67, 0.9],
		[8, -35, -2],
		[-7.55, -5.78, -8.01],
		[4.01, -2.34, 0.67],
		[-7.55, -40, -40],
		[3.9, -6.23, -1.44],
		[0.44, -5.89, -7.88],
		[6, -60, -45],
		[-7.67, -7.2, -1.77],
		[3, -80, -2],
		[-4.88, -3.45, 1.78],
	];
	const getTimes = () =>
		positions.map(
			(_, i, { length }) => map(i + 1, 0, length, 0, 60) * 60 * 1000,
		);
	let times = getTimes();
	const prices = positions.map(Math.random).map((v) => v * 100 + 10);
	const positionLayers = positions.map((pos) =>
		new Layer(pos)
			.add(pos, { time: 0 }, bezierQuintIn)
			.add([NaN, NaN, 10], { time: (10 - pos[2]) * 98.1 * 2 })
			.add([NaN, NaN, Infinity], { offset: 1 }),
	);
	const rotationLayers = positionLayers.map((layer) =>
		new Layer([0, 0, 0])
			.add([0, 0, 0], { time: 0 }, bezierQuintIn)
			.add([degToRad(90), 0, 0], { time: layer.duration })
			.add([degToRad(-90), 0, 0], { offset: 1 }),
	);
	const bezierStepPost: ReadableBezier = {
		at: (t) => (t >= 1 ? 1 : 0),
	};
	const bezierStepPre: ReadableBezier = {
		at: (t) => (t > 0 ? 1 : 0),
	};
	const discountTween = new Layer(Number())
		.add(0, { start: 0 }, bezierStepPost)
		.add(0.1, { offset: 3000 }, bezierStepPost)
		.add(0.2, { offset: 4000 }, bezierStepPost)
		.add(0.3, { offset: 6000 }, bezierStepPost)
		.add(0.4, { offset: 7000 }, bezierStepPost)
		.add(0.5, { offset: 8000 }, bezierStepPost)
		.add(0.6, { offset: 9000 }, bezierStepPost)
		.add(0.7, { offset: 6000 }, bezierStepPost)
		.add(0.8, { offset: 5000 }, bezierStepPost)
		.add(0.9, { offset: 3000 }, bezierStepPost)
		.add(0.95, { offset: 2000 }, bezierStepPost)
		.add(0.96, { offset: 2000 }, bezierStepPost)
		.add(0.97, { offset: 1000 }, bezierStepPost)
		.add(0.98, { offset: 1000 }, bezierStepPost)
		.add(0.99, { offset: 500 }, bezierStepPost);

	const downGroup = new THREE.Group();

	const downRotTween = new Layer([0, 0, 0])
		.add(
			[downGroup.rotation.x, downGroup.rotation.y, downGroup.rotation.z],
			{ time: 0 },
			bezierQuintInOut,
		)
		.add([degToRad(-90), 0, 0], { time: 3000 }, bezierQuintInOut);
	const downPosTween = new Layer([0, 0, 0])
		.add(
			[downGroup.position.x, downGroup.position.y, downGroup.position.z],
			{ time: 0 },
			bezierQuintInOut,
		)
		.add([NaN, NaN, 5], { time: 3000 }, bezierQuintInOut);

	$: if (state === ClockHouseSceneState.IDLE) {
		if (browser) void discountTween.play();
	}

	$: if (state === ClockHouseSceneState.DOWN) {
		void downRotTween.play();
		void downPosTween.play();
	}

	$: if (state === ClockHouseSceneState.PAUSED) {
		downRotTween.pause();
		downPosTween.pause();
		for (const layer of positionLayers) layer.pause();
		for (const layer of rotationLayers) layer.pause();
		discountTween.pause();
	}

	$: if (state === ClockHouseSceneState.RESET) {
		downRotTween.stop();
		downRotTween.stop();
		downPosTween.stop();
		for (const layer of positionLayers) layer.stop();
		for (const layer of rotationLayers) layer.stop();
		discountTween.stop();
		time = 60 * 60 * 1000;
		times = getTimes();
		state = ClockHouseSceneState.IDLE;
	}

	$: if (state === ClockHouseSceneState.STOPPED) {
		void downRotTween.pause();
		void downPosTween.pause();
		for (const layer of positionLayers) layer.pause();
		for (const layer of rotationLayers) layer.pause();
		discountTween.pause();
	}
</script>

<T
	is={downGroup}
	position={$downPosTween}
	rotation={$downRotTween}
>
	<Peek
		swizzle="xzy"
		multiplier={[1, 1, -1]}
	>
		<EphemeralCamera
			ref={camera}
			makeDefault
		/>
	</Peek>
</T>

<T.Group
	position={[0, 0, 10]}
	rotation={[degToRad(-90), 0, 0]}
>
	<Parts {...clock_pit}>
		<svelte:fragment
			slot="part"
			let:gltf
			let:position
			let:rotation
			let:scale
		>
			<ButtonTactile
				on:click={() => {
					dispatch('pick', { price: 0 });
				}}
			>
				<Part
					{gltf}
					{position}
					quaternion={rotation}
					{scale}
				/>
			</ButtonTactile>
		</svelte:fragment>
	</Parts>
	<HTML
		center
		transform
		pointerEvents="none"
		rotation={[degToRad(-90), 0, 0]}
		position={[0, 2, -4]}
		zIndexRange={[-1, -1]}
	>
		<div class="info">
			<div class="discarded">
				<div class="discarded tag">
					<p>Free Clocks</p>
				</div>
			</div>
		</div>
	</HTML>
</T.Group>
<ClockTactile
	bind:time
	state={state === ClockHouseSceneState.PAUSED
		? ClockTactileState.PAUSED
		: ClockTactileState.TICKING}
	timer={0}
	numbered
	speed={-60}
/>
<HTML
	center
	transform
	rotation={[degToRad(-90), 0, 0]}
	position={[0, -10, -8.5]}
	scale={0.5}
	zIndexRange={[-1, -1]}
	pointerEvents="none"
>
	<div class="info">
		<div class="timer">
			<div class="timer tag">
				<p>
					{String(Math.floor(time / 1000 / 60 / 60)).padStart(
						2,
						'0',
					)}:{String(Math.floor(time / 1000 / 60)).padStart(2, '0')}
				</p>
			</div>
		</div>
		<div class="discount">
			<div class="discount tag">
				<p>{Math.floor($discountTween * 100)}% Off</p>
			</div>
		</div>
	</div>
</HTML>

<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
{#each positions as _, i}
	{@const price = Math.floor(Number(prices[i]) * (1 - $discountTween)) + 1}
	<Rr
		rr={{
			position: positionLayers[i] ?? raise(new UnreachableError()),
			rotation: rotationLayers[i] ?? raise(new UnreachableError()),
		}}
		let:v
	>
		<T.Group
			position={v.position}
			rotation={v.rotation}
		>
			{#if !v.position.some((v) => !Number.isFinite(v))}
				<HTML
					center
					pointerEvents="none"
				>
					<div class="price tag">
						<p>
							${price}
						</p>
					</div>
				</HTML>
			{/if}
			<ButtonTactile
				on:click={() => {
					dispatch('pick', { price });
				}}
			>
				<ClockTactile
					state={state === ClockHouseSceneState.PAUSED
						? ClockTactileState.PAUSED
						: ClockTactileState.TICKING}
					bind:time={times[i]}
					timer={0}
					speed={-60}
					on:stopped={() => {
						void positionLayers[i]?.play();
						void rotationLayers[i]?.play();
					}}
				/>
			</ButtonTactile>
		</T.Group>
	</Rr>
{/each}

<!-- <TableTactile
	position={[0, 0, 0]}
	rotation={[0, 0, 0]}
	widthSurface={2}
	heightSurface={1}
	heightLeg={2}
/> -->

<style lang="postcss">
	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 28px;

		& > .timer {
			position: relative;

			display: flex;
			align-items: center;
			justify-content: center;

			pointer-events: none;
		}

		& > .discount {
			position: relative;

			display: flex;
			align-items: center;
			justify-content: center;

			pointer-events: none;
		}

		& > .discarded {
			position: relative;

			display: flex;
			align-items: center;
			justify-content: center;

			pointer-events: none;
		}
	}

	.tag {
		width: max-content;
		height: max-content;
		transition: font-size 0.5s var(----ease-fast-slow);

		&.timer {
			border-radius: 9999px;
			padding: 1em 1.5em;
			border: 1px solid rgb(223, 58, 58);

			& > p {
				margin: 0;
				font-family: var(----font-family-mono);
				color: rgb(223, 58, 58);
				letter-spacing: -0.05em;
				font-size: 2em;
				font-weight: bold;
				text-transform: uppercase;
				line-height: 1em;
			}
		}

		&.discount {
			background: linear-gradient(
				180deg,
				rgb(219, 156, 156) 0%,
				rgb(218, 81, 81) 1%,
				rgb(238, 71, 71) 40%,
				rgb(223, 58, 58) 50%,
				rgb(182, 13, 13) 45%,
				rgb(223, 58, 58) 95%,
				rgb(108, 10, 10) 100%
			);
			border: 1px solid #c06d6d;
			border-radius: 7px;
			padding: 1em 2em;

			/* transform: translate(0, -50%); */

			& > p {
				margin: 0;
				background: linear-gradient(
					180deg,
					var(----colour-background-primary) 0%,
					var(----colour-background-tertiary) 48%,
					var(----colour-background-primary) 50%,
					var(----colour-background-primary) 100%
				);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				font-family: var(----font-family-mono);
				letter-spacing: -0.08em;
				font-size: 8em;
				font-weight: 900;
				text-transform: uppercase;
				line-height: 1em;
			}
		}

		&.price {
			border-radius: 9999px;
			padding: 1em 2em;
			border: 1px solid var(----colour-text-primary);

			pointer-events: none;

			& > p {
				margin: 0;
				font-family: var(----font-family-sans);
				letter-spacing: -0.05em;
				font-size: 1em;
				font-weight: bold;
				text-transform: uppercase;
				line-height: 1em;
			}
		}

		&.discarded {
			border-radius: 9999px;
			padding: 1em 1.5em;
			border: 1px solid var(----colour-text-primary);

			pointer-events: none;

			& > p {
				margin: 0;
				font-family: var(----font-family-sans);
				letter-spacing: -0.05em;
				font-size: 1em;
				font-weight: bold;
				/* text-transform: uppercase; */
				line-height: 1em;
			}
		}
	}
</style>
