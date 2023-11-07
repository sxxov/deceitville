<script lang="ts">
	import { useThrelte } from '@threlte/core';
	import { createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import * as rocks from '../../../../assets/routes/building/03-metaphysical-supply-store/lib/rocks/parts';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientInteractivity } from '../../../../lib/3d/canvas/useAmbientInteractivity';
	import Fog from '../../../../lib/3d/environment/Fog.svelte';
	import Part from '../../../../lib/3d/part/Part.svelte';
	import Parts from '../../../../lib/3d/part/Parts.svelte';
	import BobbleSkullTactile from '../../../../lib/3d/tactile/BobbleSkullTactile.svelte';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';
	import TableTactile from '../../../../lib/3d/tactile/TableTactile.svelte';

	const dispatch = createEventDispatcher();

	useAmbientInteractivity();
	useThrelte();

	// usePostProcessing()?.effectMap.set({});

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
		>
			<Part
				{gltf}
				{position}
				quaternion={rotation}
				{scale}
			/>
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
		>
			<Part
				{gltf}
				{position}
				quaternion={rotation}
				{scale}
			/>
		</ButtonTactile>
	</svelte:fragment>
</Parts>
<ButtonTactile
	on:click={() => {
		dispatch('keeper');
	}}
>
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
