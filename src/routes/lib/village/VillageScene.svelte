<script lang="ts">
	import { map01 } from '@sxxov/ut/math';
	import { inner } from '@sxxov/ut/viewport';
	import {
		T,
		forwardEventHandlers,
		useFrame,
		useThrelte,
		type Events,
		type Props,
	} from '@threlte/core';
	import * as THREE from 'three';
	import { clamp } from 'three/src/math/MathUtils.js';
	import InvalidateOnScroll from '../../../lib/3d/lmth/InvalidateOnScroll.svelte';
	import VillageSceneCamera from './VillageSceneCamera.svelte';
	import VillageSceneMeshes from './VillageSceneMeshes.svelte';
	import VillageSceneTitle from './VillageSceneTitle.svelte';
	import Fog from '../../../lib/3d/environment/Fog.svelte';

	type $$Props = Props<THREE.Group>;
	type $$Events = Events<THREE.Group>;

	const component = forwardEventHandlers();
	let ref = new THREE.Group();

	const { renderer } = useThrelte();

	let rendererSize = new THREE.Vector2();
	useFrame(() => {
		renderer.getSize(rendererSize);
	});

	let scrollY = 0;
	$: scrollY, (rendererSize = rendererSize);

	const cameraProgressStart = 0;
	const cameraProgressEnd = 1;
	$: cameraProgress = clamp(
		map01(scrollY, 0, (rendererSize.y || $inner.height) * 10),
		cameraProgressStart,
		cameraProgressEnd,
	);

	const titleProgressStart = 0;
	const titleProgressEnd = 1;
	$: titleProgress = clamp(
		map01(scrollY, 0, Number((rendererSize.y || $inner.height) * 1.5)),
		titleProgressStart,
		titleProgressEnd,
	);
</script>

<svelte:window bind:scrollY />
<T
	is={ref}
	visible={cameraProgress < cameraProgressEnd - 0.1}
	{...$$restProps}
	bind:this={$component}
>
	<InvalidateOnScroll />

	{#if cameraProgress >= cameraProgressStart}
		<VillageSceneCamera progress={cameraProgress} />
	{/if}
	{#if cameraProgress >= cameraProgressStart && cameraProgress < cameraProgressEnd - 0.12}
		<Fog />
	{/if}

	{#if titleProgress >= titleProgressStart && titleProgress < titleProgressEnd}
		<VillageSceneTitle progress={titleProgress} />
	{/if}

	<VillageSceneMeshes />

	<slot {ref} />
</T>
