<script lang="ts">
	/* eslint-disable @typescript-eslint/naming-convention */
	import { UnreachableError } from '@sxxov/ut/errors';
	import { raise } from '@sxxov/ut/functional';
	import { clamp01, lerp, map01 } from '@sxxov/ut/math';
	import { inner, type Point } from '@sxxov/ut/viewport';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { AutoColliders, RigidBody, World } from '@threlte/rapier';
	import { clamp } from 'three/src/math/MathUtils.js';
	import {
		gltfs,
		instances,
	} from '../../../assets/routes/lib/village/buildings/parts';
	import {
		barrel,
		box,
		box_x1,
		fence_1,
		fence_2,
		fence_3,
		fence_4,
		fence_5,
		fence_main,
		gravestone,
		gravestone_x1,
		gravestone_x2,
		gravestone_x3,
		gravestone_x4,
		jug,
		jug_x1,
		jug_x2,
		jug_x3,
		jug_x4,
		jug_x5,
		lader,
		mushroom_1,
		mushroom_3,
		pillar_1,
		pillar_2,
		pointer_1,
		pointer_2,
		pumpkin,
		pumpkin_x1,
		pumpkin_x2,
		pumpkin_x3,
		pumpkin_x4,
		rubbish,
		stump_1,
		tree_2,
		tree_2_x1,
		tree_4,
		wheat,
	} from '../../../assets/routes/lib/village/buildings/parts/gltfs.db';
	import { useAmbientRendererSize } from '../../../lib/3d/canvas/useAmbientRendererSize';
	import { getScreenSpacePointOnPlane } from '../../../lib/3d/lmth/getScreenSpacePointOnPlane';
	import { getScreenSpaceSizeAtWorldZ } from '../../../lib/3d/lmth/getScreenSpaceSizeAtWorldZ';
	import { createPart } from '../../../lib/3d/part/createPart';
	import Parts from '../../../lib/3d/part/Parts.svelte';
	import { pointer } from '../../../lib/follow/pointer';
	import type { BuildingInfo } from '../../building/lib/info/BuildingInfo';
	import ScrollPosition from '../layout/ScrollPosition.svelte';
	import HealthSceneCamera from './HealthSceneCamera.svelte';

	const { camera } = useThrelte();
	const size = useAmbientRendererSize()!;
	$: ({ height: vh } = $size);

	export let info: BuildingInfo | undefined;

	let floorPoint: Point = { x: 0, y: 0 };
	$: floorPoint.x = $inner.width / 2;
	$: floorPoint.y = Math.max((top || 0) + vh - scrollY, vh);
	let buildingPoint: Point = { x: 0, y: 0 };
	$: buildingPoint.x = $inner.width / 2;
	$: buildingPoint.y = Math.max((top || 0) + vh / 2 - scrollY, vh / 2);
	let cameraPoint: Point = { x: 0, y: 0 };
	$: cameraPoint.x = $inner.width / 2;
	$: cameraPoint.y = vh - buildingPoint.y;
	let scrollY = 0;
	let top = NaN;

	const rootZ = -40;
	$: flyZ = lerp(clamp01(map01(scrollY - top, 0, vh * 3)), 0, -220);

	$: cameraWorldPoint = getScreenSpacePointOnPlane(
		$size,
		cameraPoint,
		getScreenSpaceSizeAtWorldZ(
			$camera as THREE.PerspectiveCamera,
			rootZ - 40,
		),
	);
	$: pointerWorldPoint = getScreenSpacePointOnPlane(
		$size,
		{
			x: $pointer.x,
			y: $pointer.y - (top - clamp(scrollY, 0, top)),
		},
		getScreenSpaceSizeAtWorldZ($camera as THREE.PerspectiveCamera, -40),
	);

	const liter = [
		barrel,
		box,
		box_x1,
		fence_1,
		fence_2,
		fence_3,
		fence_4,
		fence_5,
		fence_main,
		gravestone,
		gravestone_x1,
		gravestone_x2,
		gravestone_x3,
		gravestone_x4,
		jug,
		jug_x1,
		jug_x2,
		jug_x3,
		jug_x4,
		jug_x5,
		lader,
		mushroom_1,
		mushroom_3,
		pillar_1,
		pillar_2,
		pointer_1,
		pointer_2,
		pumpkin,
		pumpkin_x1,
		pumpkin_x2,
		pumpkin_x3,
		pumpkin_x4,
		rubbish,
		stump_1,
		tree_2,
		tree_2_x1,
		tree_4,
		wheat,
	].sort(() => Math.random() - 0.5);
	let pumpkinPositions: [x: number, y: number, z: number][] = [];
	const getPumpkinPosition = (): (typeof pumpkinPositions)[number] => [
		pointerWorldPoint.x,
		pointerWorldPoint.y,
		rootZ + flyZ - 40,
	];
	$: if (info) pumpkinPositions.push(getPumpkinPosition());
