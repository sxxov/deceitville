<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import { gltfs, instances } from '../../../assets/village/parts/index';
	import { createPart, type Part } from '../../../lib/3d/gltf/part';
	import HideOnOffscreen from '../../../lib/3d/optimisation/HideOnOffscreen.svelte';

	const entries = <T extends Record<any, any>>(
		object: T,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	): [keyof T, T[keyof T]][] => Object.entries(object) as any;

	let keyAndPart: [keyof typeof gltfs, Part][] = [];
	onMount(async () => {
		for (const [key, gltf] of entries(gltfs).filter(([k]) =>
			k.startsWith('building'),
		)) {
			console.log(`Loading GLTF: ${key}`);
			keyAndPart.push([key, await createPart(gltf)]);
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
