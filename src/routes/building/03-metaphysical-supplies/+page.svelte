<script lang="ts">
	import {
		ic_diamond,
		ic_meeting_room,
		ic_money,
		ic_question_mark,
		ic_wc,
	} from 'maic/two_tone';
	import Dialogue from '../../../lib/dialogue/Dialogue.svelte';
	import type { DialogueChoice } from '../../../lib/dialogue/DialogueChoice';
	import { useBuildingNav } from '../lib/nav/useBuildingNav';
	import MetaphysicalSupplyStoreScene from './lib/MetaphysicalSuppliesScene.svelte';
	import { completable } from '../../lib/health/completion';
	import { info } from './@info';
	import BuildingSuccess from '../lib/ending/BuildingSuccess.svelte';
	import BuildingFailure from '../lib/ending/BuildingFailure.svelte';

	enum DialogueStates {
		NONE,
		GREETING_1,
		GREETING_2,
		GREETING_3,

		EXPLANATION,
		BACKROOM,
		BATHROOM_ENDING,

		JEWEL_1,
		JEWEL_2,
		JEWEL_3,
		JEWEL_4,
		JEWEL_5,
		JEWEL_6,
		JEWEL_7,
		JEWEL_8,
		JEWEL_9,
		JEWEL_10,

		JEWEL_BUY_ENDING,
		JEWEL_ASK_PRICE,
	}
	const DialogueTexts: Record<DialogueStates, string> = {
		[DialogueStates.NONE]: '',
		[DialogueStates.GREETING_1]:
			'Greetings, great traveller.\n\nHow may I be of your humble assistance today?',
		[DialogueStates.GREETING_2]:
			'Yes, my precious traveller.\n\nHow may I be of your humble assistance today?',
		[DialogueStates.GREETING_3]:
			'Yes, my precious traveller.\n\nHow may I be of your humble assistance today?',

		[DialogueStates.EXPLANATION]:
			"Ah, yes. I see you are in need of a jewel. What humble traveller like you wouldn't benefit from one?\n\nLook around, just pick up any you fancy from the floor & I'll have the utmost pleasure in introducing you to it.",
		[DialogueStates.BACKROOM]:
			"Ah, yes, the classic jewels from the backrooms.\n\nI'm afraid I can't sell you those, though. They're not for sale.",
		[DialogueStates.BATHROOM_ENDING]:
			'Of course, just head into the backrooms & turn to your right.',

		[DialogueStates.JEWEL_1]:
			"The amethyst, a great choice.\n\nIt's a stone of spiritual protection & purification, cleansing one's energy field of negative influences & attachments, & creating a resonant shield of spiritual Light around the body.",
		[DialogueStates.JEWEL_2]:
			'The citrine, a great choice.\n\nIt is a stone of abundance & manifestation, attracting wealth & prosperity, success & all things good.',
		[DialogueStates.JEWEL_3]:
			'The clear quartz, a great choice.\n\nIt is a stone of power & amplifies any energy or intention. It protects against negativity, attunes to your higher self, & relieves pain.',
		[DialogueStates.JEWEL_4]:
			'The rose quartz, a great choice.\n\nIt is a stone of the heart, a crystal of unconditional love. It carries a soft feminine energy of compassion & peace, tenderness & healing, nourishment & comfort.',
		[DialogueStates.JEWEL_5]:
			'The tiger eye, a great choice.\n\nIt is a stone of protection, especially during travel. It is also a stone of good luck & prosperity, often used to attract money.',
		[DialogueStates.JEWEL_6]:
			'The tourmaline, a great choice.\n\nIt is a stone of protection, a powerful stone for protection against negative energy of all kinds, as well as being a strong spiritual grounding stone.',
		[DialogueStates.JEWEL_7]:
			'The turquoise, a great choice.\n\nIt is a stone of protection, strong & opaque, yet soothing to the touch, healing to the eye, as if carved from an azure heaven & slipped to earth.',
		[DialogueStates.JEWEL_8]:
			'The moonstone, a great choice.\n\nIt is a stone of inner growth & strength. It soothes emotional instability & stress, & stabilises the emotions, providing calmness.',
		[DialogueStates.JEWEL_9]:
			'The onyx, a great choice.\n\nIt is a stone of strength & protection. It is a stone of self-mastery, discipline & inner strength, aiding one in making wise decisions, & keeping one focused.',
		[DialogueStates.JEWEL_10]:
			'The opal, a great choice.\n\nIt is a stone of inspiration which enhances imagination & creativity. It helps one release inhibitions & enhances memory. It is also a very spiritual stone, associated with love & passion.',

		[DialogueStates.JEWEL_BUY_ENDING]:
			'Yes, my friend, you have chosen wisely. This jewel will serve you well.\n\nIt will cost you an arm & a leg, though.\n\nToo late to back out now.',
		[DialogueStates.JEWEL_ASK_PRICE]:
			"Nothing of importance, my friend! It's such a low cost because I believe everyone should have their own jewel.\n\nWould you like to go through with it?",
	};
	const JewelChoices: [DialogueChoice, ...DialogueChoice[]] = [
		{
			name: "Sounds good, I'll take it!",
			icon: ic_money,
		},
		{
			name: 'How much does it cost?',
			icon: ic_question_mark,
		},
	];
	const JewelSequence: DialogueStates[] = [
		DialogueStates.JEWEL_BUY_ENDING,
		DialogueStates.JEWEL_ASK_PRICE,
	];
	const DialogueChoices: Record<
		DialogueStates,
		[DialogueChoice, ...DialogueChoice[]] | undefined
	> = {
		[DialogueStates.NONE]: undefined,

		[DialogueStates.GREETING_1]: [
			{
				name: 'I need to get a jewel.',
				icon: ic_diamond,
			},
		],
		[DialogueStates.GREETING_2]: [
			{
				name: 'I need to get a jewel.',
				icon: ic_diamond,
			},
			{
				name: 'Do you have any other jewels at the back?',
				icon: ic_meeting_room,
			},
		],
		[DialogueStates.GREETING_3]: [
			{
				name: 'I need to get a jewel.',
				icon: ic_diamond,
			},
			{
				name: 'Do you have any other jewels at the back?',
				icon: ic_meeting_room,
			},
			{
				name: 'I need to use the bathroom.',
				icon: ic_wc,
			},
		],

		[DialogueStates.EXPLANATION]: undefined,
		[DialogueStates.BACKROOM]: undefined,
		[DialogueStates.BATHROOM_ENDING]: undefined,

		[DialogueStates.JEWEL_1]: JewelChoices,
		[DialogueStates.JEWEL_2]: JewelChoices,
		[DialogueStates.JEWEL_3]: JewelChoices,
		[DialogueStates.JEWEL_4]: JewelChoices,
		[DialogueStates.JEWEL_5]: JewelChoices,
		[DialogueStates.JEWEL_6]: JewelChoices,
		[DialogueStates.JEWEL_7]: JewelChoices,
		[DialogueStates.JEWEL_8]: JewelChoices,
		[DialogueStates.JEWEL_9]: JewelChoices,
		[DialogueStates.JEWEL_10]: JewelChoices,

		[DialogueStates.JEWEL_BUY_ENDING]: undefined,
		[DialogueStates.JEWEL_ASK_PRICE]: [
			{
				name: "Sounds good, I'll take it!",
				icon: ic_money,
			},
			{
				name: "No thanks, I'll pass.",
				icon: ic_question_mark,
			},
		],
	};
	const DialogueSequence: Record<
		DialogueStates,
		DialogueStates[] | DialogueStates
	> = {
		[DialogueStates.NONE]: DialogueStates.GREETING_1,
		[DialogueStates.GREETING_1]: [DialogueStates.EXPLANATION],
		[DialogueStates.GREETING_2]: [
			DialogueStates.EXPLANATION,
			DialogueStates.BACKROOM,
		],
		[DialogueStates.GREETING_3]: [
			DialogueStates.EXPLANATION,
			DialogueStates.BACKROOM,
			DialogueStates.BATHROOM_ENDING,
		],

		[DialogueStates.EXPLANATION]: DialogueStates.NONE,
		[DialogueStates.BACKROOM]: DialogueStates.NONE,
		[DialogueStates.BATHROOM_ENDING]: DialogueStates.NONE,

		[DialogueStates.JEWEL_1]: JewelSequence,
		[DialogueStates.JEWEL_2]: JewelSequence,
		[DialogueStates.JEWEL_3]: JewelSequence,
		[DialogueStates.JEWEL_4]: JewelSequence,
		[DialogueStates.JEWEL_5]: JewelSequence,
		[DialogueStates.JEWEL_6]: JewelSequence,
		[DialogueStates.JEWEL_7]: JewelSequence,
		[DialogueStates.JEWEL_8]: JewelSequence,
		[DialogueStates.JEWEL_9]: JewelSequence,
		[DialogueStates.JEWEL_10]: JewelSequence,

		[DialogueStates.JEWEL_BUY_ENDING]: DialogueStates.NONE,
		[DialogueStates.JEWEL_ASK_PRICE]: [
			DialogueStates.JEWEL_BUY_ENDING,
			DialogueStates.NONE,
		],
	};
	const EndingFailures = [DialogueStates.JEWEL_BUY_ENDING];
	const EndingSuccesses = [DialogueStates.BATHROOM_ENDING];
	const EndingTexts: Partial<Record<DialogueStates, string>> = {
		[DialogueStates.JEWEL_BUY_ENDING]: 'You lost one arm & one leg.',
		[DialogueStates.BATHROOM_ENDING]:
			"You find that the toilet is made of marble. Technically that's a free jewel right?",
	};

	let endingText = '';
	let dialogueState = DialogueStates.NONE;
	let dialogueActive = false;
	let greetCount = 0;

	const { exit } = useBuildingNav()!;

	const retry = () => {
		dialogueActive = false;
		dialogueState = DialogueStates.NONE;
		endingText = '';
		greetCount = 0;
	};

	const onDialogueChoice = ({
		detail: choice,
	}: CustomEvent<DialogueChoice>) => {
		for (const [k, v] of Object.entries(DialogueChoices))
			if (v)
				for (const [i, c] of v.entries()) {
					if (c === choice) {
						dialogueState = (
							DialogueSequence[
								Number(k) as keyof typeof DialogueSequence
							]! as DialogueStates[]
						)[i]!;
						dialogueActive = dialogueState !== DialogueStates.NONE;

						return;
					}
				}
	};

	const onDialogueFinish = () => {
		if (dialogueState === DialogueStates.NONE) return;

		if (
			EndingSuccesses.includes(dialogueState) ||
			EndingFailures.includes(dialogueState)
		) {
			endingText = EndingTexts[dialogueState] ?? '';
			return;
		}

		dialogueState =
			(DialogueSequence[dialogueState]! as DialogueStates) ??
			DialogueStates.NONE;
		if (!(dialogueState === DialogueStates.NONE))
			setTimeout(() => (dialogueActive = true));
	};
