import type { Store } from '@sxxov/ut/store';

export interface PseudoHeightContext {
	heights: (Store<number> | undefined)[];
	total: Store<number>;
}
