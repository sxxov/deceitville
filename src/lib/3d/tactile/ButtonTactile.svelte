<script lang="ts">
	import { Tween } from '@sxxov/ut/animation';
	import { bezierQuintInOut, bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { Store } from '@sxxov/ut/store';
	import { T } from '@threlte/core';
	import { useCursor } from '@threlte/extras';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import { gltfs } from '../../../assets/tactile/button/index';
	import Part from '../part/Part.svelte';

	export let ref = new THREE.Group();

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
	on:pointerenter={onPointerEnter}
	on:pointerenter
	on:pointerleave={onPointerLeave}
	on:pointerleave
	on:pointerdown={() => {
		$pressing = true;
	}}
	on:pointerdown
	on:pointerup={() => {
		$pressing = false;
	}}
	on:pointerup
>
	<slot
		{ref}
		hover={$tweenHover}
		press={$tweenPress}
		hovering={$hovering}
		pressing={$pressing}
	>
		<T.Group rotation.x={degToRad(180)}>
			<Part gltf={gltfs.base} />
			<Part
				gltf={gltfs.pressable}
				scale.z={($tweenHover + 1) * 1.5 - $tweenPress}
			/>
			<T.PointLight
				position={[0, 0, -2]}
				intensity={$tweenHover * 10 +
					$tweenPress * 50 +
					$tweenPulse * -5}
				color={new THREE.Color(0x0000ff)}
				distance={3}
			/>
		</T.Group>
	</slot>
</T>
