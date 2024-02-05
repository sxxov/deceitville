/* cspell:includeregexp string */

import { ic_format_quote } from 'maic/two_tone';
import type { ReadonlyDeep } from 'type-fest';
import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import type { BuildingInfo } from '../lib/info/BuildingInfo';
import { resolveBuildingRouteUrl } from '../lib/info/resolveBuildingRouteUrl';

export const info = {
	id: resolveBuildingRouteUrl(__dirname),
	name: 'Voting Booth',
	description:
		'Residents come here to vote for new policies that will affect the village. You will need to vote for the policies that you want, & check it twice.',
	objective: 'Vote for policies that are good for the town.',
	analogy:
		'The policies are intentionally worded very confusingly, & their choices are designed to trick you into doing something you do not want, which in this case is voting for the bad policy.',
	inspirations: [
		'Confusing newsletter subscription checkboxes that trick you into subscribing to spam emails.',
		'Apps that trick you into subscribing to their premium plans.',
		'"No" buttons that use sad & guilt-invoking language.',
	],
	lessons: [
		'Learn how websites can use words to trick you into doing something you do not want to do.',
		'Know the influence of subversive language & complicated sentences on your decision making.',
	],
	brignulls: [
		{
			kind: 'Trick wording',
			url: 'https://www.deceptive.design/types/trick-wording',
		},
		{
			kind: 'Confirmshaming',
			url: 'https://www.deceptive.design/types/confirmshaming',
		},
	],
	icon: ic_format_quote,
	facade: gltfs.building_6,
} as const satisfies ReadonlyDeep<BuildingInfo>;