</script>

<MetaphysicalSupplyStoreScene
	on:keeper={() => {
		switch (greetCount) {
			case 0:
				dialogueState = DialogueStates.GREETING_1;
				break;
			case 1:
				dialogueState = DialogueStates.GREETING_2;
				break;
			case 2:
			default:
				dialogueState = DialogueStates.GREETING_3;
				break;
		}

		setTimeout(() => (dialogueActive = true));
	}}
	on:rock={({ detail: { i } }) => {
		switch (i % 10) {
			case 0:
				dialogueState = DialogueStates.JEWEL_1;
				break;
			case 1:
				dialogueState = DialogueStates.JEWEL_2;
				break;
			case 2:
				dialogueState = DialogueStates.JEWEL_3;
				break;
			case 3:
				dialogueState = DialogueStates.JEWEL_4;
				break;
			case 4:
				dialogueState = DialogueStates.JEWEL_5;
				break;
			case 5:
				dialogueState = DialogueStates.JEWEL_6;
				break;
			case 6:
				dialogueState = DialogueStates.JEWEL_7;
				break;
			case 7:
				dialogueState = DialogueStates.JEWEL_8;
				break;
			case 8:
				dialogueState = DialogueStates.JEWEL_9;
				break;
			case 9:
			default:
				dialogueState = DialogueStates.JEWEL_10;
				break;
		}

		setTimeout(() => (dialogueActive = true));
	}}
/>
<Dialogue
	bind:active={dialogueActive}
	name="Ms. Jewel"
	text={DialogueTexts[dialogueState] ?? ''}
	choices={DialogueChoices[dialogueState]}
	on:choice={onDialogueChoice}
	on:finish={() => {
		if (dialogueState === DialogueStates.EXPLANATION) greetCount = 1;
		else if (dialogueState === DialogueStates.BACKROOM) greetCount = 2;
		else if (dialogueState === DialogueStates.BATHROOM_ENDING)
			greetCount = 3;
	}}
	on:finish={onDialogueFinish}
/>
{#if endingText}
	{#if EndingSuccesses.includes(dialogueState)}
		{(completable[info.id]?.set(true), '')}
		<BuildingSuccess
			on:retry={retry}
			on:complete={exit}
		>
			{endingText}
		</BuildingSuccess>
	{:else if EndingFailures.includes(dialogueState)}
		<BuildingFailure
			on:retry={retry}
			on:exit={exit}
		>
			{endingText}
		</BuildingFailure>
	{/if}
{/if}

<style lang="postcss">
</style>
