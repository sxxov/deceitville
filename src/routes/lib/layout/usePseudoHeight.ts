import { getAllContexts, getContext, onDestroy, onMount } from 'svelte';
import type { PseudoHeightContext } from './PseudoHeightContext';
import { IllegalStateError } from '@sxxov/ut/errors';
import { pseudoHeightContextKey } from './PseudoHeightContextProvider.svelte';
import { Store } from '@sxxov/ut/store';
import type { PseudoHeight } from './PseudoHeight';

export const usePseudoHeight = (): PseudoHeight => {
	const ctx = getContext<PseudoHeightContext>(pseudoHeightContextKey);

	if (!ctx)
		throw new IllegalStateError(
			`Attempted to use pseudo height outside children of PseudoHeightContextProvider`,
		);

	const update = () => {
		ctx.total.set(ctx.heights.reduce((a, b) => a + b.get(), 0));
	};

	const store = new Store(0);
	store.subscribeLazy(() => {
		update();
	});

	const { supply: top } = ctx.total.derive(() => {
		let cum = 0;

		for (const height of ctx.heights) {
			if (height === store) return cum;

			cum += height.get();
		}

		return cum;
	});
	const { supply: bottom } = ctx.total.derive(() => {
		let cum = 0;

		for (const height of ctx.heights) {
			if (height === store) return cum + height.get();

			cum += height.get();
		}

		return cum;
	});

	onMount(() => {
		ctx.heights.push(store);
		update();
	});

	onDestroy(() => {
		ctx.heights = ctx.heights.filter((h) => h !== store);
		update();
	});

	return { self: store, total: ctx.total.supply, top, bottom };
};
