/* cspell:includeregexp string */

import type { ReadonlyDeep } from 'type-fest';
import type { VotingBoothPolicy } from './VotingBoothPolicy';
import * as normals from './paperNormals';

export const VotingBoothPolicies = {
	park: {
		short: 'A new park',
		title: 'Should we build a new park?',
		description:
			'The Board observes that the children of the town currently play in the streets. This is bad for the motor-vehicle sector, as it discourages speeding.\n\nResidents have resorted to walking & their health has gotten better way too quickly, affecting the healthcare business as well. This phenomenon cannot continue, & thus the Board proposes a new recreational area for families without their own private parks.\n\nExperts also claim playing in the street is "dangerous" for children, this fact remains unconfirmed.',
		backgroundColour: '#aaaaaa',
		backgroundNormalMapSrc: normals.foldy,
		textColour: '#ffffff',
		good: true,
		choices: ['Yes', 'No, I hate children'],
	},
	clinic: {
		short: 'New clinics',
		title: 'Should we build new clinics?',
		description:
			'The Board believes that sufficient healthcare facilities keep residents healthy & happy. Hence, the Board proposes that all existing hospitals be demolished.\n\nThe Board has also received feedback that the current hospitals are too big & welcoming, & that the doctors are too friendly & helpful.\n\nGoing forward the design of all new clinics will be based on the drawings of our member\'s 2-yo infant, mainly this means we will be adding big scary eyebrows on the doctors & moving a toilet bowl into every room. Putting "care" in "healthcare".',
		backgroundColour: '#aaaaaa',
		backgroundNormalMapSrc: normals.ambient_weak,
		textColour: '#ffffff',
		good: false,
		choices: ['Yes', 'No, I think sick people are a "skill issue"'],
	},
	law: {
		short: 'Law enforcement',
		title: 'Should we start enforcing the law?',
		description:
			'The Board\'s recent findings taken from the surrounding towns indicate that the main driver of crime is the law. Thus, in an effort to increase crime rates & revenue received from fines, the Board proposes that the law be enforced.\n\nBased on the current 0%, we project a #DIV/0!% increase of metrics all around.\n\nThe Board has also received feedback that the current police force is too friendly & helpful. Going forward the police will be replaced with robots that are programmed kick dogs. Putting "law" in "law enforcement".',
		backgroundColour: '#aaaaaa',
		backgroundNormalMapSrc: normals.ambient_strong,
		textColour: '#ffffff',
		good: false,
		choices: ['Yes, crime is good', 'No, crime is bad'],
	},
	hairline: {
		short: 'Hairy styles',
		title: 'Should we notify Uncle Bob about his hairline?',
		description:
			"The Board has received feedback that Uncle Bob's hairline is receding.\n\nThis is a serious mental health issue, & The Board believes that Uncle Bob should be notified of this fact & seek treatment at the local conversion therapist.\n\nWhen this proposal is accepted, it will finally put the community at ease & resume operations of local hairdressers affected by this natural disaster.",
		backgroundColour: '#aaaaaa',
		backgroundNormalMapSrc: normals.crinkly,
		textColour: '#ffffff',
		good: true,
		choices: ['Yes', 'No, I think Uncle Bob is fine'],
	},
	bomb: {
		short: 'War',
		title: 'Should we bomb the neighbouring town?',
		description:
			'The Board has caught wind of a recent communication coming from the neighbouring town. The contents of it alleges that the Board is "stinky" & "smells like old grandma". These allegations are completely baseless & will not be tolerated.\n\nOur recent internal audit also confirms The Board\'s initial suspicions after receiving these allegations, that The Board actually smells like "*new* grandma", & that "old grandma" is "not a thing".',
		backgroundColour: '#aaaaaa',
		backgroundNormalMapSrc: normals.cardboard,
		textColour: '#ffffff',
		good: false,
		choices: ['Yes', 'Yes, but with more bombs'],
	},
} as const satisfies ReadonlyDeep<Record<string, VotingBoothPolicy>>;
