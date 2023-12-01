<script lang="ts">
	import { GLTF, HTML, useGltfAnimations } from '@threlte/extras';
	import { createEventDispatcher } from 'svelte';
	import glb_globe from '../../../../assets/routes/building/06-voting-booth/lib/globe/globe.glb?url';
	import BobbleSkullTactile from '../../../../lib/3d/tactile/BobbleSkullTactile.svelte';
	import TableTactile from '../../../../lib/3d/tactile/TableTactile.svelte';
	import Dialogue from '../../../../lib/dialogue/Dialogue.svelte';
	import Marquee from '../../../lib/caution/Marquee.svelte';

	const dispatch = createEventDispatcher();

	export let active = true;
	export let news: string[];
	export let i = 0;

	const name = 'Mr. New Sanchor';

	const {
		gltf: globeGltf,
		actions: globeActions,
		mixer: globeMixer,
	} = useGltfAnimations<'Animation'>();

	$: if ($globeActions.Animation) {
		$globeActions.Animation.play();
		$globeActions.Animation.timeScale = 0.01;
	}
</script>

<HTML
	position={[0, 0.8, 0]}
	center
>
	<div class="scrolling-heading">
		<Marquee duration={15}
			>Lorem Ipsum. Bob is out of the office today, & no one is here to
			add a scrolling headline, so all you get is a placeholder.</Marquee
		>
	</div>
</HTML>
<!-- <HTML
	position={[0, 0.6, 0]}
	center
>
	<h1 class="heading">De&nbsp;News</h1>
</HTML> -->
<TableTactile
	widthSurface={10}
	heightLeg={10}
	position={[0, -0.4, 0]}
	gapCloth={0.01}
/>
<BobbleSkullTactile
	{name}
	position={[0, 0, -1]}
	scale={0.3}
/>
<GLTF
	url={glb_globe}
	useDraco
	bind:gltf={$globeGltf}
	position={[0, 0, -3]}
	scale={10}
/>
{#each news as text, ii}
	<Dialogue
		{name}
		active={active && ii === i}
		text={(i === 0
			? "Welcome to your daily scoop of news, I'm New Sanchor.\n\nFirst up...\n\n"
			: 'In other news...\n\n') + text}
		on:finish={() => {
			if (i < news.length - 1) ++i;
			else {
				active = false;
				i = 0;
				dispatch('finish');
			}
		}}
	/>
{/each}

<style lang="postcss">
	.scrolling-heading {
		width: calc(100vw + 100px);
		background: var(----colour-background-primary);
		padding: 14px;
		box-sizing: border-box;
		text-transform: uppercase;
		font-weight: 900;
	}

	.heading {
		position: relative;
		width: 90vw;
		font-size: 4em;
		color: var(----colour-text-primary);
		/* border: 1px solid var(----colour-text-tertiary); */
		/* padding: 0.2em 0.5em; */
		border-radius: 9999px;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 170px;
			border-radius: 9999px;
			/* border: 1px solid var(----colour-text-tertiary);
			background: var(----colour-background-primary); */
			/* backdrop-filter: blur(10px); */
			z-index: -1;
		}
	}
</style>
