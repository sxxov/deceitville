import type { ReadonlyDeep } from 'type-fest';
import type { VotingBoothOutcome } from './VotingBoothOutcome';
import type { VotingBoothPolicies } from './VotingBoothPolicies';

export const VotingBoothOutcomes = {
	park: [
		'Road incidents down 15% as families head to the new downtown park.',
		'Random child killed by a car, the perpetrator is still at large.\n\nClose sources say the child was playing on the street, as a car came speeding by.\n\nThey recommend banning children.',
	],
	clinic: [
		'With all hospitals around the town recently demolished, hospitalisations are reported to be down 100%.\n\nThe construction of the new clinic is thus under reconsideration, as it may be deemed unnecessary due to these new findings.',
		'New clinic left unbuilt\n\nlocals hold on to their eyebrows & toilet bowls.',
	],
	law: [
		'Crime rates up 100%.\n\nUnfortunately, the police force has been disbanded due to budget cuts.\n\nLocal dogs remain unkicked.',
		'Donut sales rise, as police celebrate their 10th consecutive year of crime rates at 0%.',
	],
	hairline: [
		'Local man receives treatment for his receding hairline.\n\nThe community is at ease.',
		'Local man with receding hairline still at large.\n\nHairdressers riot with shears & razors. Residents left unshaven.\n\nThe community is in shambles.',
	],
	bomb: [
		'Neighbouring town bombed, retaliates with a nuke.\n\nResidents have exactly 6 seconds to evacute.',
		'Neighbouting town bombed.\n\nNeighbouring town bombed again.\n\nNeighbouring town bombed 6 more times.\n\nThe neighbouring down has fallen. Our town is safe once again.',
	],
} as const satisfies ReadonlyDeep<
	Record<keyof typeof VotingBoothPolicies, VotingBoothOutcome>
>;
