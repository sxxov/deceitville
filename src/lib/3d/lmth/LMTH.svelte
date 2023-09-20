<script lang="ts">
	import { whenResize } from '@sxxov/sv/ut/use';
	import { UnimplementedError } from '@sxxov/ut/errors';
	import type { Rect } from '@sxxov/ut/viewport';
	import {
		T,
		forwardEventHandlers,
		useFrame,
		useThrelte,
		type Events,
		type Props,
	} from '@threlte/core';
	import { onDestroy, onMount } from 'svelte';
	import * as THREE from 'three';
	import { getScreenSpacePointOnPlane } from './getScreenSpacePointOnPlane';
	import { getScreenSpaceSizeAtWorldZ } from './getScreenSpaceSizeAtWorldZ';
	import { type Css, css } from '@sxxov/ut/css';

	export let ref = new THREE.Group();
	export let width: Css = '100%';
	export let height: Css = '100%';
	export let z = -10;
	export let eager = false;
	export let debug = false;
	export let strategy: 'fit' | 'put' | 'auto' = 'fit';

	interface $$Props extends Props<THREE.Group> {
		ref?: typeof ref;
		z?: typeof z;
		eager?: typeof eager;
		debug?: typeof debug;
		strategy?: typeof strategy;
	}
	type $$Events = Events<THREE.Group>;

	let div: HTMLDivElement | undefined;
	let rect: Rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	};

	let scaleX = 0;
	let scaleY = 0;
	let x = 0;
	let y = 0;
	let camera: THREE.PerspectiveCamera;
	let cameraPrev: THREE.PerspectiveCamera | undefined;
	let cameraInitAttachedToScene = false;
	let cameraScheduleAddRef = false;

	const component = forwardEventHandlers();
	const ctx = useThrelte();
	const { camera: cameraAny, renderer, scene } = ctx;

	$: {
		if (!($cameraAny instanceof THREE.PerspectiveCamera))
			throw new UnimplementedError(
				`LMTH requires a PerspectiveCamera, got ${$cameraAny.constructor.name}`,
			);

		cameraPrev = camera;
		camera = $cameraAny;

		if (camera !== cameraPrev) {
			cameraPrev?.remove(ref);
			if (!cameraInitAttachedToScene) scene.remove(cameraPrev);
		}

		cameraInitAttachedToScene = scene.children.includes(camera);
		if (!cameraInitAttachedToScene) scene.attach(camera);

		// idk why, but adding ref here won't reflect in the scene
		// probably because threlte purges children when a new camera
		// is `makeDefault`ed
		// so we schedule it to be added in `useFrame()`
		cameraScheduleAddRef = true;
	}

	$: fit =
		strategy === 'fit' ||
		(strategy === 'auto' && rect.width > 0 && rect.height > 0);

	const reflow = () => {
		if (!div) return;

		const domRect = div.getBoundingClientRect();

		rect.x = domRect.x;
		rect.y = domRect.y;
		rect.width = domRect.width;
		rect.height = domRect.height;

		rect = rect;
	};

	onMount(() => {
		reflow();
	});

	useFrame(() => {
		if (eager) reflow();

		if (cameraScheduleAddRef) {
			camera.attach(ref);
			cameraScheduleAddRef = false;
		}

		const viewport = renderer.getSize(new THREE.Vector2());
		const plane = getScreenSpaceSizeAtWorldZ(camera, z);

		const planePointTopLeft = getScreenSpacePointOnPlane(
			viewport,
			{
				x: rect.x,
				y: rect.y,
			},
			plane,
		);
		const planePointBottomRight = getScreenSpacePointOnPlane(
			viewport,
			{
				x: rect.x + rect.width,
				y: rect.y + rect.height,
			},
			plane,
		);

		ref.scale.set(1, 1, 1);
		const groupBbox = new THREE.Box3().setFromObject(ref);
		const groupWidth = groupBbox.max.x - groupBbox.min.x;
		const groupHeight = groupBbox.max.y - groupBbox.min.y;

		if (fit) {
			const planeWidth = planePointBottomRight.x - planePointTopLeft.x;
			const planeHeight = -planePointBottomRight.y - -planePointTopLeft.y;

			scaleX = groupWidth > 0 ? planeWidth / groupWidth : 1;
			scaleY = groupHeight > 0 ? planeHeight / groupHeight : 1;
		} else {
			scaleX = 1;
			scaleY = 1;
		}

		// set position x & y
		x = planePointTopLeft.x + (groupWidth * scaleX) / 2;
		y = planePointTopLeft.y - (groupHeight * scaleY) / 2;

		const cameraPos = camera.getWorldPosition(new THREE.Vector3());
		ref.position.set(x - cameraPos.x, y - cameraPos.y, z - cameraPos.z);
		ref.scale.set(scaleX, scaleY, 1);
	});

	onDestroy(() => {
		if (!cameraInitAttachedToScene) scene.remove(camera);
		camera.remove(ref);
	});
</script>

<svelte:window
	on:resize={() => {
		reflow();
	}}
	on:scroll={() => {
		reflow();
	}}
/>
<div
	class="lmth"
	class:debug
	style="
		--width: {css(width)};
		--height: {css(height)};
	"
	bind:this={div}
	use:whenResize={({ width, height }) => {
		rect.width = width;
		rect.height = height;

		rect = rect;
	}}
/>
<T
	is={ref}
	name="lmth"
	{...$$restProps}
	bind:this={$component}
>
	<slot
		{x}
		{y}
		{z}
	/>
</T>

<style lang="postcss">
	.lmth {
		height: 100%;
		width: 100%;

		&.debug {
			outline: solid 1px red;
		}
	}
</style>
