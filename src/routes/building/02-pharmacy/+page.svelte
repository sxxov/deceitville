<script lang="ts">
	import Dialogue from '../../../lib/dialogue/Dialogue.svelte';
	import type { DialogueChoice } from '../../../lib/dialogue/DialogueChoice';
	import { completable } from '../../lib/health/completion';
	import BuildingFailure from '../lib/ending/BuildingFailure.svelte';
	import BuildingSuccess from '../lib/ending/BuildingSuccess.svelte';
	import { useBuildingNav } from '../lib/nav/useBuildingNav';
	import { info } from './@info';
	import PharmacyScene from './lib/PharmacyScene.svelte';
	import {
		ic_book,
		ic_clear,
		ic_done,
		ic_face_retouching_natural,
		ic_favorite,
		ic_medication_liquid,
		ic_vaccines,
	} from 'maic/two_tone';

	enum DialogueStates {
		NONE,
		GREETING,
		GREETING_ILLEGAL_DRUGS_ENDING,
		GREETING_NO_THANKS_ENDING,
		COMPLIMENT,
		COMPLIMENT_BEARD,
		COMPLIMENT_JAW_LINE,
		COMPLIMENT_SKIN,
		COMPLIMENT_W_RIZZ_ENDING,
		PRESCRIPTION,
		PRESCRIPTION_CONTRACT,
		PRESCRIPTION_CONTRACT_AGREE_ENDING,
		PRESCRIPTION_CONTRACT_READ,
		PRESCRIPTION_CONTRACT_READ_CONFIRM,
		PRESCRIPTION_CONTRACT_GIVE,
		PRESCRIPTION_CONTRACT_DECLINE_ENDING,
	}
	const DialogueTexts: Partial<Record<DialogueStates, string>> = {
		[DialogueStates.GREETING]: 'Hello there!\n\nHow can I help you?',
		[DialogueStates.GREETING_ILLEGAL_DRUGS_ENDING]:
			'Oh, uh, I think you want the pharmacy next door.',
		[DialogueStates.GREETING_NO_THANKS_ENDING]:
			'Oh, uh, okay. Have a nice day.',

		[DialogueStates.COMPLIMENT]:
			"Oh, uh, thanks. I guess. I've been growing it out for centuries but it never seems to get any longer.",
		[DialogueStates.COMPLIMENT_BEARD]:
			"Jeez, thanks. Sometimes I like to pretend I'm a wizard or something.",
		[DialogueStates.COMPLIMENT_JAW_LINE]:
			'Ahh, hehe, yeah I guess I do have a pretty good jaw line.',
		[DialogueStates.COMPLIMENT_SKIN]:
			"Finally someone who notices my skin care routine. I've been using the same moisturiser for eons & it's really paying off.",
		[DialogueStates.COMPLIMENT_W_RIZZ_ENDING]:
			"Oh, so sudden!\n\nI guess...\n\nI'll just finish up here & meet you out back in 5 minutes.",

		[DialogueStates.PRESCRIPTION]:
			'Ah yes your prescription.\n\nLet me get that for you...',
		[DialogueStates.PRESCRIPTION_CONTRACT]:
			'Here you go.\n\nI just need you to sign here,\nhere,\n& here.',
		[DialogueStates.PRESCRIPTION_CONTRACT_AGREE_ENDING]:
			'Great! Here you go.',
		[DialogueStates.PRESCRIPTION_CONTRACT_READ]:
			"Oh, uh, no you don't need to read it.\n\nJust sign here,\nhere,\n& here.",
		[DialogueStates.PRESCRIPTION_CONTRACT_READ_CONFIRM]:
			"I mean like, it's long & boring right?\n\nYou've got better things to do with your life.\n\nLike travel the world & live your dreams.\n\nYou're young. Use all the time you have to the fullest! These are the bestest years you will have & I believe that you have so much potential to be unlocked.\n\nTake it from an oldie like me, oh how I wish I could be as young as you.\n\nI remember getting myself in all sorts of trouble.\n\nAhh, the good old days.\n\nJust sign here,\nhere,\n& here.",
		[DialogueStates.PRESCRIPTION_CONTRACT_GIVE]:
			"Okay yeah if you like, really insist or something. I guess you can read it.\n\nJust don't tell anyone I gave it to you.",
		[DialogueStates.PRESCRIPTION_CONTRACT_DECLINE_ENDING]:
			"Sigh, the boss isn't gonna wanna hear about this.",
	};
	const DialogueChoices: Partial<
		Record<DialogueStates, [DialogueChoice, ...DialogueChoice[]]>
	> = {
		[DialogueStates.GREETING]: [
			{
				name: 'I need my prescription.',
				icon: ic_medication_liquid,
			},
			{
				name: 'I need some illegal drugs.',
				icon: ic_vaccines,
			},
			{
				name: 'I like your hair.',
				icon: ic_face_retouching_natural,
			},
			{
				name: 'No thank you.',
				icon: ic_clear,
			},
		],
		[DialogueStates.COMPLIMENT]: [
			{
				name: 'Your beard is amazing.',
				icon: ic_face_retouching_natural,
			},
		],
		[DialogueStates.COMPLIMENT_BEARD]: [
			{
				name: 'You have a great jaw line.',
				icon: ic_face_retouching_natural,
			},
		],
		[DialogueStates.COMPLIMENT_JAW_LINE]: [
			{
				name: 'Your skin is so smooth.',
				icon: ic_face_retouching_natural,
			},
		],
		[DialogueStates.COMPLIMENT_SKIN]: [
			{
				name: 'Will you go out with me?',
				icon: ic_favorite,
			},
		],
		[DialogueStates.PRESCRIPTION_CONTRACT]: [
			{
				name: 'Agree to the terms & conditions.',
				icon: ic_done,
			},
			{
				name: 'Read the terms & conditions.',
				icon: ic_book,
			},
		],
		[DialogueStates.PRESCRIPTION_CONTRACT_READ]: [
			{
				name: 'Agree to the terms & conditions.',
				icon: ic_done,
			},
			{
				name: 'Read the terms & conditions.',
				icon: ic_book,
			},
		],
		[DialogueStates.PRESCRIPTION_CONTRACT_READ_CONFIRM]: [
			{
				name: 'Agree to the terms & conditions.',
				icon: ic_done,
			},
			{
				name: 'Read the terms & conditions.',
				icon: ic_book,
			},
		],
		[DialogueStates.PRESCRIPTION_CONTRACT_GIVE]: [
			{
				name: 'Agree to the terms & conditions.',
				icon: ic_done,
			},
			{
				name: 'Decline the terms & conditions.',
				icon: ic_book,
			},
		],
	};
	const DialogueSequence: Partial<
		Record<DialogueStates, DialogueStates[] | DialogueStates>
	> = {
		[DialogueStates.NONE]: DialogueStates.GREETING,
		[DialogueStates.GREETING]: [
			DialogueStates.PRESCRIPTION,
			DialogueStates.GREETING_ILLEGAL_DRUGS_ENDING,
			DialogueStates.COMPLIMENT,
			DialogueStates.GREETING_NO_THANKS_ENDING,
		],
		[DialogueStates.COMPLIMENT]: [DialogueStates.COMPLIMENT_BEARD],
		[DialogueStates.COMPLIMENT_BEARD]: [DialogueStates.COMPLIMENT_JAW_LINE],
		[DialogueStates.COMPLIMENT_JAW_LINE]: [DialogueStates.COMPLIMENT_SKIN],
		[DialogueStates.COMPLIMENT_SKIN]: [
			DialogueStates.COMPLIMENT_W_RIZZ_ENDING,
		],
		[DialogueStates.PRESCRIPTION]: DialogueStates.PRESCRIPTION_CONTRACT,
		[DialogueStates.PRESCRIPTION_CONTRACT]: [
			DialogueStates.PRESCRIPTION_CONTRACT_AGREE_ENDING,
			DialogueStates.PRESCRIPTION_CONTRACT_READ,
		],
		[DialogueStates.PRESCRIPTION_CONTRACT_READ]: [
			DialogueStates.PRESCRIPTION_CONTRACT_AGREE_ENDING,
			DialogueStates.PRESCRIPTION_CONTRACT_READ_CONFIRM,
		],
		[DialogueStates.PRESCRIPTION_CONTRACT_READ_CONFIRM]: [
			DialogueStates.PRESCRIPTION_CONTRACT_AGREE_ENDING,
			DialogueStates.PRESCRIPTION_CONTRACT_GIVE,
		],
		[DialogueStates.PRESCRIPTION_CONTRACT_GIVE]: [
			DialogueStates.PRESCRIPTION_CONTRACT_AGREE_ENDING,
			DialogueStates.PRESCRIPTION_CONTRACT_DECLINE_ENDING,
		],
	};
	const EndingFailures = [
		DialogueStates.COMPLIMENT_W_RIZZ_ENDING,
		DialogueStates.GREETING_ILLEGAL_DRUGS_ENDING,
		DialogueStates.GREETING_NO_THANKS_ENDING,
		DialogueStates.PRESCRIPTION_CONTRACT_AGREE_ENDING,
	];
	const EndingSuccesses = [
		DialogueStates.PRESCRIPTION_CONTRACT_DECLINE_ENDING,
	];
	const EndingTexts: Partial<Record<DialogueStates, string>> = {
		[DialogueStates.GREETING_ILLEGAL_DRUGS_ENDING]: 'You were arrested.',
		[DialogueStates.GREETING_NO_THANKS_ENDING]:
			'You failed to get your prescription.',

		[DialogueStates.COMPLIMENT_W_RIZZ_ENDING]:
			"He's a minor, the police are waiting outside.",

		[DialogueStates.PRESCRIPTION_CONTRACT_AGREE_ENDING]:
			"You now owe three kidneys to the pharmacy.\nNot sure how you're gonna pay that one off.",
		[DialogueStates.PRESCRIPTION_CONTRACT_DECLINE_ENDING]:
			'You took your prescription & left.',
	};

	let endingText = '';
	let dialogueState = DialogueStates.NONE;
	let dialogueActive = false;

	const { exit } = useBuildingNav()!;

	const retry = () => {
		dialogueActive = false;
		dialogueState = DialogueStates.NONE;
		endingText = '';
	};

	const onDialogueChoice = ({
		detail: choice,
	}: CustomEvent<DialogueChoice>) => {
		for (const [k, v] of Object.entries(DialogueChoices)) {
			for (const [i, c] of v.entries()) {
				if (c === choice) {
					dialogueState = (
						DialogueSequence[
							Number(k) as keyof typeof DialogueSequence
						]! as DialogueStates[]
					)[i]!;

					return;
				}
			}
		}
	};

	const onDialogueFinish = () => {
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

<PharmacyScene
	on:pharmacist={() => {
		dialogueActive = true;
		dialogueState = DialogueStates.GREETING;
	}}
/>
<Dialogue
	bind:active={dialogueActive}
	name="Mr. Pharmacist"
	text={DialogueTexts[dialogueState] ?? ''}
	choices={DialogueChoices[dialogueState]}
	on:choice={onDialogueChoice}
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
