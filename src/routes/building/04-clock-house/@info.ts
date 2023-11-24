/* cspell:includeregexp string */

import { ic_browse_gallery } from 'maic/two_tone';
import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Clock House',
	description:
		"The people's place for time-telling things. You've got time to lose, so why not get one for your self?",
	objective: 'Buy a clock at the lowest price, before time runs out.',
	inspirations: [
		'Shopping websites that shows a sale as limited, with a countdown timer, but the product has always been at that sale price.',
		'Shopping websites that show a countdown timer for a sale, but the timer resets, either when you refresh the page, or when it finishes counting down.',
	],
	lessons: [
		'Learn how websites can use time to pressure you into buying something.',
		'Know the influence of urgency on your decision making.',
	],
	brignull: {
		kind: 'Fake urgency',
		url: 'https://www.deceptive.design/types/fake-urgency',
	},
	icon: ic_browse_gallery,
	facade: gltfs.building_4,
} as const satisfies BuildingInfo;
