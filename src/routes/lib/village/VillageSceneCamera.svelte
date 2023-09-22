<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import * as THREE from 'three';
	import camera_path from '../../../assets/village/camera_path.json';
	import { useEphemeralCamera } from '../../../lib/3d/camera/useEphemeralCamera';

	export let progress = 0;

	const ref = new THREE.PerspectiveCamera(30);
	ref.scale.y = -1;
	useEphemeralCamera(ref);

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

		ref.position.copy(position);

		// using arclength for stablization in look ahead

		geometry.parameters.path.getPointAt(
			(progress + 30 / geometry.parameters.path.getLength()) % 1,
			lookAt,
		);

		// camera orientation 2 - up orientation via normal

		ref.matrix.lookAt(ref.position, lookAt, normal);
		ref.quaternion.setFromRotationMatrix(ref.matrix);
	});
</script>

<T
	is={ref}
	{...$$restProps}
/>
