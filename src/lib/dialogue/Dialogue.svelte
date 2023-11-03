<script lang="ts">
	import { browser } from '$app/environment';
	import { Button, ButtonVariants, Ripple } from '@sxxov/sv/button';
	import { R } from '@sxxov/sv/functional';
	import { Svg } from '@sxxov/sv/svg';
	import { whenResize } from '@sxxov/sv/ut/action/actions';
	import { IllegalStateError } from '@sxxov/ut/errors';
	import { raise } from '@sxxov/ut/functional';
	import { Store } from '@sxxov/ut/store';
	import {
		ic_circle,
		ic_done,
		ic_record_voice_over,
		ic_skip_next,
	} from 'maic/two_tone';
	import { createEventDispatcher } from 'svelte';
	import type { DialogueChoice } from './DialogueChoice';

	enum CharState {
		SHOWN = 0b0000_0001_0000_0000,
		ELLIPSIS = 0b0000_0000_0000_0010,
		ORIGINAL = 0b0000_0000_0000_0001,

		UNSHOWN = 0b0000_0010_0000_0000,
		HIT_CHECKING = 0b0000_0000_0000_0100,
		PENDING = 0b0000_0000_0000_1000,

		DO_NOT_SHOW = 0b0000_0100_0000_0000,
	}

	const dispatch = createEventDispatcher();

	export let active = true;
	export let durationPerChar = 10;
	export let name = '???';
	export let text: string;
	export let choices: [DialogueChoice, ...DialogueChoice[]] | undefined =
		undefined;

	let height = 0;

	let chars: string[];
	let charStates: Store<CharState>[];
	let currChars: string[];
	let charSpans: HTMLSpanElement[] = [];
	let played: boolean;
	let choicesActive: boolean;
	let choicesShown: boolean;
	let i: number;
	let offset: number;
	const reset = () => {
		played = false;
		choicesActive = false;
		choicesShown = false;
		i = 0;
		offset = 0;
		chars = text.split('');
		currChars = chars;
		charSpans.length = text.length;
		charStates = chars.map(
			() => new Store(CharState.UNSHOWN | CharState.PENDING),
		);
	};
	reset();

	$: if (!active) dispatch('finish');

	$: setTimeout(() => {
		choicesShown = choicesActive;
	});

	let playing = false;
	$: hasMore = i < chars.length;
	const showChoices = () => {
		choicesActive = true;
	};
	const finish = () => {
		active = false;
	};
	const ff = () => {
		playing = false;
	};
	const next = () => {
		void play();
	};
	const onClick = () => {
		if (playing) ff();
		else if (i < chars.length) next();
		else if (choices) showChoices();
		else finish();
	};
	const play = async () => {
		if (playing) return;

		playing = true;
		currChars = chars.slice(i);
		offset = i;

		let nextDurationCompensation = 0;
		while (i < chars.length + 2) {
			if (i >= 0 && i < chars.length)
				charStates[i]!.set(CharState.UNSHOWN | CharState.HIT_CHECKING);

			if (i - 1 >= 0 && i - 1 < chars.length)
				if (charStates[i - 1]!.get() & CharState.HIT_CHECKING) {
					if (
						chars[i - 1] === '\n' &&
						chars[i - 2] === '\n' &&
						!(charStates[i - 2]!.get() & CharState.SHOWN)
					) {
						charStates[i - 1]!.set(
							CharState.UNSHOWN | CharState.ELLIPSIS,
						);

						break;
					}

					let span = charSpans[i - 1];

					if (span)
						if (span.offsetTop + span.offsetHeight > height) {
							charStates[i - 1]!.set(
								CharState.UNSHOWN | CharState.ELLIPSIS,
							);

							i -= 1;
							break;
						} else
							charStates[i - 1]!.set(
								CharState.UNSHOWN | CharState.ORIGINAL,
							);
					else
						charStates[i - 1]!.set(
							CharState.UNSHOWN | CharState.ORIGINAL,
						);
				} else
					charStates[i - 1]!.set(
						CharState.UNSHOWN | CharState.ORIGINAL,
					);

			if (i - 2 >= 0 && i - 2 < chars.length) {
				charStates[i - 2]!.update(
					(v) =>
						(v & ~(CharState.UNSHOWN | CharState.PENDING)) |
						CharState.SHOWN,
				);

				if (charStates[i - 2]!.get() & CharState.ELLIPSIS) {
					i -= 2;
					break;
				}
			}

			++i;

			if (playing && i > 1)
				// eslint-disable-next-line @typescript-eslint/no-loop-func
				await new Promise<void>((resolve) => {
					const startTime = performance.now();
					requestAnimationFrame(function raf(t) {
						const elapsedTime = t - startTime;
						const duration =
							durationPerChar + nextDurationCompensation;
						if (elapsedTime >= duration) {
							nextDurationCompensation = -(
								elapsedTime - durationPerChar
							);
							resolve();
						} else if (playing) requestAnimationFrame(raf);
						else resolve();
					});
				});
		}

		playing = false;
		played = true;
	};
	$: if (browser && active) {
		text;

		reset();
	}
	$: if (browser && text && active && height > 0 && !played) void play();