</script>

<svelte:window bind:scrollY />
<ScrollPosition bind:top />
{#if !Number.isNaN(top) && scrollY >= top - vh}
	<HealthSceneCamera
		position.x={0}
		position.y={cameraWorldPoint.y}
		position.z={rootZ + flyZ}
	/>
{/if}

<World>
	<T.Group
		visible={!Number.isNaN(top) &&
			scrollY >= top - vh &&
			scrollY <= top + vh * 2}
	>
		<Parts
			gltfs={{
				barrel,
				box,
				box_x1,
				fence_1,
				fence_2,
				fence_3,
				fence_4,
				fence_5,
				fence_main,
				pumpkin,
				pumpkin_x1,
				pumpkin_x2,
				pumpkin_x3,
				pumpkin_x4,
			}}
			{instances}
			position={[0, -20, -120]}
		/>
		<!-- <Debug /> -->
		<!-- <RigidBody
					on:collisionenter={() => void console.log('collision happened!')}
				>
					<AutoColliders shape="trimesh"> -->

		<!-- </AutoColliders>
				</RigidBody> -->

		<!-- <FollowLocus point={floorPoint}>
			<AutoColliders>
				<Part
					gltf={gltfs.circle}
					receiveShadow
					castShadow
					position={[0, 0, 0]}
					scale={0.03}
				/>
			</AutoColliders>
		</FollowLocus> -->
		<!-- <FollowLocus point={buildingPoint}> -->

		<!-- <T.Mesh
			position={[0, 0, -54 - 30]}
			scale={1}
		>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color={0xffffff} />
		</T.Mesh> -->
		{#await createPart(gltfs.circle) then { object }}
			{#if object}
				<AutoColliders shape="trimesh">
					<T
						is={object.clone(true)}
						{...$$restProps}
						receiveShadow
						castShadow
						position={[0, -20, -120]}
						scale={1}
					/>
				</AutoColliders>
			{/if}
		{/await}
		<RigidBody>
			<AutoColliders shape={'cuboid'}>
				<T.Mesh position.z={rootZ + flyZ}>
					<T.BoxGeometry args={[1, 1, 1]} />
				</T.Mesh>
			</AutoColliders>
		</RigidBody>
		{#each pumpkinPositions as position, i}
			<!-- <Part
					gltf={building}
					receiveShadow
					castShadow
					position={[0, 0.2, -3]}
					rotation={[degToRad(10), degToRad(-20), degToRad(20)]}
					scale={0.03}
				/> -->
			{#await createPart(liter[i % liter.length] ?? raise(new UnreachableError())) then { object }}
				{#if object}
					<RigidBody
						gravityScale={1}
						linearDamping={1}
					>
						<AutoColliders>
							<T
								is={object.clone(true)}
								{...$$restProps}
								receiveShadow
								castShadow
								{position}
							>
								<!-- {#if completable[info.id]?.get()} -->
								<T.MeshPhysicalMaterial
									roughness={0}
									thickness={0.5}
								/>
								<!-- {/if} -->
							</T>
						</AutoColliders>
					</RigidBody>
				{/if}
			{/await}
		{/each}

		<!-- </FollowLocus> -->
	</T.Group>
</World>
