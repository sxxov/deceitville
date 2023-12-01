export interface VotingBoothPolicy {
	short: string;
	title: string;
	description: string;
	choices: [yes: string, no: string];
	good: boolean;
	textColour: `#${string}`;
	backgroundNormalMapSrc: string;
	backgroundColour: `#${string}`;
}
