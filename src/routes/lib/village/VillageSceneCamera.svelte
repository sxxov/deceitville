<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import * as THREE from 'three';
	import camera_path from '../../../assets/village/camera_path.json';

	export let progress = 0;

	let camera: THREE.PerspectiveCamera;

	const curve = new THREE.CatmullRomCurve3(
		camera_path.points.map(({ x, y, z }) => new THREE.Vector3(x, y, z)),
	);
	curve.closed = camera_path.closed;

	const geometry = new THREE.TubeGeometry(curve, 100, 0.1, 10, curve.closed);

	const direction = new THREE.Vector3();
	const binormal = new THREE.Vector3();
	const normal = new THREE.Vector3();
	const position = new THREE.Vector3();
	const lookAt = new THREE.Vector3();
	useFrame(() => {
		if (!camera) return;

		// animate camera along spline

		geometry.parameters.path.getPointAt(progress, position);

		// interpolation

		const segments = geometry.tangents.length;
		const pickt = progress * segments;
		const pick = Math.floor(pickt);
		const pickNext = (pick + 1) % segments;

		if (geometry.binormals[pickNext] && geometry.binormals[pick])
			binormal.subVectors(
				geometry.binormals[pickNext]!,
				geometry.binormals[pick]!,
			);
		if (geometry.binormals[pick])
			binormal
				.multiplyScalar(pickt - pick)
				.add(geometry.binormals[pick]!);

		geometry.parameters.path.getTangentAt(progress, direction);
		const offset = 0;

		normal.copy(binormal).cross(direction);

		// we move on a offset on its binormal

		position.add(normal.clone().multiplyScalar(offset));

		camera.position.copy(position);

		// using arclength for stablization in look ahead

		geometry.parameters.path.getPointAt(
			(progress + 30 / geometry.parameters.path.getLength()) % 1,
			lookAt,
		);

		// camera orientation 2 - up orientation via normal

		camera.matrix.lookAt(camera.position, lookAt, normal);
		camera.quaternion.setFromRotationMatrix(camera.matrix);
	});
</script>

<T.Group>
	<T.PerspectiveCamera
		fov={30}
		near={0.1}
		far={1000}
		makeDefault
		scale.y={-1}
		{...$$restProps}
		bind:ref={camera}
	/>
</T.Group>
