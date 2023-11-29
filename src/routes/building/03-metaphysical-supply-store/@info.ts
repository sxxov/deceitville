/* cspell:includeregexp string */

import { ic_self_improvement } from 'maic/two_tone';
import type { ReadonlyDeep } from 'type-fest';
import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Metaphysical Supply Store',
	description:
		"The town's place to buy improvements to your mind, body, & soul. However, it all seems a little too good to be true. Figure out what actually goes on.",
	objective: 'Buy a jewel without paying extra.',
	inspirations: [
		'Food delivery apps that hide additional fees until the last moment.',
		'Online stores that hide shipping costs until the last moment.',
		"Promotions that you only find out don't work at checkout.",
	],
	lessons: [
		'Learn how websites can hide or delay information to draw you into making a transaction.',
		'Know the influence of lying by omission.',
		'Learn to sniff out hidden costs or misrepresentations & stay vigilant up till the finalisation of every purchase.',
	],
	brignulls: [
		{
			kind: 'Hidden Costs',
			url: 'https://www.deceptive.design/types/hidden-costs',
		},
	],
	icon: ic_self_improvement,
	facade: gltfs.building_3,
} as const satisfies ReadonlyDeep<BuildingInfo>;
