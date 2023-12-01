<script lang="ts">
	import { clamp } from '@sxxov/ut/math';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { useGltf, useGltfAnimations } from '@threlte/extras';
	import { createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import glb_news from '../../../../assets/routes/building/06-voting-booth/lib/news/news.glb?url';
	import EphemeralCamera from '../../../../lib/3d/camera/EphemeralCamera.svelte';
	import { useAmbientInteractivity } from '../../../../lib/3d/canvas/useAmbientInteractivity';
	import { useAmbientRendererSize } from '../../../../lib/3d/canvas/useAmbientRendererSize';
	import Peek from '../../lib/peek/Peek.svelte';
	import NewsRoomTactile from './NewsRoomTactile.svelte';
	import VotingBallotStackTactile from './VotingBallotStackTactile.svelte';
	import { VotingBoothOutcomes } from './VotingBoothOutcomes';
	import { VotingBoothPolicies } from './VotingBoothPolicies';
	import { VotingBoothSceneState } from './VotingBoothSceneState';

	useThrelte();
	useAmbientInteractivity();
	const size = useAmbientRendererSize()!;
	const dispatch = createEventDispatcher();

	export let state: VotingBoothSceneState = VotingBoothSceneState.IDLE;

	let i = 0;

	const newsGltf = useGltf(glb_news, { useDraco: true });
	const { actions, mixer } = useGltfAnimations<'Animation'>(newsGltf);

	let newsIntroPlaying = false;
	let newsRoomIn = false;
	let newsRoomActive = false;
	const waitForMixerFinish = async () =>
		new Promise<void>((resolve) => {
			const onFinished = () => {
				mixer.removeEventListener('finished', onFinished);
				resolve();
			};

			mixer.addEventListener('finished', onFinished);
		});
	$: if (newsIntroPlaying && $actions.Animation) {
		$actions.Animation.reset();
		$actions.Animation.play();
		$actions.Animation.loop = THREE.LoopOnce;
	}
	useFrame(() => {
		const action = $actions.Animation;
		if (!newsIntroPlaying || newsRoomIn || !action) return;
		if (action.time >= 250 / 60) newsRoomIn = true;
	});
	const playNewsIntro = async () => {
		newsIntroPlaying = true;
		newsRoomIn = false;
		newsRoomActive = false;
		await waitForMixerFinish();
		state = VotingBoothSceneState.NEWS;
		newsIntroPlaying = false;
		newsRoomActive = true;
	};

	$: newsIntroAspect = Math.min(16 / 9, $size.width / $size.height);
	$: newsIntroScale = newsIntroPlaying ? clamp(newsIntroAspect, 0.7, 1) : 0;

	const votingBoothPoliciesEntries = Object.entries(VotingBoothPolicies) as [
		keyof typeof VotingBoothPolicies,
		(typeof VotingBoothPolicies)[keyof typeof VotingBoothPolicies],
	][];
	const votingBoothOutcomesEntries = Object.entries(VotingBoothOutcomes) as [
		keyof typeof VotingBoothOutcomes,
		(typeof VotingBoothOutcomes)[keyof typeof VotingBoothOutcomes],
	][];

	let choices:
		| Record<keyof typeof VotingBoothPolicies, -1 | 0 | 1>
		| undefined;
	$: choicesEntries = choices
		? (Object.entries(choices) as [
				keyof typeof VotingBoothPolicies,
				-1 | 0 | 1,
		  ][])
		: undefined;
	let newsletter = true;

	$: news = choices
		? votingBoothOutcomesEntries
				.map(
					([k, outcome]) =>
						`${
							choices![k] ===
							(VotingBoothPolicies[k]!.good ? 0 : 1)
								? 'HEARTWARMING: '
								: 'SAD: '
						}${
							outcome[
								choices![k] === 0
									? 0
									: choices![k] === 1
									  ? 1
									  : 0
							]
						}`,
				)
				.concat(
					newsletter
						? [
								'BONUS STORY: Local man subscribes to newsletter due to unfortunate circumstances.\n\nWe give our condolences.',
						  ]
						: [],
				)
		: [];
	$: good =
		choicesEntries?.every(
			([k, choice]) => choice === (VotingBoothPolicies[k]!.good ? 0 : 1),
		) && !newsletter;

	const reset = () => {
		choices = undefined;
		newsletter = true;
		if ($actions.Animation) $actions.Animation.reset();
		newsIntroPlaying = false;
		newsRoomIn = false;
		newsRoomActive = false;
		i = 0;

		state = VotingBoothSceneState.IDLE;
	};
	$: if (state === VotingBoothSceneState.RESET) reset();
</script>

<Peek
	magnetic
	range={60}
>
	<EphemeralCamera position={[0, 0, 4]}>
		<!-- <OrbitControls enableDamping /> -->
		{#if $newsGltf}
			<T
				is={$newsGltf.scene}
				position={[0, 0, -1]}
				scale={newsIntroScale}
			/>
		{/if}
	</EphemeralCamera>
</Peek>

<VotingBallotStackTactile
	bind:i
	policies={VotingBoothPolicies}
	on:submit={({ detail: { choices: c, newsletter: n } }) => {
		choices = c;
		newsletter = n;
		void playNewsIntro();
	}}
/>

<T.Group visible={newsRoomIn}>
	<NewsRoomTactile
		{news}
		active={newsRoomActive}
		on:finish={() => {
			if (good) dispatch('good');
			else dispatch('bad');
		}}
	/>
</T.Group>
