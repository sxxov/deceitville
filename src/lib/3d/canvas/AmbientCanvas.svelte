<script
	lang="ts"
	context="module"
>
	export const ambientRendererSizeContextKey = Symbol('ambientRendererSize');
</script>

<script lang="ts">
	import { whenResize } from '@sxxov/sv/ut/action/actions';
	import type { Size } from '@sxxov/ut/viewport';
	import {
		Canvas,
		forwardEventHandlers,
		useFrame,
		useThrelte,
		type ThrelteContext,
	} from '@threlte/core';
	import {
		onDestroy,
		type ComponentEvents,
		type ComponentProps,
		setContext,
	} from 'svelte';
	import { inner, client } from '@sxxov/ut/viewport';
	import { interactivity, useInteractivity } from '@threlte/extras';
	import { Store } from '@sxxov/ut/store';
	import { beforeNavigate } from '$app/navigation';
	import type { AmbientRendererSizeContext } from './AmbientRendererSizeContext';

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

	const rendererSize = new Store<Size>({
		width: vw || 1,
		height: vh || 1,
	});
	$: $rendererSize.width = width || vw || 1;
	$: $rendererSize.height = height || vh || 1;
	setContext<AmbientRendererSizeContext>(
		ambientRendererSizeContextKey,
		rendererSize,
	);

	const interactive = new Store(false);
	let interactiveHookUnsubscribe: (() => void) | undefined;

	beforeNavigate(() => {
		interactive.set(false);
	});

	onDestroy(() => {
		interactiveHookUnsubscribe?.();
	});
</script>

<div class="ambient-canvas">
	<div
		class="canvas"
		class:active
		class:interactive={$interactive}
		use:whenResize={({ width: w, height: h }) => {
			[width, height] = [w, h];
		}}
	>
		<Canvas
			{...$$restProps}
			size={$rendererSize}
			bind:this={$component}
		>
			<div use:portal={portalDiv}>
				<slot />
			</div>
			{(useFrame(() => {
				active = true;
			}),
			(ctx = useThrelte()),
			interactivity({
				enabled: $interactive,
			}),
			(interactiveHookUnsubscribe = useInteractivity().enabled.subscribe(
				(value) => {
					interactive.set(value);
				},
			)),
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

			&:not(.interactive) {
				pointer-events: none;
			}

			&.active {
				opacity: 1;
			}
		}

		& > .portal {
			display: contents;
		}
	}
</style>
