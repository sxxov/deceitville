<script lang="ts">
	import { T } from '@threlte/core';
	import {
		gltfs,
		instances,
	} from '../../../assets/routes/lib/village/buildings/parts';
	import { createPart } from '../../../lib/3d/part/createPart';
	import type { PartfulGltf } from '../../../lib/3d/part/PartfulGltf';
	import HideOnOffscreen from '../../../lib/3d/optimisation/HideOnOffscreen.svelte';

	const entries = <T extends Record<any, any>>(
		object: T,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	): [keyof T, T[keyof T]][] => Object.entries(object) as any;

	let keyAndPart: [keyof typeof gltfs, PartfulGltf][] = [];

	entries(gltfs)
		.filter(([k]) => k.startsWith('building'))
		.map(async ([key, gltf]) => [key, await createPart(gltf)] as const)
		.forEach(async (part) =>
			part.then(([key, part]) => {
				keyAndPart.push([key, part]);
				keyAndPart = keyAndPart;
			}),
		);
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
