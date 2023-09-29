<script
	lang="ts"
	context="module"
>
	export const pseudoHeightContextKey = Symbol('pseudoHeight');
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import type { PseudoHeightContext } from './PseudoHeightContext';
	import { Store } from '@sxxov/ut/store';

	setContext<PseudoHeightContext>(pseudoHeightContextKey, {
		heights: [],
		total: new Store(0),
	});
</script>

<slot />
