<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import type * as THREE from 'three';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
	import {
		GLTFLoader,
		type GLTF,
	} from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { gltfs, instances } from '../../../assets/village/parts/index';
	import HideOnOffscreen from '../../../lib/3d/optimisation/HideOnOffscreen.svelte';

	interface Part extends GLTF {
		object: THREE.Object3D | undefined;
	}

	const gltfLoader = new GLTFLoader();
	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath(
		'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
	);
	gltfLoader.setDRACOLoader(dracoLoader);

	const entries = <T extends Record<any, any>>(
		object: T,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	): [keyof T, T[keyof T]][] => Object.entries(object) as any;

	const part = async (gltf: Record<any, any>): Promise<Part> => {
		const result = // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			await gltfLoader.parseAsync(gltf as any, '');

		const [object] = result.scene.children;

		return {
			...result,
			object,
		};
	};

	let keyAndPart: [keyof typeof gltfs, Part][] = [];
	onMount(async () => {
		for (const [key, gltf] of entries(gltfs)) {
			console.log(`Loading GLTF: ${key}`);
			keyAndPart.push([key, await part(gltf)]);
			keyAndPart = keyAndPart;
		}
	});
</script>

{#each keyAndPart as [k, { object }] (k)}
	{#if object}
		{#each instances[k] as { position, rotation, scale }}
			<HideOnOffscreen>
				<T
					is={object.clone(true)}
					{...$$restProps}
					{position}
					quaternion={rotation}
					{scale}
					receiveShadow
					castShadow
				/>
			</HideOnOffscreen>
		{/each}
	{/if}
{/each}
