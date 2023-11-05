import { ic_self_improvement } from 'maic/two_tone';
import * as gltfs from '../../../assets/village/parts/gltfs.db';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Metaphysical Supply Store',
	description:
		"The town's place to buy improvements to your mind, body, & soul. However, it all seems a little too good to be true. Figure out what actually goes on.",
	objective: 'Buy a jewel without paying extra.',
	lessons: [
		'Learn how websites can hide or delay information to draw you into making a transaction.',
		'Know the influence of lying by omission.',
		'Learn to sniff out hidden costs or misrepresentations & stay vigilant up till the finalisation of every purchase.',
	],
	brignull: {
		kind: 'Sneaking',
		url: 'https://www.deceptive.design/types/sneaking',
	},
	icon: ic_self_improvement,
	facade: gltfs.building_3,
} as const satisfies BuildingInfo;
