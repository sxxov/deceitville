<script lang="ts">
	import { AnimatableIterationCount, Layer as L } from '@sxxov/ut/animation';
	import glb_skull from '../../../assets/tactile/skull/skull.glb?url';
	import { bezierQuintInOut } from '@sxxov/ut/bezier/beziers';
	import * as THREE from 'three';
	import { T } from '@threlte/core';
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';
	import { GLTF, Text } from '@threlte/extras';
	import ttf_bigelow_rules from '../../../assets/tactile/skull/BigelowRules-Regular.ttf?url';

	export let name = '???';
	export let ref = new THREE.Group();

	const bobPosition = new L([0, 0, 0])
		.add([0, 0, 0], { time: 0 }, bezierQuintInOut)
		.add([0, 0.1, 0], { time: 1000 }, bezierQuintInOut)
		.add([0, 0, 0], { time: 2000 }, bezierQuintInOut);
	const bobRotationZ = new L()
		.add(Math.PI / 40, { time: 0 }, bezierQuintInOut)
		.add(-Math.PI / 40, { time: 600 }, bezierQuintInOut)
		.add(Math.PI / 40, { time: 1200 }, bezierQuintInOut);
	const bobRotationY = new L()
		.add(Math.PI / 20, { time: 0 }, bezierQuintInOut)
		.add(-Math.PI / 20, { time: 2000 }, bezierQuintInOut)
		.add(Math.PI / 20, { time: 4000 }, bezierQuintInOut);
	const bobRotationX = new L()
		.add(Math.PI / 20, { time: 0 }, bezierQuintInOut)
		.add(-Math.PI / 20, { time: 4000 }, bezierQuintInOut)
		.add(Math.PI / 20, { time: 8000 }, bezierQuintInOut);

	if (browser) {
		void bobPosition.play(1, AnimatableIterationCount.INFINITE);
		void bobRotationZ.play(1, AnimatableIterationCount.INFINITE);
		void bobRotationY.play(1, AnimatableIterationCount.INFINITE);
		void bobRotationX.play(1, AnimatableIterationCount.INFINITE);
	}

	onDestroy(() => {
		bobPosition.destroy();
		bobRotationZ.destroy();
		bobRotationY.destroy();
		bobRotationX.destroy();
	});
</script>

<T
	is={ref}
	position={$bobPosition}
	rotation={[$bobRotationX, $bobRotationY, $bobRotationZ]}
>
	<GLTF
		url={glb_skull}
		scale={[1, 1, 1]}
	/>
	<Text
		text={name}
		characters={name}
		sdfGlyphSize={8}
		material={new THREE.MeshPhysicalMaterial({
			color: 0xffffff,
			emissive: 0xffffff,
			emissiveIntensity: 100,
		})}
		font={ttf_bigelow_rules}
		fontSize={1}
		anchorX="50%"
		anchorY="50%"
		position={[0, 1.7, 0]}
	/>
	<slot />
</T>
