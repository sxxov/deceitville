<script lang="ts">
	import { Store } from '@sxxov/ut/store';
	import { inner, type Point } from '@sxxov/ut/viewport';
	import { T, useFrame } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import { gltfs } from '../../../assets/village/parts/index';
	import FollowLocus from '../../../lib/3d/follow/FollowLocus.svelte';
	import { createPart } from '../../../lib/3d/gltf/part';
	import HealthSceneCamera from './HealthSceneCamera.svelte';
	import { useAmbientRendererSize } from '../../../lib/3d/canvas/useAmbientRendererSize';
	import ScrollPosition from '../layout/ScrollPosition.svelte';

	const rendererSize = useAmbientRendererSize();
	$: ({ height: vh } = $rendererSize ?? { height: 0 });

	const point = new Store<Point>({ x: 0, y: 0 });
	let scrollY = 0;
	let top = 0;

	let rotation = 0;
	useFrame(() => {
		rotation += 0.01;
		point.set({
			x: $inner.width / 2,
			y: top + vh / 2 - scrollY,
		});
	});
</script>

<svelte:window bind:scrollY />
<ScrollPosition bind:top />
{#if scrollY > top}
	<HealthSceneCamera />
{/if}
{#await createPart(gltfs.building_10) then { object }}
	{#if object}
		<FollowLocus point={$point}>
			<T
				is={object.clone(true)}
				{...$$restProps}
				receiveShadow
				castShadow
				position={[0, 0, 0]}
				rotation={[rotation, 0, degToRad(-90)]}
				scale={0.03}
			/>
		</FollowLocus>
	{/if}
{/await}
