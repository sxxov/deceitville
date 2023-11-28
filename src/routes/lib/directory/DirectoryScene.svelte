<script lang="ts">
	import { mounted } from '@sxxov/sv/ut/stores';
	import {
		Composition as C,
		Timeline,
		Tween as Tw,
	} from '@sxxov/ut/animation';
	import { bezierQuintInOut } from '@sxxov/ut/bezier/beziers';
	import type { Point } from '@sxxov/ut/viewport';
	import {
		T,
		forwardEventHandlers,
		useFrame,
		useThrelte,
		type Events,
		type Props,
	} from '@threlte/core';
	import { onDestroy } from 'svelte';
	import * as THREE from 'three';
	import FollowLocus from '../../../lib/3d/follow/FollowLocus.svelte';
	import ScrollPosition from '../layout/ScrollPosition.svelte';
	import DirectorySceneCamera from './DirectorySceneCamera.svelte';

	type $$Props = Props<THREE.Group> & {
		ref?: typeof ref;
		object: typeof object;
		point: typeof point;
		scale?: typeof scale;
	};
	type $$Events = Events<THREE.Group>;

	const { camera, scene } = useThrelte();

	export let ref = new THREE.Group();
	export let object: THREE.Object3D | undefined;
	export let point: Point;
	export let scale = 1;

	let exiting = false;
	let fogInit = scene.fog;
	export const exit = async () => {
		exiting = true;
		fogInit = scene.fog;
		scene.fog = fog;
		await exitComposition.play();
	};

	onDestroy(() => {
		scene.fog = fogInit;
		ref.parent?.remove(ref);
	});

	const component = forwardEventHandlers();

	const hoverScaleTween = new Tw(0, 1, 300, bezierQuintInOut);
	const hoverComposition = new C(
		new Timeline([{ x: hoverScaleTween }] as const),
	);

	const exitPositionTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const exitRotationTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const exitFogTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const exitComposition = new C(
		new Timeline([
			{ x: exitPositionTween, at: { start: 0 } },
			{ x: exitRotationTween, at: { start: 0 } },
			{ x: exitFogTween, at: { start: 0 } },
		] as const),
	);

	const fog = new THREE.Fog(0x000000, 0, 3);
	$: fog.near = (1 - $exitFogTween) * 2;
	$: fog.far = (1 - $exitFogTween) * 4;

	let scrollY = 0;
	let top = NaN;

	let o: typeof object;
	$: if (object) o = object;
	$: if (!exiting) void hoverComposition.play(object ? 1 : -1);

	let p: Point;
	$: if (!exiting) p = point;

	let rotation = 0;
	useFrame(() => {
		if (!exiting) rotation = (rotation + 0.01) % (Math.PI * 2);
	});

	$: $mounted && $camera.add(ref);
</script>

<svelte:window bind:scrollY />
<ScrollPosition bind:top />
{#if !Number.isNaN(top) && scrollY >= top}
	<DirectorySceneCamera />
{/if}
<T
	is={ref}
	{...$$restProps}
	bind:this={$component}
>
	<FollowLocus
		point={p}
		let:world
		let:z
	>
		{#if o}
			<T
				is={o}
				position={[
					$exitPositionTween * -world.x,
					$exitPositionTween * -world.y,
					$exitPositionTween * -z - 0.2,
				]}
				rotation={[
					0,
					rotation + (Math.PI * 2 - rotation) * $exitRotationTween,
					0,
				]}
				scale={[
					0.01 * scale * $hoverScaleTween,
					0.01 * scale * $hoverScaleTween,
					0.01 * scale * $hoverScaleTween,
				]}
				receiveShadow
				castShadow
			/>
		{/if}
	</FollowLocus>
</T>
