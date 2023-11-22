<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { useBuildingNav } from './useBuildingNav';

	const { cameraPeekRotation } = useBuildingNav()!;

	type SwizzleChar = 'x' | 'y' | 'z';
	type SwizzleString = `${SwizzleChar}${SwizzleChar}${SwizzleChar}`;
	type Vector3Array = [x: number, y: number, z: number];

	export let ref = new THREE.Group();
	export let swizzle: SwizzleString = 'xyz';
	export let multiplier: Vector3Array = [1, 1, 1];

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
