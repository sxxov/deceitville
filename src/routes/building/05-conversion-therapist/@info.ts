/* cspell:includeregexp string */

import { ic_psychology } from 'maic/two_tone';
import type { ReadonlyDeep } from 'type-fest';
import { gltfs } from '../../../assets/routes/lib/village/buildings/parts';
import type { BuildingInfo } from '../lib/info/BuildingInfo';
import { resolveBuildingRouteUrl } from '../lib/info/resolveBuildingRouteUrl';

export const info = {
	id: resolveBuildingRouteUrl(__dirname),
	name: 'Conversion Therapist',
	description:
		"Where many of the non-society-normative residents seem to end up. You're not sure who runs it, but it can't be good. Figure out a way to get everyone out of there.",
	objective: 'Look around for button combinations to turn off the TV.',
	analogy:
		"The room is purposely dark & the button combination to turn off the TV is purposely complex, making it difficult for you to pull away from something you don't want any more from the companies.",
	inspirations: [
		'Promotional emails that hide the unsubscribe button amongst a bunch of other text.',
		'Apps that hide the logout button in the settings menu.',
	],
	lessons: [
		'Learn how websites can meddle with the User Interface (UI) to obstruct you from doing what you want to do.',
		'Know the influence of button placements, colours, & other clutter, on your decision making.',
	],
	brignulls: [
		{
			kind: 'Visual Interference',
			url: 'https://www.deceptive.design/types/visual-interference',
		},
	],
	icon: ic_psychology,
	facade: gltfs.building_5,
} as const satisfies ReadonlyDeep<BuildingInfo>;
