<script lang="ts">
	import * as THREE from 'three';
	import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
	import exr_hdri from '../../../assets/village/hdri/dikhololo_night_2k.exr?url';
	import { useLoader, useThrelte } from '@threlte/core';
	import { onDestroy, onMount } from 'svelte';

	const { scene, renderer } = useThrelte();
	const exrLoader = useLoader(EXRLoader);
	const initialEnvironment = scene.environment;
	const initialBackground = scene.background;
	const initialToneMappingExposure = renderer.toneMappingExposure;

	onMount(async () => {
		const hdri = await exrLoader.load(exr_hdri);
		hdri.mapping = THREE.EquirectangularReflectionMapping;

		scene.environment = hdri;
		scene.background = hdri;
		// renderer.toneMappingExposure = 0.3;
	});

	onDestroy(() => {
		scene.environment = initialEnvironment;
		scene.background = initialBackground;
		renderer.toneMappingExposure = initialToneMappingExposure;
	});
</script>
