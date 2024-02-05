import type { SvgString } from '@sxxov/ut/types';
import type { gltfs } from '../../../../assets/routes/lib/village/buildings/parts';

export interface BuildingInfo {
	id: `/building/${string}`;
	name: string;
	description: string;
	objective: string;
	analogy: string;
	inspirations: string[];
	lessons: string[];
	brignulls: {
		kind: string;
		url: string;
	}[];
	icon: SvgString;
	facade: (typeof gltfs)[keyof typeof gltfs];
}
