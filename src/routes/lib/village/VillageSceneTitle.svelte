<script lang="ts">
	import { Composition, Tween } from '@sxxov/ut/animation';
	import { bezierQuintIn, bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { clamp01, lerp, map01 } from '@sxxov/ut/math';
	import { inner } from '@sxxov/ut/viewport';
	import { useFrame, useLoader, useRender, useThrelte } from '@threlte/core';
	import { onDestroy, onMount } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import {
		Text,
		preloadFont,
		type TroikaTextRenderInfo,
	} from 'troika-three-text';
	import ttf_bigelow_rules from '../../../assets/village/BigelowRules-Regular.ttf?url';
	import fence_1 from '../../../assets/village/parts/fence-1';
	import lader from '../../../assets/village/parts/lader';
	import mushroom_1 from '../../../assets/village/parts/mushroom-1';
	import pointer_2 from '../../../assets/village/parts/pointer-2';
	import pumpkin from '../../../assets/village/parts/pumpkin';
	import tree_2 from '../../../assets/village/parts/tree-2';
	// import { MeshTransmissionMaterial } from '@pmndrs/vanilla';
	import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
	import exr_hdri from '../../../assets/village/hdri/dikhololo_night_2k.exr?url';
	import { createPart } from '../../../lib/3d/gltf/part';
	import { getScreenSpacePointOnPlane } from '../../../lib/3d/lmth/getScreenSpacePointOnPlane';
	import { getScreenSpaceSizeAtWorldZ } from '../../../lib/3d/lmth/getScreenSpaceSizeAtWorldZ';
	import { pointer } from '../../../lib/follow/pointer';

	export let progress = 0;

	const { renderer, invalidate } = useThrelte();
	let parentRendererSize = new THREE.Vector2();

	// setup scene
	const scene = new THREE.Scene();
	let camera = new THREE.PerspectiveCamera(100, 1, 0.00001, 10000);
	camera.position.set(0, 0, 10);
	camera.lookAt(0, 0, 0);

	// text variables
	const font = ttf_bigelow_rules;
	const z = -2;
	const text = 'Deceitville';
	const textKerning = [
		0, -0.007, -0.012, 0.012, -0.022, -0.032, 0.016, -0.012, -0.006, -0.028,
		0,
	] as const;
	const textKeyframes = [
		...Array(4)
			.fill(0)
			.map((_, i, { length }) => 1 - (i + 0) / (length - 1))
			.map(
				(v, i) =>
					({
						position: [0, 0, -(1 - v) * 2 + 1],
						rotation: [0, 90 * v, 90 * v * (i % 2 > 0 ? 1 : -1)],
						scale: [1, 1, 1],
					}) as const,
			),
		{
			position: [0, 0, -2],
			rotation: [0, 0, 0],
			scale: [1, 1, 1],
		} as const,
		...Array(6)
			.fill(0)
			.map((_, i, { length }) => (i + 0) / (length - 1))
			.map(
				(v, i) =>
					({
						position: [0, 0, -(1 - v) * 2 + 1],
						rotation: [0, -90 * v, 90 * v * (i % 2 > 0 ? 1 : -1)],
						scale: [1, 1, 1],
					}) as const,
			),
	] as const;
	const charset = new Set(text.split(''));

	// setup refs
	const refs: Text[] = text.split('').map((char) => {
		const ref = new Text();
		ref.font = font;
		ref.text = char;
		ref.color = 0xffffff;
		ref.letterSpacing = -0.05;

		return ref;
	});
	for (const ref of refs)
		ref.material = new THREE.MeshStandardMaterial({
			color: new THREE.Color(0xffffff),
			depthWrite: false,
			depthTest: false,
			// transparent: false,
			emissive: new THREE.Color(0xffffff),
			emissiveIntensity: 1,
		});
	$: for (const ref of refs) ref.fontSize = ($inner.width * 0.25) / 100;

	let refsBboxes: THREE.Box3[] = [];
	let refsSizes: THREE.Vector3[] = [];
	let refsWidthUnkerned = 0;
	let refsWidth = 0;
	let refsPositions: THREE.Vector3[] = [];
	let refsKerningWidth = 0;
	let refReady = false;
	$: {
		$inner.width;

		void Promise.allSettled(
			refs.map(
				async (ref) =>
					new Promise<void>((resolve) => {
						ref.sync(() => void resolve());
					}),
			),
		).then(() => {
			refsBboxes = refs.map((ref) => {
				const [xmin, ymin, xmax, ymax] = ref.textRenderInfo.blockBounds;

				return new THREE.Box3(
					new THREE.Vector3(xmin, ymin, 0),
					new THREE.Vector3(xmax, ymax, 0),
				);
			});
			refsSizes = refsBboxes.map((bbox) =>
				bbox.getSize(new THREE.Vector3()),
			);
			refsWidthUnkerned = refsSizes.reduce((acc, { x }) => {
				return acc + x;
			}, 0);
			refsKerningWidth = textKerning.reduce<number>(
				(acc, v) => acc + v * refsWidthUnkerned,
				0,
			);

			// console.log(refsWidth, refsBboxes, refsSizes);
			// const refsHeight = Math.max(...refsSizes.map(({ y }) => y));
			refsPositions = [];
			let cumX = 0;
			for (let i = 0; i < refs.length; i++) {
				const ref = refs[i]!;
				const size = refsSizes[i]!;
				const kerning = textKerning[i]!;
				const { letterSpacing } = ref;

				refsPositions.push(
					new THREE.Vector3(cumX + size.x / 2, size.y / 2, z),
				);
				cumX += size.x + kerning * refsWidthUnkerned + letterSpacing;
			}

			refsWidth = cumX;

			for (const pos of refsPositions)
				pos.x -= refsWidth / 2 - refsKerningWidth / 2;

			refReady = true;
		});
	}
	$: if (refsPositions.length === refs.length && !introing)
		for (let i = 0; i < refs.length; i++) {
			const ref = refs[i]!;

			ref.position.copy(refsPositions[i]!);

			invalidate();
		}
	for (const ref of refs) scene.add(ref);

	const intro = progress <= 0;
	$: introing = intro && refReady;
	$: if (introing) void introComposition!.play();
	const introTweens = intro
		? refs.map(() => new Tween(0, 1, 1000))
		: undefined;
	const introComposition = intro
		? new Composition(
				refs.map((ref, i) => ({
					tween: introTweens![i]!,
					delay: i * 100,
				})),
		  )
		: undefined;
	const introUnsubscribes = intro
		? refs.map((ref, i) => {
				const tween = introTweens![i]!;

				ref.visible = false;
				return tween.subscribeLazy((t) => {
					ref.visible = true;
					ref.position.y =
						refsPositions[i]!.y +
						(1 - bezierQuintOut.at(clamp01(t))) * 2;
					ref.rotation.x = degToRad(
						lerp(bezierQuintOut.at(clamp01(t)), -90, 0),
					);
					ref.sync();

					invalidate();
				});
		  })
		: undefined;

	// animate on progress change
	$: {
		camera.fov = lerp(progress, 100, 180);
		camera.position.z = lerp(progress, 0, -2);
		camera.updateProjectionMatrix();
		camera = camera;

		if (refsPositions.length > 0)
			for (let i = 0; i < refs.length; i++) {
				const ref = refs[i]!;
				const positionInit = refsPositions[i]!;
				const { position, rotation, scale } = textKeyframes[i]!;

				ref.position.set(
					positionInit.x + lerp(progress, 0, position[0]),
					positionInit.y + lerp(progress, 0, position[1]),
					positionInit.z + lerp(progress, 0, position[2]),
				);
				ref.rotation.set(
					degToRad(lerp(progress, 0, rotation[0])),
					degToRad(lerp(progress, 0, rotation[1])),
					degToRad(lerp(progress, 0, rotation[2])),
				);
				ref.scale.set(
					lerp(progress, 1, scale[0]),
					lerp(progress, 1, scale[1]),
					lerp(progress, 1, scale[2]),
				);
			}

		invalidate();
	}

	// preload font
	onMount(async () => {
		await new Promise<TroikaTextRenderInfo>((resolve) => {
			preloadFont(
				{
					font,
					characters: [...charset],
					sdfGlyphSize: 64,
				},
				(v) => {
					resolve(v);
				},
			);
		});
	});

	// environment
	const exrLoader = useLoader(EXRLoader);
	onMount(async () => {
		const hdri = await exrLoader.load(exr_hdri);
		hdri.mapping = THREE.EquirectangularReflectionMapping;

		scene.environment = hdri;
		// scene.background = hdri;
		renderer.toneMappingExposure = 3;
	});

	// pointer model
	const pointerZ = z + 0.1;
	$: pointerScreenSpaceSize = getScreenSpaceSizeAtWorldZ(camera, pointerZ);
	$: pointerWorldPoint = getScreenSpacePointOnPlane(
		$inner,
		$pointer,
		pointerScreenSpaceSize,
	);
	let pointerMesh: THREE.Object3D | undefined;
	const pointerPickableGltfs = [
		pointer_2,
		pumpkin,
		mushroom_1,
		lader,
		tree_2,
		fence_1,
	] as const;
	let pointerPickI = 0;
	const pointerPickGltf = async () => {
		// if (pointerMesh) scene.remove(pointerMesh);
		const i = pointerPickI++ % pointerPickableGltfs.length;
		({ object: pointerMesh } = await createPart(pointerPickableGltfs[i]!));
		// pointerMesh.material = new THREE.MeshPhysicalMaterial({
		// 	emissive: new THREE.Color(0xff0000),
		// });

		scene.add(pointerMesh!);
	};
	void pointerPickGltf();
	$: pointerMesh?.position.set(
		pointerWorldPoint.x,
		pointerWorldPoint.y,
		z + 0.1 + camera.position.z,
	);
	useFrame(() => {
		if (pointerMesh) pointerMesh.rotation.z += 0.01;
	});

	useFrame(() => {
		renderer.getSize(parentRendererSize);

		camera.aspect = parentRendererSize.x / parentRendererSize.y;
		camera.updateProjectionMatrix();
	});

	useRender(() => {
		// renderer.clearDepth();
		renderer.render(scene, camera);
	});

	onDestroy(() => {
		introing = false;
		if (introUnsubscribes)
			for (const unsubscribe of introUnsubscribes) unsubscribe();
		scene.remove(...refs);
		for (const ref of refs) ref.dispose();
	});
</script>

<div
	class="title"
	role="presentation"
	on:click={() => {
		void pointerPickGltf();
	}}
	on:keydown={(e) => {
		if (e.key === ' ') void pointerPickGltf();
	}}
>
	<h6
		style="
			transform: translate(0, {bezierQuintIn.at(map01(1 - progress, 1, 0)) * 30}px);
			opacity: {bezierQuintIn.at(map01(progress, 1, 0.8))}
		"
	>
		Welcome to
	</h6>
	<!-- <div class="instructions">
		<p>Press</p>
		<kbd
			><div class="icon"><Svg svg={ic_space_bar} /></div>
			Space</kbd
		>
		<p>to enter your name.</p>
	</div> -->
</div>

<style lang="postcss">
	.title {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;

		display: grid;
		place-items: center;

		z-index: 1;

		cursor: crosshair;

		& > h6 {
			font-size: 1rem;
			margin: 0;
			font-weight: 900;
			text-transform: uppercase;

			color: white;
			text-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);

			align-self: start;

			padding-top: 84px;
		}

		& > .instructions {
			display: flex;
			flex-direction: column;
			gap: 7px;

			align-self: end;
			margin-bottom: 224px;

			background: var(----colour-background-primary);
			padding: 14px;
			box-sizing: border-box;
			border-radius: var(----roundness);
			border: 1px solid var(----colour-background-secondary);

			/* transform: translate(-3vw, -8vw); */

			& > kbd {
				font-family: var(----font-family-mono);
				text-transform: uppercase;
				font-size: 0.75rem;
				display: flex;
				gap: 7px;
				align-items: center;
				text-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);

				& > .icon {
					background: var(----colour-background-secondary);
					border-radius: var(----roundness);
					border: 1px solid var(----colour-background-tertiary);
				}
			}

			& > p {
				font-size: 0.75rem;
				margin: 0;
				font-weight: 900;
				text-transform: uppercase;

				color: white;
				text-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);
			}
		}
	}
</style>
