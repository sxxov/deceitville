import type { SvgString } from '@sxxov/ut/types';
import type { gltfs } from '../../../assets/village/parts';

export interface BuildingInfo {
	name: string;
	description: string;
	icon: SvgString;
	facade: (typeof gltfs)[keyof typeof gltfs];
}
