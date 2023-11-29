<script lang="ts">
	import { AnimatableIterationCount, Layer } from '@sxxov/ut/animation';
	import { bezierQuintInOut } from '@sxxov/ut/bezier/beziers';
	import { T, useThrelte } from '@threlte/core';
	import { HTML, OrbitControls } from '@threlte/extras';
	import { createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import webm_hypno from '../../../../assets/routes/building/05-conversion-therapist/lib/tv/hypno.webm?url';
	import * as tv from '../../../../assets/routes/building/05-conversion-therapist/lib/tv/parts';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientCursor } from '../../../../lib/3d/canvas/useAmbientCursor';
	import { useAmbientInteractivity } from '../../../../lib/3d/canvas/useAmbientInteractivity';
	import Part from '../../../../lib/3d/part/Part.svelte';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';
	import TableTactile from '../../../../lib/3d/tactile/TableTactile.svelte';
	import { ConversionTherapistSceneState } from './ConversionTherapistSceneState';

	useAmbientInteractivity();
	useThrelte();
	const { cursor, cursorActive } = useAmbientCursor()!;
	$cursor = 'grab';
	$cursorActive = 'grabbing';

	const dispatch = createEventDispatcher();

	export let state: ConversionTherapistSceneState =
		ConversionTherapistSceneState.IDLE;

	const video = Object.assign(document.createElement('video'), {
		autoplay: true,
		loop: true,
		muted: true,
		src: webm_hypno,
	});
	void video.play();
	const videoTex = new THREE.VideoTexture(video);

	let dragged = false;
	const dragPromptRotationLayer = new Layer([0, 0, 0])
		.add([0, 0, 0], { start: 0 })
		.add([0, 0, 0], { offset: 5000 }, bezierQuintInOut)
		.add([0, degToRad(-3), 0], { offset: 300 }, bezierQuintInOut)
		.add([0, 0, 0], { offset: 300 }, bezierQuintInOut)
		.add([0, degToRad(-3), 0], { offset: 300 }, bezierQuintInOut)
		.add([0, 0, 0], { offset: 300 });
	$: if (dragged) dragPromptRotationLayer.stop();
	else
		void dragPromptRotationLayer.play(1, AnimatableIterationCount.INFINITE);

	let pressedA = false;
	let pressedB = false;
	let toggledC = false;
	let dialedA = false;
	let dialedB = false;
	let bangCount = 0;
	let banging = false;
	let offed = false;
	$: banging && setTimeout(() => (banging = false), 400);

	$: bangCount >= 10 && dispatch('break');
	$: offed && dispatch('off');

	$: if (state === ConversionTherapistSceneState.RESET) {
		dragged = false;

		pressedA = false;
		pressedB = false;
		toggledC = false;
		dialedA = false;
		dialedB = false;
		bangCount = 0;
		banging = false;
		offed = false;

		state = ConversionTherapistSceneState.IDLE;
	}
</script>

<EphemeralCamera position={[0, 0, 2]}>
	<OrbitControls
		enableDamping
		on:change={(e) => {
			const { rotation } = e.target.object;

			if (
				Math.abs(Number(rotation.x)) >= degToRad(1) ||
				Math.abs(Number(rotation.y)) >= degToRad(1) ||
				Math.abs(Number(rotation.z)) >= degToRad(1)
			)
				dragged = true;
		}}
		let:ref
	>
		{(state === ConversionTherapistSceneState.RESET && ref.reset(), '')}
	</OrbitControls>
