<script
	lang="ts"
	context="module"
>
</script>

<script lang="ts">
	import src_pace from 'pace-js?url';
	import img_favi from '../assets/common/favi/favicon.png?png&imagetools';
	import ic_favi from '../assets/common/favi/favicon.svg?url';
	import src_webmanifest from '../assets/common/favi/site.webmanifest?url';
	import '../app.pcss';
	import Nav from '../lib/nav/Nav.svelte';
	import { Toaster } from '@sxxov/sv/toast';
	// import Footer from '../lib/footer/Footer.svelte';
	import { client } from '@sxxov/ut/viewport';
	import * as THREE from 'three';
	import AmbientCanvas from '../lib/3d/canvas/AmbientCanvas.svelte';
	import { useLenis } from '../lib/lenis/useLenis';

	useLenis();
</script>

<svelte:head>
	<meta charset="utf-8" />

	<script src={src_pace}></script>

	<!-- Icon Tags -->
	<link
		rel="icon"
		type="image/svg+xml"
		href={ic_favi}
	/>
	<link
		rel="icon"
		type="image/png"
		href={img_favi}
	/>
	<link
		rel="manifest"
		href={src_webmanifest}
	/>

	<!-- Viewport Tag to prevent jank -->
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1"
	/>
</svelte:head>

<main>
	<Toaster />
	<!-- <Nav /> -->

	<AmbientCanvas
		size={$client}
		shadows={THREE.PCFSoftShadowMap}
		useLegacyLights={false}
		toneMapping={THREE.ACESFilmicToneMapping}
		rendererParameters={{
			antialias: true,
			alpha: true,
			premultipliedAlpha: false,
		}}
	>
		<slot />
	</AmbientCanvas>
	<!-- <Footer /> -->
</main>

<style lang="postcss">
	main {
		min-height: 100vh;
		min-height: 100lvh;
		width: inherit;
	}
</style>
