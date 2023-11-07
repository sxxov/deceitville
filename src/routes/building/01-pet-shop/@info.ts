/* cspell:includeregexp string */

import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import { ic_pets } from 'maic/two_tone';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Pet Shop',
	description:
		"The local pet shop, where all kids' dream come true. You will need to pick between 3 unknown animals, based on their vague & incomplete descriptions.",
	objective: "Pick the pet that won't kill you.",
	inspirations: [
		"Comparison tables that are asymmetrical, where the points for each product/service aren't the same for each column",
	],
	lessons: [
		'Learn how websites can obstruct your comparison process.',
		'Know the difficulty of making a decision based on incomplete information.',
	],
	brignull: {
		kind: 'Comparison Prevention',
		url: 'https://www.deceptive.design/types/comparison-prevention',
	},
	icon: ic_pets,
	facade: gltfs.building_1,
} as const satisfies BuildingInfo;
