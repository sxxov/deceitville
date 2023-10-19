<script lang="ts">
	import { mounted } from '@sxxov/sv/ut/stores';
	import { Composition as C, Tween as Tw } from '@sxxov/ut/animation';
	import { bezierQuintInOut } from '@sxxov/ut/bezier/beziers';
	import { lerp } from '@sxxov/ut/math';
	import { traversePropertyElements } from '@sxxov/ut/traverse';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { useInteractivity } from '@threlte/extras';
	import { Box, Flex } from '@threlte/flex';
	import * as THREE from 'three';
	import { gltfs } from '../../../../assets/building/pet-shop/index';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientRendererSize } from '../../../../lib/3d/canvas/useAmbientRendererSize';
	import { usePostProcessing } from '../../../../lib/3d/environment/usePostProcessing';
	import { getScreenSpaceSizeAtWorldZ } from '../../../../lib/3d/lmth/getScreenSpaceSizeAtWorldZ';
	import Part from '../../../../lib/3d/part/Part.svelte';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';

	useInteractivity().enabled.set(true);
	const { effectMap } = usePostProcessing() ?? {};
	$: ({ outline } = $effectMap ?? {});

	const rendererSize = useAmbientRendererSize();
	$: ({ width: vw, height: vh } = $rendererSize ?? { width: 0, height: 0 });

	const { camera } = useThrelte();
	const cameraZ = 10;

	let width = 0;
	let height = 0;
	useFrame(() => {
		({ width, height } = getScreenSpaceSizeAtWorldZ(
			$camera as THREE.PerspectiveCamera,
			cameraZ,
		));
	});

	$: aspect = width / height;
	$: [uw, uh] = [width / vw, height / vh];

	$: objectIntroStart = aspect > 1 ? 12 : -12;
	$: objectIntroEnd = -1;

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

	const onPointerIn = (ref: THREE.Group) => {
		if (!outline) return;

		traversePropertyElements(ref, 'children', (child) => {
			if (child instanceof THREE.Mesh) outline!.selection.add(child);
		});
	};

	const onPointerOut = (ref: THREE.Group) => {
		if (!outline) return;

		traversePropertyElements(ref, 'children', (child) => {
			if (outline!.selection.has(child)) outline!.selection.delete(child);
		});
	};
</script>

<EphemeralCamera
	ref={new THREE.PerspectiveCamera(50)}
	position.z={cameraZ}
/>
<Flex
	width={width - 0.25 * width}
	height={height - 0.25 * height}
	flexDirection={aspect > 1 ? 'Row' : 'Column'}
	justifyContent="Center"
	alignItems="Center"
>
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
				let:ref
				let:hovering
				let:pressing
			>
				{(hovering || pressing ? onPointerIn(ref) : onPointerOut(ref),
				'')}
				<T.Group
					position.y={lerp(
						$catBaseIntroTween,
						objectIntroStart,
						objectIntroEnd,
					)}
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
					)}
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
				>
					<Part
						gltf={gltfs.cat_item}
						position.x={0}
					/>
				</T.Group>
			</ButtonTactile>
		</Box>
	</Box>

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
				let:ref
				let:hovering
				let:pressing
			>
				{(hovering || pressing ? onPointerIn(ref) : onPointerOut(ref),
				'')}
				<T.Group
					position.y={lerp(
						$rockBaseIntroTween,
						objectIntroStart,
						objectIntroEnd,
					)}
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
					)}
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
				>
					<Part
						gltf={gltfs.rock_item}
						position.x={0}
					/>
				</T.Group>
			</ButtonTactile>
		</Box>
	</Box>

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
				let:ref
				let:hovering
				let:pressing
			>
				{(hovering || pressing ? onPointerIn(ref) : onPointerOut(ref),
				'')}
				<T.Group
					position.y={lerp(
						$duckBaseIntroTween,
						objectIntroStart,
						objectIntroEnd,
					)}
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
					)}
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
				>
					<Part
						gltf={gltfs.duck_item}
						position.x={0}
					/>
				</T.Group>
			</ButtonTactile>
		</Box>
	</Box>
</Flex>
