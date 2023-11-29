<script lang="ts">
	import { T } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import { createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import glb_stethoscope from '../../../../assets/routes/building/02-pharmacy/lib/stethoscope/stethoscope.glb?url';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientInteractivity } from '../../../../lib/3d/canvas/useAmbientInteractivity';
	import Fog from '../../../../lib/3d/environment/Fog.svelte';
	import BobbleSkullTactile from '../../../../lib/3d/tactile/BobbleSkullTactile.svelte';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';
	import Peek from '../../lib/peek/Peek.svelte';

	useAmbientInteractivity();

	const dispatch = createEventDispatcher();
</script>

<Peek>
	<EphemeralCamera
		ref={new THREE.PerspectiveCamera(50)}
		makeDefault
		position={[0, 0, 10]}
	/>
</Peek>
<Fog
	near={0}
	far={20}
/>
{#each { length: 4 } as _, i}
	<T.Mesh
		position={[-10, i, 0]}
		scale={[10, 0.1, 1]}
	>
		<T.BoxGeometry />
		<T.MeshPhysicalMaterial color={new THREE.Color(0xeeeeee)} />
	</T.Mesh>
{/each}
{#each { length: 4 } as _, i}
	<T.Mesh
		position={[10, i, 0]}
		scale={[10, 0.1, 1]}
	>
		<T.BoxGeometry />
		<T.MeshPhysicalMaterial color={new THREE.Color(0xeeeeee)} />
	</T.Mesh>
{/each}
<T.Mesh
	position={[0, -1, 4]}
	scale={[18, 0.1, 4]}
>
	<T.BoxGeometry />
	<T.MeshPhysicalMaterial
		color={new THREE.Color(0xaaaaaa)}
		transmission={1}
		roughness={0}
		thickness={0.5}
	/>
</T.Mesh>
<T.Mesh
	position={[0, -11, 5.5]}
	scale={[18, 20, 0.1]}
>
	<T.BoxGeometry />
	<T.MeshPhysicalMaterial color={new THREE.Color(0xdddddd)} />
</T.Mesh>
<T.Mesh
	position={[0, -0.95, 4]}
	scale={[1, 0.1, 1]}
>
	<T.BoxGeometry />
	<T.MeshPhysicalMaterial color={new THREE.Color(0xaaaaaa)} />
</T.Mesh>
<ButtonTactile
	on:click={() => {
		dispatch('pharmacist');
	}}
>
	<BobbleSkullTactile name="Mr. Pharmacist">
		<GLTF
			url={glb_stethoscope}
			useDraco={true}
			scale={[0.1, 0.1, 0.1]}
			position={[0.4, -1, 0]}
			rotation={[degToRad(80), degToRad(-120), degToRad(40)]}
		/>
	</BobbleSkullTactile>
</ButtonTactile>
