<script lang="ts">
	import { T } from '@threlte/core';
	import {
		gltfs,
		instances,
	} from '../../../assets/routes/lib/village/buildings/parts';
	import { createPart } from '../../../lib/3d/part/createPart';
	import type { PartfulGltf } from '../../../lib/3d/part/PartfulGltf';
	import HideOnOffscreen from '../../../lib/3d/optimisation/HideOnOffscreen.svelte';

	let keyAndPart: [keyof typeof gltfs, PartfulGltf][] = [];

	(
		[
			['building_1', gltfs.building_1],
			['building_2', gltfs.building_2],
			['building_3', gltfs.building_3],
			['building_4', gltfs.building_4],
			['building_5', gltfs.building_5],
			['building_6', gltfs.building_6],
			['building_7', gltfs.building_7],
			['building_8', gltfs.building_8],
			['building_9', gltfs.building_9],
			['building_10', gltfs.building_10],
			['building_11', gltfs.building_11],
			['building_12', gltfs.building_12],
			['building_13', gltfs.building_13],
			['building_14', gltfs.building_14],
			['building_15', gltfs.building_15],
			['building_16', gltfs.building_16],
		] as const satisfies [
			keyof typeof gltfs,
			(typeof gltfs)[keyof typeof gltfs],
		][]
	)
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
