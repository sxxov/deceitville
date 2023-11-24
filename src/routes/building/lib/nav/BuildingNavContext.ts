import type { BottomSheetStates } from '@sxxov/sv/layout';
import type { Store } from '@sxxov/ut/store';

export interface BuildingNavContext {
	bottomSheetState: Store<BottomSheetStates>;
	cameraPeekEnabled: Store<boolean>;
	cameraPeekRotation: Store<[x: number, y: number, z: number]>;
	exit: () => void;
	reslot: () => void;
}
