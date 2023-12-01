<script lang="ts">
	import type { ReadonlyDeep } from 'type-fest';
	import VotingBallotTactile from './VotingBallotTactile.svelte';
	import type { VotingBoothPolicy } from './VotingBoothPolicy';
	import {
		bezierQuintIn,
		bezierQuintInOut,
		bezierQuintOut,
	} from '@sxxov/ut/bezier/beziers';
	import { Tween } from '@sxxov/ut/animation';
	import ButtonTactile from '../../../../lib/3d/tactile/ButtonTactile.svelte';
	import { Text } from '@threlte/extras';
	import * as normals from './paperNormals';
	import { createEventDispatcher } from 'svelte';

	interface $$Events {
		submit: CustomEvent<{
			choices: Record<string, -1 | 0 | 1>;
			newsletter: boolean;
		}>;
	}

	const dispatch = createEventDispatcher<{
		[k in keyof $$Events]: $$Events[k]['detail'];
	}>();

	export let i = 0;
	export let policies: ReadonlyDeep<Record<string, VotingBoothPolicy>>;

	$: entries = Object.entries(policies);
	$: chosens = Object.fromEntries(entries.map(([k]) => [k, false]));
	$: choices = Object.fromEntries(entries.map(([k]) => [k, -1])) as Record<
		string,
		-1 | 0 | 1
	>;

	const nextTween = new Tween(0, 1, 1000, bezierQuintOut);
	const prevTween = new Tween(0, -1, 1000, bezierQuintOut);
	const finishedTween = new Tween(0, 1.5, 300, bezierQuintInOut);

	const finishedChoicesInitial: VotingBoothPolicy['choices'] = ['Yes', 'No'];
	const resetFinished = () => {
		finished = false;
		finishedMaybeCount = 0;
		finishedPolicy.choices = finishedChoicesInitial;
		finishedTween.seekToProgress(0);
	};
	$: if (i === 0) resetFinished();

	const finishedPolicy: VotingBoothPolicy = {
		short: 'Finished',
		title: 'Subscribe to our newsletter?',
		description: 'Submit your ballot to the ballot box.',
		backgroundColour: '#aaaaaa',
		backgroundNormalMapSrc: normals.cardboard,
		textColour: '#ffffff',
		good: false,
		choices: finishedChoicesInitial,
	};
	let finishedMaybeCount = 0;
	let finished = false;
	const onFinishedSubmit = (yesOrNo: boolean) => {
		no: {
			yes: switch (++finishedMaybeCount) {
				case 1:
					if (yesOrNo) break yes;
					finishedPolicy.choices = ['No', 'Yes'];
					break no;
				case 2:
					if (!yesOrNo) break yes;
					finishedPolicy.choices = ['Yes', 'Maybe'];
					break no;
				case 3:
					if (yesOrNo) break yes;
					finishedPolicy.choices = ['I smell bad', 'Yes'];
					break no;
				case 4:
					if (!yesOrNo) break yes;
					finishedPolicy.choices = ['Yes', 'Ewwwww'];
					break no;
				case 5:
					if (yesOrNo) break yes;
					finishedPolicy.choices = ["I don't take baths", 'I do'];
					break no;
				case 6:
					if (!yesOrNo) break yes;
					finishedPolicy.choices = ['Yes', 'Fine, fine: No'];
					break no;
				default:
					if (yesOrNo) break yes;
					dispatch('submit', { choices, newsletter: false });
					finished = true;
					break no;
			}

			dispatch('submit', { choices, newsletter: true });
			finished = true;
		}
	};
	$: if (finished)
		void finishedTween.play().then(() => {
			i = entries.length;
		});
</script>

{#each entries as [k, policy], ii}
	<ButtonTactile
		disabled={ii === i ||
			!chosens[Math.max(ii - 1, 0)] ||
			$nextTween !== 0 ||
			$prevTween !== 0}
		on:click={() => {
			if (ii === i || nextTween.playing || prevTween.playing) return;
			if (ii > i) {
				void nextTween.play().then(() => {
					nextTween.seekToProgress(0);
					i = ii;
				});
			} else {
				void prevTween.play().then(() => {
					prevTween.seekToProgress(0);
					i = ii;
				});
			}
		}}
	>
		<VotingBallotTactile
			index={ii}
			{policy}
			disabled={ii !== i}
			position={[
				0,
				(ii - $nextTween - $prevTween - $finishedTween - i) * -1.5,
				0,
			]}
			opacity={(entries.length / 2 -
				Math.abs(ii - $nextTween - $prevTween - $finishedTween - i)) /
				2}
			on:yes={() => {
				if (ii !== i) return;

				chosens[k] = true;
				choices[k] = 0;
				void nextTween.play().then(() => {
					nextTween.seekToProgress(0);
					++i;
				});
			}}
			on:no={() => {
				if (ii !== i) return;

				chosens[k] = true;
				choices[k] = 1;
				void nextTween.play().then(() => {
					nextTween.seekToProgress(0);
					++i;
				});
			}}
		/>
	</ButtonTactile>
{/each}
<ButtonTactile
	disabled={$nextTween !== 0}
	on:click={() => {
		if (i !== entries.length) {
			void nextTween.play().then(() => {
				nextTween.seekToProgress(0);
				i = entries.length;
			});
		}
	}}
>
	<!-- <Text
		position={[
			0,
			(entries.length - $nextTween - $prevTween - curr) * -1.5,
			0,
		]}>Submit</Text
	> -->
	<VotingBallotTactile
		index={entries.length}
		policy={finishedPolicy}
		position={[
			0,
			(entries.length - $nextTween - $prevTween - $finishedTween - i) *
				-1.5,
			0,
		]}
		opacity={(entries.length / 2 -
			Math.abs(
				entries.length - $nextTween - $prevTween - $finishedTween - i,
			)) /
			2}
		on:yes={() => {
			onFinishedSubmit(true);
		}}
		on:no={() => {
			onFinishedSubmit(false);
		}}
	/>
</ButtonTactile>
