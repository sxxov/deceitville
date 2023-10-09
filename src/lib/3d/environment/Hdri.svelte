<script lang="ts">
	import * as THREE from 'three';
	import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
	import { useLoader, useThrelte } from '@threlte/core';
	import { onDestroy, onMount } from 'svelte';

	export let exposure = 1;
	export let exr: string;

	const { scene, renderer } = useThrelte();
	const exrLoader = useLoader(EXRLoader);
	const initialEnvironment = scene.environment;
	const initialToneMappingExposure = renderer.toneMappingExposure;

	onMount(async () => {
		const hdri = await exrLoader.load(exr);
		hdri.mapping = THREE.EquirectangularReflectionMapping;

		scene.environment = hdri;
		renderer.toneMappingExposure = exposure;
	});

	onDestroy(() => {
		scene.environment = initialEnvironment;
		renderer.toneMappingExposure = initialToneMappingExposure;
	});
</script>
