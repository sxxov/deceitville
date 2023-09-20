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
		type Slots,
	} from '@threlte/core';
	import { ContactShadows } from '@threlte/extras';
	import * as THREE from 'three';
	import { clamp } from 'three/src/math/MathUtils.js';
	import VillageSceneCamera from './VillageSceneCamera.svelte';
	import VillageSceneEnvironment from './VillageSceneEnvironment.svelte';
	import VillageSceneFog from './VillageSceneFog.svelte';
	import VillageSceneMeshes from './VillageSceneMeshes.svelte';
	import VillageScenePostProcessing from './VillageScenePostProcessing.svelte';
	import VillageSceneTitle from './VillageSceneTitle.svelte';
	import InvalidateOnScroll from '../../../lib/3d/lmth/InvalidateOnScroll.svelte';

	type $$Props = Props<THREE.Group>;
	type $$Events = Events<THREE.Group>;
	type $$Slots = Slots<THREE.Group> & {
		fallback: Record<string, unknown>;
		error: { error: any };
	};

	const component = forwardEventHandlers();
	let ref = new THREE.Group();

	const { renderer } = useThrelte();

	let rendererSize = new THREE.Vector2();
	useFrame(() => {
		renderer.getSize(rendererSize);
	});

	let scrollY = 0;
	$: scrollY, (rendererSize = rendererSize);
</script>

<svelte:window bind:scrollY />
<T
	is={ref}
	dispose={false}
	{...$$restProps}
	bind:this={$component}
>
	<InvalidateOnScroll />
	<VillageSceneCamera
		progress={clamp(
			map01(scrollY, 0, (rendererSize.y || $inner.height) * 10),
			0,
			0.88,
		)}
	/>
	<VillageSceneEnvironment />
	<VillageSceneFog />
	<!-- <VillageSceneLights /> -->
	<VillageSceneMeshes />
	<ContactShadows />
	<VillageScenePostProcessing />
	<VillageSceneTitle
		progress={clamp(
			map01(scrollY, 0, Number(rendererSize.y || $inner.height)),
			0,
			1,
		)}
	/>

	<slot {ref} />
</T>
