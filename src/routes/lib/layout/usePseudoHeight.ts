import { IllegalStateError } from '@sxxov/ut/errors';
import { Store } from '@sxxov/ut/store';
import { getContext, onDestroy, onMount, tick } from 'svelte';
import { lenis } from '../../../lib/lenis/useLenis';
import type { PseudoHeight } from './PseudoHeight';
import type { PseudoHeightContext } from './PseudoHeightContext';
import { pseudoHeightContextKey } from './PseudoHeightContextProvider.svelte';

export const usePseudoHeight = (): PseudoHeight => {
	const ctx = getContext<PseudoHeightContext>(pseudoHeightContextKey);

	if (!ctx)
		throw new IllegalStateError(
			`Attempted to use pseudo height outside children of PseudoHeightContextProvider`,
		);

	const update = () => {
		ctx.total.set(ctx.heights.reduce((a, b) => a + (b?.get() ?? 0), 0));
		void tick().then(() => {
			lenis.get()?.resize();
		});
	};

	const store = new Store(0);
	store.subscribeLazy(() => {
		update();
	});

	const { supply: top } = ctx.total.derive(() => {
		let cum = 0;

		for (const height of ctx.heights) {
			if (height === store) return cum;

			cum += height?.get() ?? 0;
		}

		return cum;
	});
	const { supply: bottom } = ctx.total.derive(() => {
		let cum = 0;

		for (const height of ctx.heights) {
			if (height === store) return cum + (height.get() ?? 0);

			cum += height?.get() ?? 0;
		}

		return cum;
	});

	let i = ctx.heights.length;

	onMount(() => {
		const indexOfUndefined = ctx.heights.indexOf(undefined);
		i = indexOfUndefined >= 0 ? indexOfUndefined : ctx.heights.length;
		ctx.heights[i] = store;
		update();
	});

	onDestroy(() => {
		ctx.heights[i] = undefined;
		update();
	});

	return { self: store, total: ctx.total.supply, top, bottom };
};
