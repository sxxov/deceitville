<script lang="ts">
	import {
		Composition,
		Timeline,
		Tween,
		type TimelineSegment,
	} from '@sxxov/ut/animation';
	import { bezierQuintIn, bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { clamp01, lerp, map01 } from '@sxxov/ut/math';
	import { inner } from '@sxxov/ut/viewport';
	import { useFrame, useLoader, useRender, useThrelte } from '@threlte/core';
	import { onDestroy, onMount } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import {
		fence_1,
		lader,
		mushroom_1,
		pointer_2,
		pumpkin,
		tree_2,
	} from '../../../assets/village/parts/gltfs.db';
	import {
		c,
		d,
		e,
		e_x1,
		e_x2,
		i,
		i_x1,
		l,
		l_x1,
		t,
		v,
	} from '../../../assets/village/text/gltfs.db';
	// import { MeshTransmissionMaterial } from '@pmndrs/vanilla';
	import { EXRLoader } from 'three-stdlib';
	import exr_hdri from '../../../assets/common/3d/hdri/dancing_hall_256.exr?url';
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
	const z = -2;
	const textKeyframesOverlap = 0.5;
	const textKeyframeFactories = [
		...Array(4)
			.fill(0)
			.map((_, i, { length }) => (t: number) => {
				const n = i;
				const v = clamp01(
					map01(
						t,
						n / length + -(textKeyframesOverlap * n) / length,
						(n + 1) / length,
					),
				);

				return {
					position: [0, 0, -(1 - v) + 1],
					rotation: [90 * v, 0, 90 * v * (n % 2 > 0 ? 1 : -1)],
					scale: [1, 1, 1],
				} as const;
			}),
		(v: number) =>
			({
				position: [0, 0, v * -2],
				rotation: [0, 0, 0],
				scale: [1, 1, 1],
			}) as const,
		...Array(6)
			.fill(0)
			.map((_, i, { length }) => (t: number) => {
				const n = length - 1 - i;
				const v = clamp01(
					map01(
						t,
						n / length + -(textKeyframesOverlap * n) / length,
						(n + 1) / length,
					),
				);

				return {
					position: [0, 0, -(1 - v) + 1],
					rotation: [-90 * v, 0, 90 * v * (n % 2 > 0 ? 1 : -1)],
					scale: [1, 1, 1],
				} as const;
			}),
	] as const;

	// setup refs
	let refs: THREE.Mesh[] | undefined;
	let positions: THREE.Vector3[] | undefined;
	$: scale = ($inner.width * 0.25) / 100;

	const intro = progress <= 0;
	$: introing = Boolean(intro && refs);
	$: if (introing) void introComposition?.play();
	let introTweens: Tween[] | undefined;
	let introComposition: Composition | undefined;
	let introUnsubscribes: (() => void)[] | undefined;
	onMount(async () => {
		refs = await Promise.all(
			[d, e_x2, c, e_x1, i_x1, t, v, i, l_x1, l, e].map(async (gltf) => {
				const { object } = await createPart(gltf);

				return object! as THREE.Mesh;
			}),
		);

		for (const ref of refs) {
			ref.position.z = z;

			ref.material = new THREE.MeshStandardMaterial({
				color: new THREE.Color(0xffffff),
				// depthWrite: false,
				// depthTest: false,
				// transparent: false,
				emissive: new THREE.Color(0xffffff),
				emissiveIntensity: 100,
			});

			scene.attach(ref);
		}

		positions = refs.map((ref) => ref.position.clone());

		if (intro) {
			introTweens = refs.map(() => new Tween(0, 1, 1000));
			introComposition = new Composition(
				new Timeline(
					introTweens.map((x, i) => ({
						x,
						at: { time: i * 100 },
					})) as readonly TimelineSegment[],
				),
			);
			introUnsubscribes = introTweens.map((tween, i) => {
				const ref = refs![i]!;

				ref.visible = false;
				return tween.subscribeLazy((t) => {
					ref.visible = true;

					ref.position.y =
						positions![i]!.y +
						(1 - bezierQuintOut.at(clamp01(t))) * 2;
					ref.rotation.z = degToRad(
						lerp(bezierQuintOut.at(clamp01(t)), 90, 0),
					);
					ref.rotation.x = degToRad(
						lerp(bezierQuintOut.at(clamp01(t)), 0, 90),
					);

					invalidate();
				});
			});
		} else {
			for (const [i, ref] of refs.entries()) {
				ref.visible = true;

				ref.position.y = positions[i]!.y;
				ref.rotation.z = 0;
				ref.rotation.x = 0;
			}
		}
	});

	// animate on progress change
	$: {
		camera.fov = lerp(progress, 100, 180);
		camera.position.z = lerp(progress, 0, -2);
		// camera.updateProjectionMatrix();
		// camera = camera;

		if (refs)
			for (let i = 0; i < refs.length; i++) {
				const ref = refs[i]!;
				const position = positions![i]!;
				const {
					position: toPosition,
					rotation: toRotation,
					scale: toScale,
				} = textKeyframeFactories[i]!(progress);

				ref.position.set(
					position.x + toPosition[0],
					position.y + toPosition[1],
					position.z + toPosition[2],
				);
				ref.rotation.set(
					degToRad(toRotation[0] + 90),
					degToRad(toRotation[1]),
					degToRad(toRotation[2]),
				);
				ref.scale.set(
					toScale[0] * scale,
					toScale[1] * scale,
					toScale[2] * scale,
				);
			}

		invalidate();
	}

	// environment
	const exrLoader = useLoader(EXRLoader);
	onMount(async () => {
		const hdri = await exrLoader.load(exr_hdri);
		hdri.mapping = THREE.EquirectangularReflectionMapping;

		scene.environment = hdri;
		// scene.background = hdri;
		renderer.toneMappingExposure = 0.01;
	});

	// pointer model
	const pointerZ = z + 0.1;
	$: pointerScreenSpaceSize = getScreenSpaceSizeAtWorldZ(camera, pointerZ);
	$: pointerWorldPoint = getScreenSpacePointOnPlane(
		$inner,
		$pointer.x === 0 && $pointer.y === 0
			? {
					x: $inner.width / 2,
					y: $inner.height / 2,
			  }
			: $pointer,
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
		if (pointerMesh instanceof THREE.Mesh) {
			pointerMesh.material = new THREE.MeshPhysicalMaterial({
				roughness: 0,
				thickness: 0.5,
				transmission: 1,
			});
		}

		scene.add(pointerMesh!);
	};
	void pointerPickGltf();
	$: pointerMesh?.position.set(
		pointerWorldPoint.x,
		pointerWorldPoint.y,
		z + 0.1 + camera.position.z,
	);
	useFrame(() => {
		if (pointerMesh) {
			pointerMesh.rotation.z += 0.01;
			pointerMesh.rotation.y += 0.005;
		}
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
		if (refs) scene.remove(...refs);
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

			color: var(----colour-text-primary);
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

				color: var(----colour-text-primary);
				text-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);
			}
		}
	}
</style>
