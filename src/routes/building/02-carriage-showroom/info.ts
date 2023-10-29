import { ic_bedroom_baby } from 'maic/two_tone';
import * as gltfs from '../../../assets/village/parts/gltfs.db';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Carriage Showroom',
	description:
		"Residents' one-stop-shop for all things carriage. You will need to avoid the advances of the salesman, & leave through the back door.",
	objective: 'Fill up your horse, avoid the salesman.',
	lessons: [
		'Learn how websites can shame you into making a decision.',
		'Know the influence that confirm-shaming might have on you, unknowingly.',
	],
	brignull: {
		kind: 'Confirmshaming',
		url: 'https://www.deceptive.design/types/confirmshaming',
	},
	icon: ic_bedroom_baby,
	facade: gltfs.building_2,
} as const satisfies BuildingInfo;
