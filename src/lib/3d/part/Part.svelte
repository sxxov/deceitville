<script lang="ts">
	import { T, forwardEventHandlers, type Props } from '@threlte/core';
	import { useSuspense } from '@threlte/extras';
	import type { Object3D } from 'three';
	import { createPart } from '../gltf/part';

	type $$Props = Props<Object3D> & {
		gltf: typeof gltf;
		clone?: typeof clone;
		ref?: typeof ref;
	};

	export let gltf: Record<any, any>;
	export let clone = true;
	export let ref: Object3D | undefined = undefined;

	const suspend = useSuspense();
	const component = forwardEventHandlers();
</script>

{#await suspend(createPart(gltf)) then { object }}
	{#if object}
		<T
			is={(ref = clone ? object.clone(true) : object)}
			bind:this={$component}
			receiveShadow
			castShadow
			{...$$restProps}
		>
			<slot {ref} />
		</T>
	{/if}
{/await}
