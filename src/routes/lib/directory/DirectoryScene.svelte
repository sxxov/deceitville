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
	import { tick } from 'svelte';
	import * as THREE from 'three';
	import FollowLocus from '../../../lib/3d/follow/FollowLocus.svelte';
	import { pointer } from '../../../lib/follow/pointer';
	import type { PseudoHeight } from '../layout/PseudoHeight';
	import VillageSceneEnvironment from '../village/VillageSceneEnvironment.svelte';
	import VillageScenePostProcessing from '../village/VillageScenePostProcessing.svelte';
	import DirectorySceneCamera from './DirectorySceneCamera.svelte';

	type $$Props = Props<THREE.Group> & {
		ref?: typeof ref;
		object: typeof object;
		pseudoHeight: typeof pseudoHeight;
	};
	type $$Events = Events<THREE.Group>;

	const { camera, scene } = useThrelte();

	export let ref = new THREE.Group();
	export let object: THREE.Object3D | undefined;
	export let pseudoHeight: PseudoHeight;

	const { top, bottom } = pseudoHeight;

	let exiting = false;
	export const exit = async () => {
		exiting = true;
		const fogInit = scene.fog;
		scene.fog = fog;
		await exitComposition.play();
		scene.fog = fogInit;
		void tick().then(() => {
			ref.parent?.remove(ref);
		});
	};

	const component = forwardEventHandlers();

	const hoverScaleTween = new Tw(0, 1, 300, bezierQuintInOut);
	const hoverComposition = new C(
		new Timeline([{ tween: hoverScaleTween }] as const),
	);

	const exitPositionTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const exitRotationTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const exitFogTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const exitComposition = new C(
		new Timeline([
			{ tween: exitPositionTween, at: { start: 0 } },
			{ tween: exitRotationTween, at: { start: 0 } },
			{ tween: exitFogTween, at: { start: 0 } },
		] as const),
	);

	const fog = new THREE.Fog(0x000000, 0, 3);
	$: fog.near = (1 - $exitFogTween) * 2;
	$: fog.far = (1 - $exitFogTween) * 4;

	let scrollY = 0;

	let o: typeof object;
	$: if (object) o = object;
	$: if (!exiting) void hoverComposition.play(object ? 1 : -1);

	let point: Point;
	$: if (!exiting) point = $pointer;

	let rotation = 0;
	useFrame(() => {
		if (!exiting) rotation = (rotation + 0.01) % (Math.PI * 2);
	});

	$: $mounted && $camera.add(ref);
</script>

<svelte:window bind:scrollY />
{#if scrollY > $top}
	<DirectorySceneCamera />
{/if}
{#if scrollY > $top && scrollY <= $bottom}
	<VillageScenePostProcessing />
	<VillageSceneEnvironment />
{/if}
<T
	is={ref}
	{...$$restProps}
	bind:this={$component}
>
	<FollowLocus
		{point}
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
					0.01 * $hoverScaleTween,
					0.01 * $hoverScaleTween,
					0.01 * $hoverScaleTween,
				]}
				receiveShadow
				castShadow
			/>
		{/if}
	</FollowLocus>
</T>
