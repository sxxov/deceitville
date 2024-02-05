<script lang="ts">
	import { Spacer } from '@sxxov/sv/layout';
	import { Svg } from '@sxxov/sv/svg';
	import {
		ic_business,
		ic_flight,
		ic_person,
		ic_warning,
	} from 'maic/two_tone';
	import { onDestroy, onMount } from 'svelte';
	import { Store } from '@sxxov/ut/store';

	export let i: 0 | 1 | 2 | 3 = 3;
	export let progress = 0;

	const progressStore = new Store(progress);
	$: progressStore.set(progress);

	const revealableElements = new Set<HTMLElement>();
	$: {
		i;
		revealableElements.clear();
	}
	const revealable = (e: HTMLElement) => {
		// not sure why, but mutating `n` inside the template
		// doesn't reflect in script that's not within the template itself

		const n = revealableElements.size;
		revealableElements.add(e);
		e.classList.add('revealable');
		const unsubscribe = progressStore.subscribeLazy((progress) => {
			if (n / revealableElements.size < progress)
				e.classList.add('revealed');
			else e.classList.remove('revealed');
		});

		return {
			destroy() {
				revealableElements.delete(e);
				unsubscribe();
			},
		};
	};
	// $: progress > 0 && console.log(progress);

	const formatter = new Intl.DateTimeFormat('en', {
		hour: 'numeric',
		minute: '2-digit',
	});

	let intervalHandle: ReturnType<typeof setTimeout> | undefined;
	let time = new Date();
	$: timeFormatted = formatter.format(time);
	onMount(() => {
		intervalHandle = setInterval(() => {
			time = new Date();
		}, 1000);
	});
	onDestroy(() => {
		if (intervalHandle) clearInterval(intervalHandle);
	});
</script>

