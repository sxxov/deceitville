import type { Store } from '@sxxov/ut/store';

export interface PseudoHeightContext {
	heights: Store<number>[];
	total: Store<number>;
}