</EphemeralCamera>
<T.Group rotation={$dragPromptRotationLayer}>
	<T.PointLight
		position={[-1, 0, 0.187]}
		intensity={1}
		color={new THREE.Color(0x0000ff)}
		distance={5}
	/>
	<T.PointLight
		position={[1, 0, 0.187]}
		intensity={1}
		color={new THREE.Color(0x0000ff)}
		distance={5}
	/>
	<T.PointLight
		position={[0, 0.526, 0.187]}
		intensity={1}
		color={new THREE.Color(0x0000ff)}
		distance={5}
	/>
	<ButtonTactile
		on:click={() => {
			pressedA = !pressedA;
		}}
		let:hovering
		let:pressing
	>
		{#each tv.instances.button as { position }}
			<Part
				gltf={tv.gltfs.button}
				position={[
					position[0],
					position[1],
					position[2] + (pressedA ? -0.01 : 0),
				]}
			>
				{#if pressedA}
					<T.MeshPhysicalMaterial
						side={THREE.DoubleSide}
						color={new THREE.Color(0xcccccc)}
						transmission={0.5}
						roughness={0.5}
						thickness={0.5}
					/>
				{/if}
				<HTML
					center
					pointerEvents="none"
					position={[0, 0.05, 0.01]}
				>
					<div
						class="hint"
						class:active={hovering || pressing}
					>
						<p>{pressedA ? 'X' : 'A'}</p>
					</div>
				</HTML>
			</Part>
		{/each}
	</ButtonTactile>
	<ButtonTactile
		disabled={!pressedA}
		on:click={() => {
			pressedB = !pressedB;
		}}
		let:hovering
		let:pressing
	>
		{#each tv.instances.button_x1 as { position }}
			<Part
				gltf={tv.gltfs.button_x1}
				position={[
					position[0],
					position[1],
					position[2] + (pressedB ? -0.01 : 0),
				]}
			>
				{#if pressedB}
					<T.MeshPhysicalMaterial
						side={THREE.DoubleSide}
						color={new THREE.Color(0xcccccc)}
						transmission={0.5}
						roughness={0.5}
						thickness={0.5}
					/>
				{/if}
				<HTML
					center
					pointerEvents="none"
					position={[0, 0.05, 0.01]}
				>
					<div
						class="hint"
						class:active={hovering || pressing}
					>
						<p>{pressedB ? 'Y' : 'B'}</p>
					</div>
				</HTML>
			</Part>
		{/each}
	</ButtonTactile>
	<ButtonTactile
		disabled={!pressedB}
		on:click={() => {
			toggledC = !toggledC;
		}}
		let:hovering
		let:pressing
	>
		{#each tv.instances.toggle as { position }}
			<Part
				gltf={tv.gltfs.toggle}
				position={[
					position[0],
					position[1],
					position[2] + (toggledC ? -0.01 : 0),
				]}
			>
				{#if toggledC}
					<T.MeshPhysicalMaterial
						side={THREE.DoubleSide}
						color={new THREE.Color(0xcccccc)}
						transmission={0.5}
						roughness={0.5}
						thickness={0.5}
					/>
				{/if}
				<HTML
					center
					pointerEvents="none"
					position={[0, 0.05, 0.01]}
				>
					<div
						class="hint"
						class:active={hovering || pressing}
					>
						<p>{toggledC ? 'Deselect' : 'Select'}</p>
					</div>
				</HTML>
			</Part>
		{/each}
	</ButtonTactile>
	<ButtonTactile
		disabled={!toggledC}
		on:click={() => {
			dialedA = !dialedA;
		}}
		let:hovering
		let:pressing
	>
		{#each tv.instances.dial as { position }}
			<Part
				gltf={tv.gltfs.dial}
				{position}
				rotation.z={dialedA ? Math.PI / 2 : 0}
			>
				{#if dialedA}
					<T.MeshPhysicalMaterial
						side={THREE.DoubleSide}
						color={new THREE.Color(0xcccccc)}
						transmission={0.5}
						roughness={0.5}
						thickness={0.5}
					/>
				{/if}
				<HTML
					center
					pointerEvents="none"
					position={[0, 0.05, 0.01]}
				>
					<div
						class="hint"
						class:active={hovering || pressing}
					>
						<p>Volume: {dialedA ? '25' : '75'}</p>
					</div>
				</HTML>
			</Part>
		{/each}
	</ButtonTactile>
	<ButtonTactile
		disabled={!toggledC}
		on:click={() => {
			dialedB = !dialedB;
		}}
		let:hovering
		let:pressing
	>
		{#each tv.instances.dial_x1 as { position }}
			<Part
				gltf={tv.gltfs.dial_x1}
				{position}
				rotation.z={dialedB ? Math.PI / 2 : 0}
			>
				{#if dialedB}
					<T.MeshPhysicalMaterial
						side={THREE.DoubleSide}
						color={new THREE.Color(0xcccccc)}
						transmission={0.5}
						roughness={0.5}
						thickness={0.5}
					/>
				{/if}
				<HTML
					center
					pointerEvents="none"
					position={[0, 0.05, 0.01]}
				>
					<div
						class="hint"
						class:active={hovering || pressing}
					>
						<p>Boogaloo: {dialedB ? '100%' : '0%'}</p>
					</div>
				</HTML>
			</Part>
		{/each}
	</ButtonTactile>
	<ButtonTactile
		disabled={!dialedB || !dialedA}
		on:click={() => {
			++bangCount;
			banging = true;
		}}
		let:hovering
		let:pressing
	>
		<T.Mesh
			position={[0, 0.326, 0.187]}
			rotation={[-Math.PI / 2, 0, 0]}
		>
			<T.PlaneGeometry args={[1, 0.38]} />
			<T.MeshStandardMaterial
				side={THREE.DoubleSide}
				opacity={0.001}
				transparent
			/>
			<HTML
				center
				pointerEvents="none"
				position={[0, 0.05, 0.01]}
			>
				<div
					class="hint"
					class:banging
					class:active={hovering || pressing}
				>
					<p>Punch TV</p>
				</div>
			</HTML>
		</T.Mesh>
	</ButtonTactile>
	<ButtonTactile
		disabled={bangCount <= 0}
		on:click={() => {
			offed = !offed;
		}}
		let:hovering
		let:pressing
	>
		<Part
			gltf={tv.gltfs.button}
			position={[0, -0.45, 0.2]}
			rotation={[Math.PI / 2, 0, 0]}
		>
			{#if bangCount}
				<T.MeshPhysicalMaterial
					side={THREE.DoubleSide}
					map={videoTex}
				/>
			{:else}
				<T.MeshStandardMaterial
					side={THREE.DoubleSide}
					opacity={0.001}
					transparent
				/>
			{/if}
			<HTML
				center
				pointerEvents="none"
				position={[0, 0.05, 0.01]}
			>
				<div
					class="hint"
					class:banging
					class:active={hovering || pressing}
				>
					<p>{offed ? 'On' : 'Off'}</p>
				</div>
			</HTML>
		</Part>
	</ButtonTactile>

	<Part gltf={tv.gltfs.glass} />
	<Part gltf={tv.gltfs.screen}>
		{#if !offed}
			<T.MeshPhysicalMaterial
				side={THREE.DoubleSide}
				map={videoTex}
			/>
		{/if}
	</Part>
	<Part gltf={tv.gltfs.tv} />
</T.Group>
<TableTactile
	position={[0, -0.4, 0]}
	heightLeg={50}
	widthSurface={0.5}
	weightSurface={0.1}
	clothGap={0.01}
	unclothed
>
	<svelte:fragment slot="surface-children">
		<T.MeshPhysicalMaterial
			side={THREE.DoubleSide}
			color={new THREE.Color(0x888888)}
			transmission={1}
			roughness={0.5}
			thickness={0.5}
		/>
	</svelte:fragment>
	<svelte:fragment slot="leg-children">
		<T.MeshPhysicalMaterial
			side={THREE.DoubleSide}
			color={new THREE.Color(0x888888)}
			transmission={1}
			roughness={0.5}
			thickness={0.5}
		/>
	</svelte:fragment>
</TableTactile>

<style lang="postcss">
	.hint {
		width: max-content;
		height: max-content;
		transition: font-size 0.5s var(----ease-fast-slow);

		border-radius: 9999px;
		padding: 1em 2em;
		border: 1px solid var(----colour-text-primary);

		pointer-events: none;

		opacity: 1;
		transform: translate(0, 0);
		transition:
			transform 0.2s var(----ease-fast-slow),
			opacity 0.05s var(----ease-fast-slow);

		&:not(.active) {
			opacity: 0;
			transform: translate(0, 6px);

			transition:
				transform 0.1s var(----ease-slow-fast),
				opacity 0.05s 0.05s var(----ease-slow-fast);
		}

		&.banging {
			animation: bang 0.1s var(----ease-fast-slow) 4;

			@keyframes bang {
				0% {
					transform: translate(0, 0);
				}
				10% {
					transform: translate(2px, 1px);
				}
				20% {
					transform: translate(-1px, -2px);
				}
				30% {
					transform: translate(2px, 2px);
				}
				40% {
					transform: translate(-2px, 1px);
				}
				50% {
					transform: translate(1px, -1px);
				}
				60% {
					transform: translate(-1px, 2px);
				}
				70% {
					transform: translate(1px, 1px);
				}
				80% {
					transform: translate(-2px, -1px);
				}
				90% {
					transform: translate(2px, 1px);
				}
				100% {
					transform: translate(0, 0);
				}
			}
		}

		& > p {
			margin: 0;
			font-family: var(----font-family-sans);
			letter-spacing: -0.05em;
			font-size: 1em;
			font-weight: bold;
			text-transform: uppercase;
			line-height: 1em;
		}
	}
</style>
