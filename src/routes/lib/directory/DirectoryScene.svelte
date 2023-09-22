<script lang="ts">
	import { Tween } from '@sxxov/sv/animation';
	import { mounted } from '@sxxov/sv/ut/stores';
	import { Composition, Tween as Tw } from '@sxxov/ut/animation';
	import { bezierQuintInOut } from '@sxxov/ut/bezier/beziers';
	import { inner, type Point } from '@sxxov/ut/viewport';
	import {
		forwardEventHandlers,
		T,
		useFrame,
		useThrelte,
		type Events,
		type Props,
	} from '@threlte/core';
	import * as THREE from 'three';
	import FollowLocus from '../../../lib/3d/follow/FollowLocus.svelte';
	import { pointer } from '../../../lib/follow/pointer';
	import VillageScenePostProcessing from '../village/VillageScenePostProcessing.svelte';
	import DirectorySceneCamera from './DirectorySceneCamera.svelte';

	type $$Props = Props<THREE.Group> & {
		ref?: typeof ref;
		object: typeof object;
	};
	type $$Events = Events<THREE.Group>;

	const { camera, scene } = useThrelte();

	export let ref = new THREE.Group();
	export let object: THREE.Object3D | undefined;

	let exiting = false;
	export const exit = async () => {
		exiting = true;
		const fogInit = scene.fog;
		scene.fog = fog;
		await exitComposition.play();
		ref.parent?.remove(ref);
		scene.fog = fogInit;
	};

	const component = forwardEventHandlers();
	const hoverComposition = new Composition();
	const exitComposition = new Composition();

	const fog = new THREE.Fog(0x000000, 0, 3);
	const fogTween = new Tw(0, 1, 1000, bezierQuintInOut);
	$: fog.near = (1 - $fogTween) * 2;
	$: fog.far = (1 - $fogTween) * 4;
	exitComposition.add(fogTween);

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
{#if scrollY > $inner.height * 8.8}
	<DirectorySceneCamera />
	<VillageScenePostProcessing />
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
			<Tween
				composition={exitComposition}
				start={0}
				end={1}
				duration={1000}
				bezier={bezierQuintInOut}
				let:v={vvv}
			>
				<Tween
					composition={exitComposition}
					start={0}
					end={1}
					duration={1000}
					bezier={bezierQuintInOut}
					let:v={vv}
				>
					<Tween
						composition={hoverComposition}
						start={0}
						end={1}
						duration={300}
						bezier={bezierQuintInOut}
						let:v
					>
						<T
							is={o}
							position={[
								vv * -world.x,
								vv * -world.y,
								vv * -z - 0.2,
							]}
							rotation={[
								0,
								rotation + (Math.PI * 2 - rotation) * vvv,
								0,
							]}
							scale={[0.01 * v, 0.01 * v, 0.01 * v]}
							receiveShadow
							castShadow
						/>
					</Tween>
				</Tween>
			</Tween>
		{/if}
	</FollowLocus>
</T>
