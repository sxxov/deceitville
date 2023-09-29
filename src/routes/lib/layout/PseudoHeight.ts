import type { Store, Supply } from '@sxxov/ut/store';

export interface PseudoHeight {
	self: Store<number>;
	total: Supply<number>;
	top: Supply<number>;
	bottom: Supply<number>;
}
