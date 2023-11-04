import { ic_local_pharmacy } from 'maic/two_tone';
import * as gltfs from '../../../assets/village/parts/gltfs.db';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Pharmacy',
	description:
		"Residents' one-stop-shop for all things medical. You will need to get your prescription filled up, without losing any rights to your body.",
	objective: 'Refill your prescription, without losing your bodily autonomy.',
	lessons: [
		'Learn how websites can restrict information that hinders decision making.',
		'Know the hidden influence of the obstruction towards your right for information.',
	],
	brignull: {
		kind: 'Obstruction',
		url: 'https://www.deceptive.design/types/obstruction',
	},
	icon: ic_local_pharmacy,
	facade: gltfs.building_2,
} as const satisfies BuildingInfo;
