<script lang="ts">
	import { client, inner } from '@sxxov/ut/viewport';
	import { T, useThrelte } from '@threlte/core';
	import { onMount } from 'svelte';
	import { expoIn, expoOut } from 'svelte/easing';
	import * as THREE from 'three';
	import { createPart } from '../lib/3d/gltf/part';
	import type { BuildingInfo } from './building/lib/BuildingInfo';
	import Directory from './lib/directory/Directory.svelte';
	import type { DirectoryRoute } from './lib/directory/DirectoryRoute';
	import Story from './lib/story/Story.svelte';
	import Waze from './lib/waze/Waze.svelte';
	import { WazeDirection } from './lib/waze/WazeDirection';
	import type { WazeTimeline } from './lib/waze/WazeTimeline';
	import Continuation from './lib/continuation/Continuation.svelte';
	import PseudoHeightContextProvider from './lib/layout/PseudoHeightContextProvider.svelte';
	import Health from './lib/health/Health.svelte';

	const { renderer } = useThrelte();

	export const dropDown = (
		element: Element,
		{ delay = 0, duration = 500, easing = expoOut } = {},
	) => {
		const computed = getComputedStyle(element);
		const opacity = Number(computed.opacity);
		const transform =
			computed.transform === 'none' ? '' : computed.transform;

		return {
			delay,
			duration,
			easing,
			css: (t: number, u: number) => `
				transform: ${transform} translateY(${u * 200}px);
				opacity: ${opacity * Math.min(t * 2, 1)};
			`,
		};
	};

	let scrollY = 0;
	$: vh = Math.max(
		$inner.height,
		$client.height,
		renderer.getSize(new THREE.Vector2()).height,
	);

	$: wazeTimeline = [
		{
			m: vh * 1.5,
			direction: WazeDirection.STRAIGHT,
		},
		{
			m: vh * 3,
			direction: WazeDirection.RIGHT,
		},
		{
			m: vh * 5.2,
			direction: WazeDirection.LEFT,
		},
		{
			m: vh * 7,
			direction: WazeDirection.RIGHT,
		},
		{
			m: vh * 8,
			direction: WazeDirection.STRAIGHT,
		},
	] satisfies WazeTimeline as WazeTimeline;

	let routes: DirectoryRoute[] = [];
	onMount(async () => {
		const infos: Record<string, BuildingInfo> = import.meta.glob(
			'./building/**/+page.svelte',
			{
				eager: true,
				import: 'info',
			},
		);

		routes = await Promise.all(
			Object.entries(infos).map(async ([k, info]) => ({
				info,
				url: /(building\/.*?)\/\+page.svelte/.exec(k)![1]!,
				object: (await createPart(info.facade)).object!,
			})),
		);
		routes = [
			...routes,
			...routes,
			...routes,
			...routes,
			...routes,
			...routes,
			...routes,
		];
	});
</script>

<svelte:window bind:scrollY />
<div class="route home">
	<T.PerspectiveCamera
		makeDefault
		position={[0, 0, 0]}
	/>

	<div class="frame">
		{#if vh > 0 && scrollY < vh * 8}
			<div
				class="waze"
				in:dropDown
				out:dropDown={{ easing: expoIn, duration: 200 }}
			>
				<Waze
					m={scrollY}
					timeline={wazeTimeline}
				/>
			</div>
		{/if}
	</div>

	<PseudoHeightContextProvider>
		<Story />
		<Directory {routes} />
		<Health />
		<Continuation />
	</PseudoHeightContextProvider>
</div>

<style lang="postcss">
	.home {
		display: contents;

		& > .frame {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;

			z-index: 10;
			mix-blend-mode: difference;

			display: grid;
			grid-template-areas:
				'. . .'
				'. content .'
				'. waze .';
			grid-template-columns: auto 1fr auto;
			grid-template-rows: auto 1fr auto;

			pointer-events: none;

			& > .waze {
				grid-area: waze;
				width: 100%;

				display: grid;
				place-items: center;
			}
		}
	}
</style>
