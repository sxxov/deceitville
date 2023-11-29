/* cspell:includeregexp string */

import { ic_local_pharmacy } from 'maic/two_tone';
import type { ReadonlyDeep } from 'type-fest';
import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Pharmacy',
	description:
		"Residents' one-stop-shop for all things medical. You will need to get your prescription filled up, without losing any rights to your body.",
	objective: 'Refill your prescription, without losing your bodily autonomy.',
	inspirations: [
		"Product listings that don't show the full picture or hide important information.",
		'Plans that hide information in the fine print.',
	],
	lessons: [
		'Learn how websites can restrict information that hinders decision making.',
		'Know the hidden influence of the obstruction towards your right for information.',
	],
	brignulls: [
		{
			kind: 'Obstruction',
			url: 'https://www.deceptive.design/types/obstruction',
		},
	],
	icon: ic_local_pharmacy,
	facade: gltfs.building_2,
} as const satisfies ReadonlyDeep<BuildingInfo>;
