/* cspell:includeregexp string */

import { ic_psychology } from 'maic/two_tone';
import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Conversion Therapist',
	description:
		"Where many of the non-society-normative residents seem to end up. You're not sure who runs it, but it can't be good. Figure out a way to get everyone out of there.",
	objective: 'Find buttons to turn off the TV.',
	inspirations: [
		'Promotional emails that hide the unsubscribe button amongst a bunch of other text.',
		'Apps that hide the logout button in the settings menu.',
	],
	lessons: [
		'Learn how websites can meddle with the User Interface (UI) to obstruct you from doing what you want to do.',
		'Know the influence of button placements, colours, & other clutter, on your decision making.',
	],
	brignull: {
		kind: 'Visual Interference',
		url: 'https://www.deceptive.design/types/visual-interference',
	},
	icon: ic_psychology,
	facade: gltfs.building_5,
} as const satisfies BuildingInfo;
