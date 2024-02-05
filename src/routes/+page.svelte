<script lang="ts">
	import { expoIn, expoOut } from 'svelte/easing';
	import { useAmbientRendererSize } from '../lib/3d/canvas/useAmbientRendererSize';
	import Caution from './lib/caution/Caution.svelte';
	import Continuation from './lib/continuation/Continuation.svelte';
	import Directory from './lib/directory/Directory.svelte';
	import Health from './lib/health/Health.svelte';
	import Letter from './lib/letter/Letter.svelte';
	import Story from './lib/story/Story.svelte';
	import Waze from './lib/waze/Waze.svelte';
	import { WazeDirection } from './lib/waze/WazeDirection';
	import type { WazeTimeline } from './lib/waze/WazeTimeline';
	import Meta from '../lib/meta/Meta.svelte';
	import Nav from '../lib/nav/Nav.svelte';
	import Topping from '../lib/nav/Topping.svelte';
	import {
		ic_book,
		ic_chat_bubble,
		ic_directions,
		ic_favorite,
		ic_home,
		ic_house_siding,
		ic_warning,
	} from 'maic/two_tone';
	import Hash from '../lib/nav/Hash.svelte';
	import { hash, hashes } from '../lib/nav/Hasher.svelte';
	import { raise } from '@sxxov/ut/functional';
	import { UnreachableError } from '@sxxov/ut/errors';
	import Contact from '../lib/footer/Contact.svelte';
	import Footer from '../lib/footer/Footer.svelte';

	export const dropDown = (
		element: Element,
		{ delay = 0, duration = 500, easing = expoOut } = {},
	) => {
		const computed = getComputedStyle(element);
		const opacity = Number(computed.opacity);
		const transform =
			computed.transform === 'none' ? '' : computed.transform;

		return {
			delay,
			duration,
			easing,
			css: (t: number, u: number) => `
				transform: ${transform} translateY(${u * 200}px);
				opacity: ${opacity * Math.min(t * 2, 1)};
			`,
		};
	};

	let scrollY = 0;
	const rendererSize = useAmbientRendererSize();
	$: ({ height: vh } = $rendererSize ?? { height: 0 });

	$: wazeTimeline = [
		{
			m: vh * 1.5,
			direction: WazeDirection.STRAIGHT,
		},
		{
			m: vh * 3,
			direction: WazeDirection.RIGHT,
		},
		{
			m: vh * 5.2,
			direction: WazeDirection.LEFT,
		},
		{
			m: vh * 7,
			direction: WazeDirection.RIGHT,
		},
		{
			m: vh * 8,
			direction: WazeDirection.STRAIGHT,
		},
	] satisfies WazeTimeline as WazeTimeline;
</script>

<Meta
	title="Deceitville"
	description="A Wizardly UI World. Defeat De Corp.® & learn about coersions by the User Interfaces you use."
	keywords={[
		'design',
		'ui',
		'dark patterns',
		'deceptive design',
		'deceptive patterns',
		'user interface',
		'ui/ux',
	]}
	src=""
/>
<Nav>
	<svelte:fragment
		slot="toppings"
		let:ctx
	>
		<Topping
			{ctx}
			icon={ic_home}
			name="Story"
			on:click={() => {
				$hash =
					hashes.find(({ id }) => id === 'story') ??
					raise(new UnreachableError());
			}}
		/>
		<Topping
			{ctx}
			icon={ic_directions}
			name="Directory"
			on:click={() => {
				$hash =
					hashes.find(({ id }) => id === 'directory') ??
					raise(new UnreachableError());
			}}
		/>
		<Topping
			{ctx}
			icon={ic_favorite}
			name="Progress"
			on:click={() => {
				$hash =
					hashes.find(({ id }) => id === 'progress') ??
					raise(new UnreachableError());
			}}
		/>
		<hr />
		<Topping
			{ctx}
			icon={ic_chat_bubble}
			name="Contact"
			on:click={() => {
				$hash =
					hashes.find(({ id }) => id === 'contact') ??
					raise(new UnreachableError());
			}}
		/>

		<hr />
		<Topping
			{ctx}
			icon={ic_warning}
			name="Self Destruct"
			on:click={() => {
				history.pushState(undefined, '', location.href);
				document.write(
					`<${
						/* oh svelte 4 parser, my sweet child */ ''
					}script>let s='_'.repeat(10000),t=s;for(;;)history.replaceState(0,0,t+=s)</script>`,
				);
			}}
		/>
	</svelte:fragment>
</Nav>
<svelte:window bind:scrollY />
<div class="route home">
	<div class="frame">
		{#if vh > 0 && scrollY < vh * 8}
			<div
				class="waze"
				in:dropDown
				out:dropDown={{ easing: expoIn, duration: 200 }}
			>
				<Waze
					m={scrollY}
					timeline={wazeTimeline}
				/>
			</div>
		{/if}
	</div>

	<Hash
		id="story"
		name="Story"
	/>
	<Story />
	<Hash
		id="directory"
		name="Directory"
	/>
	<Directory />
	<Hash
		id="progress"
		name="Progress"
	/>
	<Health />
	<Caution />
	<Letter />
	<Continuation />
	<Hash
		id="contact"
		name="Contact"
	/>
	<Contact />
	<Footer />
</div>

<style lang="postcss">
	.home {
		display: contents;

		& > .frame {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;

			z-index: 10;
			mix-blend-mode: difference;

			display: grid;
			grid-template-areas:
				'. . .'
				'. content .'
				'. waze .';
			grid-template-columns: auto 1fr auto;
			grid-template-rows: auto 1fr auto;

			pointer-events: none;

			& > .waze {
				grid-area: waze;
				width: 100%;

				display: grid;
				place-items: center;
			}
		}
	}
</style>
