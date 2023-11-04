import { ic_self_improvement } from 'maic/two_tone';
import * as gltfs from '../../../assets/village/parts/gltfs.db';
import { resolveRouteUrl } from '../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from '../lib/info/BuildingInfo';

export const info = {
	id: resolveRouteUrl(__dirname),
	name: 'Metaphysical Supply Store',
	description:
		"The town's, allegedly, most famous place to buy improvements to your mind, body, & soul. However, you've never seen anyone go in or out of it. Figure out where all the fanfare is coming from.",
	objective: 'Figure out where all the fanfare is coming from.',
	lessons: [
		'Learn how websites can use fake reviews & made up stats to fool you into thinking something is popular or credible.',
		'Know the influence of trusting social proof, that comes from a source you cannot prove.',
	],
	brignull: {
		kind: 'Fake Social Proof',
		url: 'https://www.deceptive.design/types/fake-social-proof',
	},
	icon: ic_self_improvement,
	facade: gltfs.building_3,
} as const satisfies BuildingInfo;