</script>

{#if browser}
	<div
		class="dialogue"
		role="presentation"
		use:whenResize={() => {
			reset();
			void play();
		}}
	>
		<div
			class="ripple"
			class:active
			role="presentation"
			on:click={onClick}
			on:keydown={(e) => {
				if (e.key === ' ') onClick();
			}}
		>
			<Ripple
				durationMin={2000}
				durationMax={5000}
			/>
		</div>
		<div class="spacer"></div>
		<div
			class="outer"
			class:active
		>
			<div class="content">
				<div
					class="inner"
					use:whenResize={({ height: h }) => {
						height = h;
					}}
				>
					<h4 class="speaker">
						{name}
						<Svg
							height="1em"
							width="1em"
							svg={ic_record_voice_over}
						/>
					</h4>
					<p
						class="text"
						class:playing
					>
						{#each currChars as char, currI}{@const i =
								currI + offset}<R
								r={charStates[i] ??
									raise(
										new IllegalStateError(
											`Missing state for char ${i}`,
										),
									)}
								let:v
								>{#if char === ' '}{' '}{:else}<span
										class="char _{i}"
										class:shown={v & CharState.SHOWN}
										class:unshown={v & CharState.UNSHOWN}
										class:hit-checking={v &
											CharState.HIT_CHECKING}
										class:pending={v & CharState.PENDING}
										class:ellipsis={v & CharState.ELLIPSIS}
										bind:this={charSpans[i]}>{char}</span
									>{/if}</R
							>{/each}
					</p>
					{#if !playing && active && !choicesActive}
						<div class="prompt">
							{#if hasMore}
								<Svg
									colour="transparent"
									height="1em"
									width="1em"
									svg={ic_skip_next}
								/>
							{:else}
								<Svg
									colour="transparent"
									height="1em"
									width="1em"
									svg={ic_circle}
								/>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		</div>
		{#if choices}
			<div
				class="choices"
				class:active={choicesActive}
				class:shown={choicesShown}
			>
				<div class="content">
					{#each choices as choice}
						<Button
							{...ButtonVariants.Secondary}
							{...ButtonVariants.Shadow.Sm}
							width="100%"
							height="max(100%, 56px)"
							colourBackground="----colour-background-primary"
							colourBackgroundHover="----colour-background-secondary"
							roundness={28}
							on:click={() => {
								dispatch('choice', choice);
							}}
						>
							<Svg
								slot="left"
								width="1em"
								height="1em"
								svg={choice.icon ?? ic_circle}
							/>
							<div class="content">
								<div class="name">{choice.name}</div>
								{#if choice.description}
									<div class="description">
										{choice.description}
									</div>
								{/if}
							</div>
						</Button>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.dialogue {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;

		z-index: 100;

		pointer-events: none;

		& > .ripple {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;

			z-index: 1;

			cursor: crosshair;
			user-select: none;
			-webkit-tap-highlight-color: none;
			-webkit-touch-callout: none;

			pointer-events: auto;

			&:not(.active) {
				pointer-events: none;
			}
		}

		& > .spacer {
			width: 100%;
			height: 0;

			flex-grow: 1;
		}

		& > .outer {
			position: relative;

			width: 100%;
			height: 600px;
			max-height: 50%;
			padding: 14px;
			box-sizing: border-box;

			display: flex;
			flex-direction: column;

			flex-grow: 0;

			&.active {
				animation: open-in 0.2s var(----ease-fast-slow);

				@keyframes open-in {
					from {
						max-height: 200px;
					}

					to {
						max-height: 50%;
					}
				}
			}

			&:not(.active) {
				display: none;
				animation: open-out 0.2s var(----ease-slow-fast);

				@keyframes open-out {
					from {
						display: block;
					}

					to {
						max-height: 200px;
					}
				}
			}

			& > .content {
				height: 100%;
				width: 100%;

				padding: 14px;
				box-sizing: border-box;

				background: var(----colour-background-primary);
				/* border: 1px solid var(----colour-text-tertiary); */
				border-radius: 42px;

				box-shadow: var(----shadow-sm), var(----shadow-inner-sm);

				& > .inner {
					position: relative;

					height: 100%;
					width: 100%;

					display: flex;
					flex-direction: column;
					gap: 14px;

					overflow: hidden;
					overflow: clip;

					& > .speaker {
						display: flex;
						align-items: center;
						gap: 7px;

						width: max-content;
						margin: 0;

						font-family: var(----font-family-sans);
						-webkit-text-stroke: unset;
						text-stroke: unset;
						color: var(----colour-text-primary);
						font-size: 1.5rem;
						font-weight: 500;

						padding: 14px;
						box-sizing: border-box;

						background: var(----colour-background-secondary);
						border: 1px solid var(----colour-text-secondary);
						border-radius: 28px;

						pointer-events: auto;
					}

					& > .text {
						margin: 0;
						height: 100%;

						font-size: 2rem;

						& > .char {
							white-space: pre;

							&.shown {
								visibility: visible;

								animation: in 0.5s 1 var(----ease-fast-slow);

								@keyframes in {
									0% {
										clip-path: inset(0 100% 0 0);
									}

									99% {
										clip-path: inset(0 0 0 0);
									}

									100% {
										clip-path: unset;
									}
								}
							}

							&.unshown {
								visibility: hidden;
							}

							&.hit-checking {
								visibility: hidden;
							}

							&.pending {
								visibility: hidden;
							}

							&.ellipsis {
								position: relative;

								&::after {
									content: '…';
									position: absolute;
									left: 0;
									visibility: visible;
									opacity: 0.5;
								}
							}
						}
					}

					& > .prompt {
						font-size: 4rem;

						position: absolute;
						right: 0;
						bottom: 0;

						padding: 7px;
						box-sizing: border-box;

						color: var(----colour-text-primary);
						border: 1px solid var(----colour-text-secondary);
						opacity: 0.3;
						border-radius: 28px;

						stroke-width: 0.02rem;
						stroke: var(----colour-text-primary);

						animation: pulse 1s infinite var(----ease-slow-slow);

						@keyframes pulse {
							0% {
								opacity: 0.3;
							}

							50% {
								opacity: 0.5;
							}

							100% {
								opacity: 0.3;
							}
						}
					}
				}
			}
		}

		& > .choices {
			width: 100%;
			height: 100%;

			flex-grow: 1;
			z-index: 2;
			pointer-events: auto;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;

			transition: height 0.5s var(----ease-fast-slow);

			&:not(.shown) {
				height: 200px;
			}

			&:not(.active) {
				display: none;
			}

			& > .content {
				width: 100%;
				height: 100%;

				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				align-items: center;
				justify-items: center;
				gap: 14px;

				padding: 14px;
				padding-top: 0;
				box-sizing: border-box;

				& .content {
					display: flex;
					flex-direction: column;
					/* gap: 14px; */

					& > .name {
						color: var(----colour-text-primary);
						font-size: 1em;
						/* font-weight: 500; */
					}
					& > .description {
						color: var(----colour-text-secondary);
					}
				}
			}
		}
	}
</style>
