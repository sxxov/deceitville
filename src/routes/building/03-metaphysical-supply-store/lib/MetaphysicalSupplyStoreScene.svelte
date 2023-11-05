<script lang="ts">
	import { traversePropertyElements } from '@sxxov/ut/traverse';
	import { createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import * as rocks from '../../../../assets/building/metaphysical-supply-store/rocks/parts/index';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientInteractivity } from '../../../../lib/3d/canvas/useAmbientInteractivity';
	import Fog from '../../../../lib/3d/environment/Fog.svelte';
	import { usePostProcessing } from '../../../../lib/3d/environment/usePostProcessing';
	import Part from '../../../../lib/3d/part/Part.svelte';
	import Parts from '../../../../lib/3d/part/Parts.svelte';
	import BobbleSkullTactile from '../../../../lib/3d/tactile/BobbleSkullTactile.svelte';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';
	import TableTactile from '../../../../lib/3d/tactile/TableTactile.svelte';

	const dispatch = createEventDispatcher();

	useAmbientInteractivity();

	// usePostProcessing()?.effectMap.set({});

	const { effectMap } = usePostProcessing() ?? {};
	$: ({ outline } = $effectMap ?? {});

	const onPointerIn = (ref: THREE.Group) => {
		if (!outline) return;

		traversePropertyElements(ref, 'children', (child) => {
			if (child instanceof THREE.Mesh && !('font' in child))
				outline!.selection.add(child);
		});
	};

	const onPointerOut = (ref: THREE.Group) => {
		if (!outline) return;

		traversePropertyElements(ref, 'children', (child) => {
			if (outline!.selection.has(child)) outline!.selection.delete(child);
		});
	};

	const camera = new THREE.PerspectiveCamera(50);
	camera.position.set(0, -3, 7);
	camera.lookAt(0, 0, 0);
</script>

<EphemeralCamera ref={camera} />

<!-- <T.PerspectiveCamera
	makeDefault
	position={[0, -3, 7]}
>
	<OrbitControls enableDamping />
</T.PerspectiveCamera> -->
<Fog
	near={0}
	far={20}
/>

<Parts
	{...rocks}
	position={[3, -3.2, 1]}
	rotation={[degToRad(0), degToRad(-80), 0]}
	scale={[1, 1, 1]}
	><svelte:fragment
		slot="part"
		let:partIndex
		let:gltf
		let:position
		let:rotation
		let:scale
	>
		<ButtonTactile
			on:click={() => {
				dispatch('rock', { i: partIndex });
			}}
			let:ref
			let:hovering
			let:pressing
		>
			<Part
				{gltf}
				{position}
				quaternion={rotation}
				{scale}
			>
				<!-- eslint-disable-next-line @typescript-eslint/no-unsafe-argument -->
				{(hovering || pressing ? onPointerIn(ref) : onPointerOut(ref),
				'')}
			</Part>
		</ButtonTactile>
	</svelte:fragment>
</Parts>
<Parts
	{...rocks}
	position={[-3, -3.2, 0]}
	rotation={[degToRad(0), degToRad(-60), 0]}
	scale={[-1, 1, -1]}
>
	<svelte:fragment
		slot="part"
		let:partIndex
		let:gltf
		let:position
		let:rotation
		let:scale
	>
		<ButtonTactile
			on:click={() => {
				dispatch('rock', { i: partIndex });
			}}
			let:ref
			let:hovering
			let:pressing
		>
			<Part
				{gltf}
				{position}
				quaternion={rotation}
				{scale}
			>
				<!-- eslint-disable-next-line @typescript-eslint/no-unsafe-argument -->
				{(hovering || pressing ? onPointerIn(ref) : onPointerOut(ref),
				'')}
			</Part>
		</ButtonTactile>
	</svelte:fragment>
</Parts>
<ButtonTactile
	on:click={() => {
		dispatch('keeper');
	}}
	let:ref
	let:hovering
	let:pressing
>
	<!-- eslint-disable-next-line @typescript-eslint/no-unsafe-argument -->
	{(hovering || pressing ? onPointerIn(ref) : onPointerOut(ref), '')}
	<BobbleSkullTactile
		name="Ms. Jewel"
		position={[0, 1, -2]}
		rotation={[degToRad(0), degToRad(0), 0]}
	/>
</ButtonTactile>
<TableTactile
	position={[-1.3, -1, 1]}
	rotation={[degToRad(0), degToRad(30), 0]}
	widthSurface={2}
	heightSurface={1}
	heightLeg={2}
/>
<TableTactile
	position={[1.3, -1, 1]}
	rotation={[degToRad(0), degToRad(-30), 0]}
	widthSurface={2}
	heightSurface={1}
	heightLeg={2}
/>
