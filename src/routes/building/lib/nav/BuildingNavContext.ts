import type { BottomSheetStates } from '@sxxov/sv/layout';
import type { Store } from '@sxxov/ut/store';

export interface BuildingNavContext {
	bottomSheetState: Store<BottomSheetStates>;
	exit: () => void;
}
