<script lang="ts">
	import { whenResize } from '@sxxov/sv/ut/use';
	import type { Size } from '@sxxov/ut/viewport';
	import {
		Canvas,
		forwardEventHandlers,
		useFrame,
		useThrelte,
		type ThrelteContext,
	} from '@threlte/core';
	import type { ComponentEvents, ComponentProps } from 'svelte';
	import { inner, client } from '@sxxov/ut/viewport';

	type $$Props = ComponentProps<Canvas>;
	type $$Events = ComponentEvents<Canvas>;

	const component = forwardEventHandlers();
	let active = false;

	let width = 0;
	let height = 0;
	let ctx: ThrelteContext | undefined;

	let portalDiv: HTMLDivElement;
	const portal = (content: HTMLElement, portal: HTMLElement) => {
		portal.appendChild(content);

		return {
			destroy() {
				portal.removeChild(content);
			},
		};
	};

	$: vw = Math.max($inner.width, $client.width);
	$: vh = Math.max($inner.height, $client.height);
</script>

<div class="ambient-canvas">
	<div
		class="canvas"
		class:active
		use:whenResize={({ width: w, height: h }) => {
			[width, height] = [w, h];
		}}
	>
		<Canvas
			{...$$restProps}
			size={{
				width: width || vw || 1,
				height: height || vh || 1,
			}}
			bind:this={$component}
		>
			<div use:portal={portalDiv}>
				<slot />
			</div>
			{(useFrame(() => {
				active = true;
			}),
			(ctx = useThrelte()),
			'')}
		</Canvas>
	</div>
	<div
		class="portal"
		bind:this={portalDiv}
	></div>
</div>

<style lang="postcss">
	.ambient-canvas {
		display: contents;

		& > .canvas {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			height: 100lvh;

			opacity: 0;
			transition: opacity 1s var(----ease-slow-slow);

			z-index: 1;

			pointer-events: none;

			&.active {
				opacity: 1;
			}
		}

		& > .portal {
			display: contents;
		}
	}
</style>
