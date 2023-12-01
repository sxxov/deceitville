<script lang="ts">
	import { browser } from '$app/environment';
	import { Tween } from '@sxxov/ut/animation';
	import { bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { UnreachableError } from '@sxxov/ut/errors';
	import { lerp, map } from '@sxxov/ut/math';
	import { Store } from '@sxxov/ut/store';
	import { resolvePointerFromEvent, type Point } from '@sxxov/ut/viewport';
	import { T, useThrelte } from '@threlte/core';
	import { onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import { useAmbientRendererSize } from '../../../../lib/3d/canvas/useAmbientRendererSize';

	type SwizzleChar = 'x' | 'y' | 'z';
	type SwizzleString = `${SwizzleChar}${SwizzleChar}${SwizzleChar}`;
	type Vector3Array = [x: number, y: number, z: number];

	export let ref = new THREE.Group();
	export let swizzle: SwizzleString = 'xyz';
	export let multiplier: Vector3Array = [1, 1, 1];
	export let magnetic = false;
	/** Range of motion, in degrees */
	export let range = 40;

	const size = useAmbientRendererSize()!;
	$: sizeHypot = Math.hypot($size.width, $size.height);
	const { renderer = undefined } = browser ? useThrelte() : {};

	let point: Point = { x: NaN, y: NaN };
	const cameraPeekEnabled = new Store(false);
	const applyCameraPeekResistance = (ms = 1000) => {
		cameraPeekSpeed = 0.1;
		cameraPeekSpeedTween.pause();
		cameraPeekSpeedTween = new Tween(
			cameraPeekSpeed,
			1,
			ms,
			bezierQuintOut,
		);
		void cameraPeekSpeedTween.play();
	};
	let cameraPeekSpeedTween = new Tween(1, 1, 0);
	$: cameraPeekSpeed = $cameraPeekSpeedTween;
	const cameraPeekTarget: Point = { x: 0, y: 0 };
	const cameraPeekCurrPointerPoint: Point = { x: 0, y: 0 };
	$: cameraPeekTarget.x =
		!Number.isNaN(point.y) && $cameraPeekEnabled
			? -1 *
			  map(
					point.y - cameraPeekCurrPointerPoint.y,
					-sizeHypot,
					sizeHypot,
					degToRad(-(range / 2)),
					degToRad(range / 2),
			  )
			: 0;
	$: cameraPeekTarget.y =
		!Number.isNaN(point.x) && $cameraPeekEnabled
			? -1 *
			  map(
					point.x - cameraPeekCurrPointerPoint.x,
					-sizeHypot,
					sizeHypot,
					degToRad(-(range / 2)),
					degToRad(range / 2),
			  )
			: 0;
	$: cameraPeek = { x: 0, y: 0 };
	let cameraPeekRotation = new Store<[x: number, y: number, z: number]>([
		0, 0, 0,
	]);
	$: $cameraPeekRotation = [cameraPeek.x, cameraPeek.y, 0];
	let cameraPeekRafHandle:
		| ReturnType<typeof requestAnimationFrame>
		| undefined;
	const cameraPeekRaf = () => {
		cameraPeek.x = lerp(cameraPeekSpeed, cameraPeek.x, cameraPeekTarget.x);
		cameraPeek.y = lerp(cameraPeekSpeed, cameraPeek.y, cameraPeekTarget.y);

		if ($cameraPeekEnabled || (cameraPeek.x !== 0 && cameraPeek.y !== 0))
			cameraPeekRafHandle = requestAnimationFrame(cameraPeekRaf);
	};
	$: if (browser && $cameraPeekEnabled) {
		if (cameraPeekRafHandle) cancelAnimationFrame(cameraPeekRafHandle);
		cameraPeekRafHandle = requestAnimationFrame(cameraPeekRaf);
	}
	if (browser)
		onDestroy(() => {
			cancelAnimationFrame(cameraPeekRafHandle!);
		});

	const onMouseDown = (e: MouseEvent) => {
		const pointer = resolvePointerFromEvent(e);
		[point.x, point.y] = [pointer.x, pointer.y];

		if (!magnetic) {
			[cameraPeekCurrPointerPoint.x, cameraPeekCurrPointerPoint.y] = [
				pointer.x,
				pointer.y,
			];

			applyCameraPeekResistance(100);
			$cameraPeekEnabled = true;
		}
	};

	const onMouseUp = () => {
		if (!magnetic) {
			applyCameraPeekResistance();
			$cameraPeekEnabled = false;
		}
	};

	const onMouseMove = (e: MouseEvent) => {
		const pointer = resolvePointerFromEvent(e);
		[point.x, point.y] = [pointer.x, pointer.y];

		if (magnetic) {
			[cameraPeekCurrPointerPoint.x, cameraPeekCurrPointerPoint.y] = [
				$size.width / 2,
				$size.height / 2,
			];
		}
	};

	let mouseListenersAdded = false;
	const addMouseListeners = () => {
		if (!renderer) return;

		renderer.domElement.addEventListener('mousedown', onMouseDown);
		renderer.domElement.addEventListener('mouseup', onMouseUp);
		renderer.domElement.addEventListener('mousemove', onMouseMove);
		renderer.domElement.addEventListener('mouseleave', onMouseUp);

		mouseListenersAdded = true;
	};
	const removeMouseListeners = () => {
		if (!renderer) return;

		renderer.domElement.removeEventListener('mousedown', onMouseDown);
		renderer.domElement.removeEventListener('mouseup', onMouseUp);
		renderer.domElement.removeEventListener('mousemove', onMouseMove);
		renderer.domElement.removeEventListener('mouseleave', onMouseUp);

		mouseListenersAdded = false;
	};

	const onTouchDown = (e: TouchEvent) => {
		const pointer = resolvePointerFromEvent(e);
		[point.x, point.y] = [pointer.x, pointer.y];
		[cameraPeekCurrPointerPoint.x, cameraPeekCurrPointerPoint.y] = [
			pointer.x,
			pointer.y,
		];
		if (!magnetic) {
			applyCameraPeekResistance(100);
			$cameraPeekEnabled = true;
		}
	};

	const onTouchUp = () => {
		applyCameraPeekResistance();

		if (magnetic) {
			cameraPeekTarget.x = 0;
			cameraPeekTarget.y = 0;
		} else {
			$cameraPeekEnabled = false;
		}
	};

	const onTouchMove = (e: TouchEvent) => {
		const pointer = resolvePointerFromEvent(e);
		[point.x, point.y] = [pointer.x, pointer.y];
	};

	let touchListenersAdded = false;
	const addTouchListeners = () => {
		if (!renderer) return;

		renderer.domElement.addEventListener('touchstart', onTouchDown);
		renderer.domElement.addEventListener('touchend', onTouchUp);
		renderer.domElement.addEventListener('touchmove', onTouchMove);
		renderer.domElement.addEventListener('touchcancel', onTouchUp);

		touchListenersAdded = true;
	};
	const removeTouchListeners = () => {
		if (!renderer) return;

		renderer.domElement.removeEventListener('touchstart', onTouchDown);
		renderer.domElement.removeEventListener('touchend', onTouchUp);
		renderer.domElement.removeEventListener('touchmove', onTouchMove);
		renderer.domElement.removeEventListener('touchcancel', onTouchUp);

		touchListenersAdded = false;
	};
	$: if (browser) {
		if (!renderer) throw new UnreachableError();

		if (!touchListenersAdded) addTouchListeners();
		if (!mouseListenersAdded) addMouseListeners();

		$cameraPeekEnabled = magnetic;
	}
	$: if (magnetic) {
		cameraPeekCurrPointerPoint.x = $size.width / 2;
		cameraPeekCurrPointerPoint.y = $size.height / 2;
		cameraPeekTarget.x = 0;
		cameraPeekTarget.y = 0;
	}
	onDestroy(() => {
		if (mouseListenersAdded) removeMouseListeners();
		if (touchListenersAdded) removeTouchListeners();
	});

	$: swizzles = swizzle.split('');
	$: rotation = swizzles.map(
		(char, i) =>
			(char === 'x'
				? $cameraPeekRotation[0]
				: char === 'y'
				  ? $cameraPeekRotation[1]
				  : char === 'z'
				    ? $cameraPeekRotation[2]
				    : 0) * Number(multiplier[i]),
	) as Vector3Array;
</script>

<T
	is={ref}
	{rotation}
>
	<slot />
</T>