{#if i === 0}
	<div class="story plane _0">
		<div class="segment">
			<div class="sparse-x wrap">
				<h6 use:revealable>Hi,</h6>
				<h6 use:revealable>traveller.</h6>
			</div>
		</div>
		<div class="segment">
			<div class="sparse-y wrap">
				<div class="put-y">
					<p use:revealable>
						This is your pilot speaking.
						<br />
						<br />
						It is currently <b>{timeFormatted}</b>.
					</p>
				</div>
			</div>
		</div>
		<div class="segment">
			<h6 use:revealable>You're currently</h6>
		</div>
		<div class="segment">
			<div class="put-y gap-md">
				<div class="put-x">
					<div
						class="icon"
						use:revealable
					>
						<Svg
							height="4rem"
							width="4rem"
							svg={ic_flight}
						></Svg>
					</div>
					<Spacer width={14} />
					<h6 use:revealable>Landing</h6>
				</div>
				<h6 use:revealable>on</h6>
				<h6
					class="invert"
					use:revealable
				>
					(<i>DX</i>) <b>1337</b> <a href="#">Deceitville</a>
				</h6>
			</div>
		</div>
	</div>
{:else if i === 1}
	<div class="story plane _1">
		<div class="segment">
			<div class="sparse-y h-full wrap">
				<div class="sparse-x wrap">
					<h6 use:revealable>It's</h6>
					<h6 use:revealable>common</h6>
					<span></span>
				</div>
				<div class="beware put-y">
					<h6
						class="tag"
						use:revealable
					>
						Beware
					</h6>
					<Spacer height={56} />
					<div class="put-x align-end">
						<h4 use:revealable>Hostile!</h4>
						<Spacer width={14} />
						<div
							class="icon put-y"
							use:revealable
						>
							<Svg
								height="4rem"
								width="4rem"
								svg={ic_warning}
							></Svg>
							<Spacer height={14} />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="segment h-full">
			<div class="sparse-y wrap">
				<h6 use:revealable>around here—<br />the internet,</h6>
				<h6 use:revealable>for towns to be</h6>
				<h6 use:revealable>
					<a href="#">designed</a> to<br />harm
				</h6>
				<div class="put-y">
					<p use:revealable>its own</p>
					<h6 use:revealable>users.</h6>
				</div>
			</div>
		</div>
	</div>
{:else if i === 2}
	<div class="story plane _2">
		<div class="segment">
			<div class="sparse-x wrap align-start">
				<h6
					class="grow"
					use:revealable
				>
					Learn about the
				</h6>
				<div class="put-y grow">
					<h6 use:revealable><s>culture</s></h6>
					<h6 use:revealable>coersion</h6>
				</div>
				<span></span>
			</div>
		</div>
		<div class="segment">
			<div class="sparse-x wrap align-start">
				<h6 use:revealable>of this town &</h6>
				<div class="put-y">
					<div class="put-y">
						<h6 use:revealable><s>avoid</s></h6>
						<h6 use:revealable>exfiltrate</h6>
					</div>
				</div>
				<div class="put-y">
					<div class="put-x align-start">
						<div
							class="icon"
							use:revealable
						>
							<Svg
								height="4rem"
								width="4rem"
								svg={ic_business}
							></Svg>
						</div>
						<Spacer width={14} />
						<h6 use:revealable><b>De Corp.®</b></h6>
					</div>
					<Spacer height={14} />
					<p use:revealable>
						Creators & maintainers,<br />Deceitville.
					</p>
				</div>
			</div>
		</div>
	</div>
{:else if i === 3}
	<div class="story plane _3">
		<div class="segment sparse-y">
			<div class="put-x wrap align-start">
				<h6
					class="w-half"
					use:revealable
				>
					We wish
				</h6>
				<div class="put-y grow">
					<div class="put-x">
						<Spacer width="4rem" /><Spacer width={28} />
						<h6 use:revealable><b>you,</b></h6>
						<Spacer width="4rem" /><Spacer width={14} />
					</div>

					<div class="traveller put-x">
						<div
							class="icon"
							use:revealable
						>
							<Svg
								height="4rem"
								width="4rem"
								svg={ic_person}
							></Svg>
						</div>
						<h6
							class="grow"
							use:revealable
						>
							traveller
						</h6>
						<div class="spacer">
							<Spacer width="4rem" /><Spacer width={14} />
						</div>
					</div>
				</div>
				<span></span>
			</div>
		</div>
		<div class="segment">
			<div class="sparse-x align-end wrap">
				<h6
					class="grow"
					use:revealable
				>
					all
				</h6>
				<div class="sparse-y wrap">
					<div class="put-y">
						<p use:revealable>pleasant<br />travels,</p>
						<Spacer height={14} />
						<h6 use:revealable>around</h6>
						<div class="sparse-x">
							<span></span>
							<h6 use:revealable>the</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="segment">
			<div class="sparse-y justify-end">
				<div class="sparse-x align-end wrap">
					<span></span>
					<h6 use:revealable>town.</h6>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.plane {
		--cols: 1fr;
		--rows: 1fr;
		--gap-x: 56px;
		--gap-y: 112px;

		/* padding: 28px; */
		width: calc(100vw - var(----scrollbar-width));
		height: 100vh;
		height: 100lvh;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: var(--cols);
		grid-template-rows: var(--rows);
		gap: var(--gap-y) var(--gap-x);

		&._0 {
			--cols: max-content 1fr;
			--rows: max-content 1fr;
			--gap-x: 56px;
			--gap-y: 112px;

			@media (max-width: 836px) {
				--cols: 1fr;
				--rows: max-content max-content 1fr 1fr;
				--gap-y: 42px;
			}
		}

		&._1 {
			--cols: 1fr 1fr;
			--rows: 1fr;
			--gap-x: 56px;
			--gap-y: 112px;

			@media (max-width: 836px) {
				--cols: 1fr;
				--rows: auto 1fr;
				--gap-y: 56px;

				& .beware {
					display: none;
				}
			}
		}

		&._2 {
			--cols: 1fr;
			--rows: 33.33% 66.67%;
			--gap-x: 56px;
			--gap-y: 0px;

			@media (max-width: 768px) {
				--cols: 1fr;
				--rows: max-content 1fr;
				--gap-y: 56px;
			}
		}

		&._3 {
			--cols: 1fr;
			--rows: 1fr 1fr 1fr;
			--gap-x: 0px;
			--gap-y: 56px;

			@media (max-width: 768px) {
				--cols: 1fr;
				--rows: max-content 1fr;
				--gap-y: 56px;
			}

			& .traveller > .spacer {
				display: contents;

				@media (max-width: 768px) {
					display: none;
				}
			}
		}

		& :global(.revealable) {
			clip-path: inset(0 0 100% 0);
			transform: translateY(100%);
		}

		& :global(.revealable.revealed) {
			clip-path: inset(0 0 0 0);
			transform: translateY(0);

			animation: reveal 1s var(----ease-slow-slow) forwards;

			@keyframes reveal {
				0% {
					clip-path: inset(0 0 100% 0);
					transform: translateY(100%);
				}

				99% {
					clip-path: inset(0 0 0 0);
					transform: translateY(0);
				}

				100% {
					clip-path: unset;
				}
			}
		}
	}

	h4 {
		font-family: var(----font-family-sans);
		font-weight: 900;
		font-size: min(20vw, 8rem);
		line-height: 1;
		margin: 0;
		letter-spacing: -0.06em;

		padding: 14px;

		&::selection {
			background: var(----colour-text-tertiary);
		}
	}

	h5 {
		font-family: var(----font-family-display);
		font-weight: 300;
		font-size: 16rem;
		line-height: 0.85;
		margin: 0;
		letter-spacing: -0.05em;

		padding: 14px;

		&::selection {
			background: var(----colour-text-tertiary);
		}
	}

	h6 {
		font-family: var(----font-family-sans);
		font-weight: 300;
		font-size: 4rem;
		line-height: 1;
		margin: 0;
		letter-spacing: -0.06em;

		padding: 14px;

		background: linear-gradient(
			180deg,
			var(----colour-text-primary) 1px,
			#0000 1px,
			#0000 50%,
			#0000 50%
		);

		&::selection {
			background: var(----colour-text-tertiary);
		}

		&.tag {
			font-size: 2rem;
			font-weight: 900;
			text-transform: uppercase;
		}

		&.invert {
			color: var(----colour-background-primary);

			background: linear-gradient(
				180deg,
				#000 1px,
				var(----colour-text-primary) 2px
			);

			& a {
				color: var(----colour-background-primary);
				text-decoration-color: var(----colour-background-primary);
			}
		}
	}

	p {
		margin: 0;
		padding: 14px;
	}

	a,
	a:any-link {
		color: var(----colour-text-primary);
		text-decoration: underline;
		text-decoration-color: var(----colour-text-primary);
		text-decoration-thickness: 0.1rem;
		text-underline-offset: 1rem;

		transition: text-underline-offset 0.2s var(----ease-slow-slow);

		&:hover {
			text-shadow: none;
			text-underline-offset: 1.5rem;
		}
	}

	a:any-link {
		&:hover {
			font-weight: 300;
			letter-spacing: -0.06em;
		}
	}

	s {
		text-decoration: line-through;
		text-decoration-color: var(----colour-text-primary);
		text-decoration-thickness: 0.1rem;

		cursor: not-allowed;

		&:not(:hover) {
			display: inline-block;
			/* text-decoration-thickness: 0; */
			background: var(----colour-text-primary);
			outline: 14px solid var(----colour-text-primary);
			/* border-radius: 999px; */
			/* padding: 0 14px; */
			position: relative;
			/* transform: translate(-14px, 0); */
		}
	}

	.segment {
		width: 100%;
		height: 100%;
	}

	.h-content {
		height: max-content;
	}

	.w-content {
		width: max-content;
	}

	.h-full {
		height: 100%;
	}

	.w-full {
		width: 100%;
	}

	.h-half {
		height: 50%;
	}

	.w-half {
		width: 50%;
	}

	.w-zero {
		width: 0;
	}

	.h-zero {
		height: 0;
	}

	.icon {
		padding: 14px;
	}

	.grow {
		flex-grow: 1;
	}

	.wrap {
		flex-wrap: wrap;
	}

	.wrap-reverse {
		flex-wrap: wrap-reverse;
	}

	.sparse-x {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.sparse-y {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.put-x {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.put-y {
		display: flex;
		flex-direction: column;
	}

	.justify-start {
		justify-content: flex-start;
	}

	.justify-center {
		justify-content: center;
	}

	.justify-end {
		justify-content: flex-end;
	}

	.align-end {
		align-items: flex-end;
	}

	.align-center {
		align-items: center;
	}

	.align-start {
		align-items: flex-start;
	}

	.gap-sm {
		gap: 7px;
	}

	.gap-md {
		gap: 14px;
	}

	.gap-lg {
		gap: 28px;
	}

	.gap-xl {
		gap: 56px;
	}

	/* .logo {
		:global(& svg > *) {
			fill: transparent;
			stroke: var(----colour-text-primary);
			stroke-width: 0.1px;
		}
	} */
</style>
