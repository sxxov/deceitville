<script lang="ts">
	import { mounted } from '@sxxov/sv/ut/stores';
	import { Composition as C, Tween as Tw } from '@sxxov/ut/animation';
	import { bezierQuintInOut, bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { lerp } from '@sxxov/ut/math';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { Box, Flex } from '@threlte/flex';
	import { createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import { gltfs } from '../../../../assets/routes/building/01-pet-shop/lib/pets/parts';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientInteractivity } from '../../../../lib/3d/canvas/useAmbientInteractivity';
	import { useAmbientRendererSize } from '../../../../lib/3d/canvas/useAmbientRendererSize';
	import { useOutline } from '../../../../lib/3d/environment/useOutline';
	import { getScreenSpaceSizeAtWorldZ } from '../../../../lib/3d/lmth/getScreenSpaceSizeAtWorldZ';
	import Part from '../../../../lib/3d/part/Part.svelte';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';
	import { Pet } from './Pet';

	useAmbientInteractivity();

	const dispatch = createEventDispatcher();

	export let selected: Pet | 0 = 0;
	export let chosen: Pet | 0 = 0;
	$: dispatch('select', selected);

	const outline = useOutline();

	const rendererSize = useAmbientRendererSize();
	$: ({ width: vw, height: vh } = $rendererSize ?? { width: 0, height: 0 });

	type PositionArray = [x: number, y: number, z: number];

	const select = (pet: Pet) => {
		if (selected && selected & pet) selected = 0;
		else selected = pet;
	};

	let catItemPart: THREE.Object3D;
	let rockItemPart: THREE.Object3D;
	let duckItemPart: THREE.Object3D;

	const catItemWorld = new THREE.Vector3();
	let [catItemWorldX, catItemWorldY] = [0, 0];
	const rockItemWorld = new THREE.Vector3();
	let [rockItemWorldX, rockItemWorldY] = [0, 0];
	const duckItemWorld = new THREE.Vector3();
	let [duckItemWorldX, duckItemWorldY] = [0, 0];
	useFrame(() => {
		if (catItemPart && rockItemPart && duckItemPart) {
			catItemPart.getWorldPosition(catItemWorld);
			if (catItemWorldX !== catItemWorld.x)
				catItemWorldX = catItemWorld.x;
			if (catItemWorldY !== catItemWorld.y)
				catItemWorldY = catItemWorld.y;
			rockItemPart.getWorldPosition(rockItemWorld);
			if (rockItemWorldX !== rockItemWorld.x)
				rockItemWorldX = rockItemWorld.x;
			if (rockItemWorldY !== rockItemWorld.y)
				rockItemWorldY = rockItemWorld.y;
			duckItemPart.getWorldPosition(duckItemWorld);
			if (duckItemWorldX !== duckItemWorld.x)
				duckItemWorldX = duckItemWorld.x;
			if (duckItemWorldY !== duckItemWorld.y)
				duckItemWorldY = duckItemWorld.y;
		}
	});

	const { camera } = useThrelte();
	const worldZ = 10;
	$: cameraPositionNext = (selected
		? [
				aspect > 1
					? selected & Pet.CAT
						? catItemWorldX
						: selected & Pet.ROCK
						? rockItemWorldX
						: selected & Pet.DUCK
						? duckItemWorldX
						: 0
					: 0,
				aspect <= 1
					? selected & Pet.CAT
						? catItemWorldY
						: selected & Pet.ROCK
						? rockItemWorldY
						: selected & Pet.DUCK
						? duckItemWorldY
						: 0
					: 0,
				5,
		  ]
		: [0, 0, worldZ]) satisfies PositionArray as PositionArray;
	let cameraPositionX: Tw | undefined;
	let cameraPositionY: Tw | undefined;
	let cameraPositionZ: Tw | undefined;
	$: cameraPositionCurr = [
		$cameraPositionX ?? 0,
		$cameraPositionY ?? 0,
		$cameraPositionZ ?? worldZ,
	] satisfies PositionArray as PositionArray;

	let outlineless = false;
	$: if (outlineless || chosen) outline.clear();
	const updateCameraTweens = () => {
		cameraPositionX?.pause();
		cameraPositionY?.pause();
		cameraPositionZ?.pause();

		outlineless = true;

		cameraPositionX = new Tw(
			cameraPositionCurr[0],
			cameraPositionNext[0],
			1000,
			bezierQuintOut,
		);
		cameraPositionY = new Tw(
			cameraPositionCurr[1],
			cameraPositionNext[1],
			1000,
			bezierQuintOut,
		);
		cameraPositionZ = new Tw(
			cameraPositionCurr[2],
			cameraPositionNext[2],
			1000,
			bezierQuintOut,
		);

		outline.clear();

		void Promise.all([
			cameraPositionX.play(),
			cameraPositionY.play(),
			cameraPositionZ.play(),
		]).then(() => {
			outlineless = false;
		});
	};
	$: {
		cameraPositionNext;

		updateCameraTweens();
	}

	let [width, height] = [0, 0];
	$: [contentWidth, contentHeight] = [
		width - 0.25 * width,
		height - 0.25 * height,
	];
	useFrame(() => {
		({ width, height } = getScreenSpaceSizeAtWorldZ(
			$camera as THREE.PerspectiveCamera,
			worldZ,
		));
	});

	$: aspect = contentWidth / contentHeight;
	$: [uw, uh] = [contentWidth / vw, contentHeight / vh];

	$: objectIntroStart = aspect > 1 ? 12 : -12;
	const objectIntroEnd = -1;

	const catBaseIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const catGlassIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const catItemIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	$: catIntroComposition = new C()
		.add(catBaseIntroTween, { time: aspect > 1 ? 0 : 300 })
		.add(catGlassIntroTween, { time: aspect > 1 ? 300 : 0 })
		.add(catItemIntroTween, { time: aspect > 1 ? 300 : 0 });
	let catRotation = 0;
	const duckBaseIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const duckGlassIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const duckItemIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	$: duckIntroComposition = new C()
		.add(duckBaseIntroTween, { time: aspect > 1 ? 0 : 300 })
		.add(duckGlassIntroTween, { time: aspect > 1 ? 300 : 0 })
		.add(duckItemIntroTween, { time: aspect > 1 ? 300 : 0 });
	let duckRotation = 0;
	const rockBaseIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const rockGlassIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const rockItemIntroTween = new Tw(0, 1, 1000, bezierQuintInOut);
	$: rockIntroComposition = new C()
		.add(rockBaseIntroTween, { time: aspect > 1 ? 0 : 300 })
		.add(rockGlassIntroTween, { time: aspect > 1 ? 300 : 0 })
		.add(rockItemIntroTween, { time: aspect > 1 ? 300 : 0 });
	let rockRotation = 0;

	$: introComposition = new C()
		.add(catIntroComposition, { time: 0 })
		.add(rockIntroComposition, { time: 500 })
		.add(duckIntroComposition, { time: 1000 });

	let currIntroComposition: C | undefined;
	$: if ($mounted) {
		currIntroComposition?.stop();
		currIntroComposition = introComposition;
		void introComposition.play();
	}

	useFrame(() => {
		catRotation += 0.01;
		duckRotation += 0.01;
		rockRotation += 0.01;
	});

	const chosenStart = 0;
	const chosenEnd = 2.4;
	let buttonDisabled = false;
	const chosenGlassTween = new Tw(0, 1, 2000, bezierQuintInOut);
	const chosenRestTween = new Tw(0, 1, 1000, bezierQuintInOut);
	const chosenLightTween = new Tw(0, 100, 3000, bezierQuintInOut);
	const chosenComposition = new C()
		.add(chosenGlassTween, { time: 0 })
		.add(chosenRestTween, { time: 0 })
		.add(chosenLightTween, { time: 0 });
	$: if (chosen) {
		buttonDisabled = true;
		void chosenComposition.play().then(() => {
			dispatch('chosen', chosen);
		});
	} else {
		chosenComposition.stop();
		buttonDisabled = false;
	}
</script>

<EphemeralCamera
	ref={new THREE.PerspectiveCamera(50)}
	makeDefault
	position={cameraPositionCurr}
/>
<Flex
	width={contentWidth}
	height={contentHeight}
	flexDirection={aspect > 1 ? 'Row' : 'Column'}
	justifyContent="Center"
	alignItems="Center"
>
	{#if 1}
		{@const pet = Pet.CAT}
		<Box
			flex={1}
			width={100 * uw}
			height={300 * uh}
			justifyContent="Center"
			alignItems="Center"
		>
			<Box
				width="auto"
				height="auto"
			>
				<ButtonTactile
					{outlineless}
					disabled={buttonDisabled}
					on:click={() => {
						select(pet);
					}}
				>
					<T.Group
						position.y={lerp(
							$catBaseIntroTween,
							objectIntroStart,
							objectIntroEnd,
						)}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							gltf={gltfs.cat_base}
							position.x={0}
						/>
					</T.Group>
					<T.Group
						position.y={lerp(
							$catGlassIntroTween,
							objectIntroStart,
							objectIntroEnd,
						) +
							(chosen & pet
								? lerp(
										$chosenGlassTween,
										chosenStart,
										chosenEnd,
								  )
								: 0)}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							gltf={gltfs.cat_glass}
							position.x={0}
						/>
					</T.Group>
					<T.Group
						position.y={lerp(
							$catItemIntroTween,
							objectIntroStart,
							objectIntroEnd,
						)}
						rotation.y={catRotation}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							bind:ref={catItemPart}
							gltf={gltfs.cat_item}
							position.x={0}
						>
							<T.PointLight
								position={[0, 1, 0]}
								intensity={chosen & pet ? $chosenLightTween : 0}
								color={new THREE.Color(0xffffff)}
								distance={3}
							/>
						</Part>
					</T.Group>
				</ButtonTactile>
			</Box>
		</Box>
	{/if}

	{#if 1}
		{@const pet = Pet.ROCK}
		<Box
			flex={1}
			width={100 * uw}
			justifyContent="Center"
			alignItems="Center"
		>
			<Box
				width="auto"
				height="auto"
			>
				<ButtonTactile
					{outlineless}
					disabled={buttonDisabled}
					on:click={() => {
						select(pet);
					}}
				>
					<T.Group
						position.y={lerp(
							$rockBaseIntroTween,
							objectIntroStart,
							objectIntroEnd,
						)}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							gltf={gltfs.rock_base}
							position.x={0}
						/>
					</T.Group>
					<T.Group
						position.y={lerp(
							$rockGlassIntroTween,
							objectIntroStart,
							objectIntroEnd,
						) +
							(chosen & pet
								? lerp(
										$chosenGlassTween,
										chosenStart,
										chosenEnd,
								  )
								: 0)}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							gltf={gltfs.rock_glass}
							position.x={0}
						/>
					</T.Group>
					<T.Group
						position.y={lerp(
							$rockItemIntroTween,
							objectIntroStart,
							objectIntroEnd,
						)}
						rotation.y={rockRotation}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							bind:ref={rockItemPart}
							gltf={gltfs.rock_item}
							position.x={0}
						>
							<T.PointLight
								position={[0, 1, 0]}
								intensity={chosen & pet ? $chosenLightTween : 0}
								color={new THREE.Color(0xffffff)}
								distance={3}
							/>
						</Part>
					</T.Group>
				</ButtonTactile>
			</Box>
		</Box>
	{/if}

	{#if 1}
		{@const pet = Pet.DUCK}
		<Box
			flex={1}
			width={100 * uw}
			justifyContent="Center"
			alignItems="Center"
		>
			<Box
				width="auto"
				height="auto"
			>
				<ButtonTactile
					{outlineless}
					disabled={buttonDisabled}
					on:click={() => {
						select(pet);
					}}
				>
					<T.Group
						position.y={lerp(
							$duckBaseIntroTween,
							objectIntroStart,
							objectIntroEnd,
						)}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							gltf={gltfs.duck_base}
							position.x={0}
						/>
					</T.Group>
					<T.Group
						position.y={lerp(
							$duckGlassIntroTween,
							objectIntroStart,
							objectIntroEnd,
						) +
							(chosen & pet
								? lerp(
										$chosenGlassTween,
										chosenStart,
										chosenEnd,
								  )
								: 0)}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							gltf={gltfs.duck_glass}
							position.x={0}
						/>
					</T.Group>
					<T.Group
						position.y={lerp(
							$duckItemIntroTween,
							objectIntroStart,
							objectIntroEnd,
						)}
						rotation.y={duckRotation}
						scale={1 + (chosen & pet ? 0 : -$chosenRestTween)}
					>
						<Part
							bind:ref={duckItemPart}
							gltf={gltfs.duck_item}
							position.x={0}
						>
							<T.PointLight
								position={[0, 1, 0]}
								intensity={chosen & pet ? $chosenLightTween : 0}
								color={new THREE.Color(0xffffff)}
								distance={3}
							/>
						</Part>
					</T.Group>
				</ButtonTactile>
			</Box>
		</Box>
	{/if}
</Flex>
