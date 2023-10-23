import type { SvgString } from '@sxxov/ut/types';
import type { gltfs } from '../../../../assets/village/parts';

export interface BuildingInfo {
	id: string;
	name: string;
	description: string;
	lessons: readonly string[];
	brignull: {
		kind: string;
		url: string;
	};
	icon: SvgString;
	facade: (typeof gltfs)[keyof typeof gltfs];
}
