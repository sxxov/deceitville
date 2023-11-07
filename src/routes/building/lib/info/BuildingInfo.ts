import type { SvgString } from '@sxxov/ut/types';
import type { gltfs } from '../../../../assets/routes/lib/village/buildings/parts';

export interface BuildingInfo {
	id: string;
	name: string;
	description: string;
	objective: string;
	inspirations: readonly string[];
	lessons: readonly string[];
	brignull: {
		kind: string;
		url: string;
	};
	icon: SvgString;
	facade: (typeof gltfs)[keyof typeof gltfs];
}
