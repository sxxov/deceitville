<script lang="ts">
	import { Tween } from '@sxxov/ut/animation';
	import { bezierQuintInOut, bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { Store } from '@sxxov/ut/store';
	import { T } from '@threlte/core';
	import { useCursor, useSuspense } from '@threlte/extras';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import { gltfs } from '../../../assets/de/button/index';
	import { createPart } from '../gltf/part';

	export let ref = new THREE.Group();

	const suspend = useSuspense();

	const { hovering, onPointerEnter, onPointerLeave } = useCursor();
	const tweenHoverIn = new Tween(0, 1, 50, bezierQuintOut);
	const tweenHoverOut = new Tween(1, 0, 300, bezierQuintOut);
	$: tweenHover = $hovering ? tweenHoverIn : tweenHoverOut;
	$: tweenHover.seekToProgress(0), void tweenHover.play();

	const pressing = new Store(false);
	const tweenPressIn = new Tween(0, 1, 0, bezierQuintOut);
	const tweenPressOut = new Tween(1, 0, 300, bezierQuintOut);
	$: tweenPress = $pressing ? tweenPressIn : tweenPressOut;
	$: tweenPress.seekToProgress(0), void tweenPress.play();

	const tweenPulse = new Tween(0, 1, 1000, bezierQuintInOut);
	$: if ($tweenPulse >= 1) void tweenPulse.play(-1);
	else if ($tweenPulse <= 0) void tweenPulse.play(1);
</script>

<T
	is={ref}
	rotation={[degToRad(180), 0, 0]}
>
	{#await suspend(createPart(gltfs.base)) then { object }}
		{#if object}
			<T
				is={object.clone(true)}
				receiveShadow
				castShadow
			/>
		{/if}
	{/await}
	{#await suspend(createPart(gltfs.pressable)) then { object }}
		{#if object}
			<T
				is={object.clone(true)}
				receiveShadow
				castShadow
				scale.z={($tweenHover + 1) * 1.5 - $tweenPress}
				on:pointerenter={onPointerEnter}
				on:pointerleave={onPointerLeave}
				on:pointerdown={() => {
					$pressing = true;
				}}
				on:pointerup={() => {
					$pressing = false;
				}}
			/>
			<T.PointLight
				position={[0, 0, -2]}
				intensity={$tweenHover * 10 +
					$tweenPress * 50 +
					$tweenPulse * -5}
				color={new THREE.Color(0x0000ff)}
				distance={3}
			/>
		{/if}
	{/await}
</T>
