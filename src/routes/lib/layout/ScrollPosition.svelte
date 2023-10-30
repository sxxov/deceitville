<script lang="ts">
	import { inner, type Point } from '@sxxov/ut/viewport';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let left = 0;
	export let top = 0;
	export let eager = false;

	let scrollY = 0;
	let div: HTMLDivElement | undefined;

	const update = () => {
		if (!div) return;

		const rect = div.getBoundingClientRect();

		[left, top] = [
			rect.left +
				document.documentElement.scrollLeft -
				document.documentElement.clientLeft,
			rect.top +
				document.documentElement.scrollTop -
				document.documentElement.clientTop,
		];

		dispatch('scroll', { x: left, y: top } satisfies Point);
	};

	$: if (div) {
		$inner;

		update();
	}

	$: if (eager && div) {
		$inner;
		scrollY;

		update();
	}
</script>

<svelte:window bind:scrollY />
<div bind:this={div} />
