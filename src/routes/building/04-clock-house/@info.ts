/* cspell:includeregexp string */

import { ic_browse_gallery } from 'maic/two_tone';
import type { ReadonlyDeep } from 'type-fest';
import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import type { BuildingInfo } from '../lib/info/BuildingInfo';
import { resolveBuildingRouteUrl } from '../lib/info/resolveBuildingRouteUrl';

export const info = {
	id: resolveBuildingRouteUrl(__dirname),
	name: 'Clock House',
	description:
		"The people's place for time-telling things. You've got time to lose, so why not get one for your self?",
	objective: 'Buy a clock at the lowest price, before time runs out.',
	analogy:
		"The ticking clocks rush you into making a potentially impulsive decision, making you more likely to pay for a clock that you don't need.",
	inspirations: [
		'Shopping websites that shows a sale as limited, with a countdown timer, but the product has always been at that sale price.',
		'Shopping websites that show a countdown timer for a sale, but the timer resets, either when you refresh the page, or when it finishes counting down.',
	],
	lessons: [
		'Learn how websites can use time to pressure you into buying something.',
		'Know the influence of urgency on your decision making.',
	],
	brignulls: [
		{
			kind: 'Fake urgency',
			url: 'https://www.deceptive.design/types/fake-urgency',
		},
	],
	icon: ic_browse_gallery,
	facade: gltfs.building_4,
} as const satisfies ReadonlyDeep<BuildingInfo>;
