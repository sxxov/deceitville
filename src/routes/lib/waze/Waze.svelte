<script lang="ts">
	import type { Composition as C } from '@sxxov/ut/animation';
	import { Composition, Tween } from '@sxxov/sv/animation';
	import {
		bezierQuintIn,
		bezierQuintInOut,
		bezierQuintOut,
	} from '@sxxov/ut/bezier/beziers';
	import { clamp01, map01 } from '@sxxov/ut/math';
	import { onDestroy } from 'svelte';
	import type { WazeSegment } from './WazeSegment';
	import { WazeDirection } from './WazeDirection';
	import type { WazeTimeline } from './WazeTimeline';

	export let m: number;
	export let timeline: WazeTimeline;

	let segments: [head: WazeSegment, meat: WazeSegment, tail: WazeSegment] = [
		timeline[0],
		timeline[0],
		timeline[0],
	];

	const getNextSegment = (m: number) => {
		for (const segment of timeline) if (m < segment.m) return segment;

		return timeline[timeline.length - 1]!;
	};
	const updateSegment = (i: number) => {
		// check for equality to prevent infinite loop
		// where every mutation triggers an update.
		// not sure why svelte doesn't guard against it,
		// even though its mutation on the same tick.

		if (i === 0) {
			const segment = getNextSegment(m);

			if (segments[2] !== segment) {
				segments[2] = segment;
			}
		} else if (i === 1) {
			if (segments[1] !== segments[2]) {
				segments[1] = segments[2];
			}
		} else if (i === 2) {
			if (segments[0] !== segments[2]) {
				segments[0] = segments[2];
			}
		}
	};
	let playingInfinitely = false;
	const cancelPlayInfinite = () => {
		playingInfinitely = false;
	};
	const requestPlayInfinite = async (composition: C) => {
		playingInfinitely = true;

		// eslint-disable-next-line no-unmodified-loop-condition
		while (playingInfinitely) {
			composition.seekToProgress(0);
			await composition.play();
		}
	};

	onDestroy(() => {
		cancelPlayInfinite();
	});
</script>

<div class="waze">
	<div class="arrows">
		<Composition let:composition>
			{#each segments as { direction }, i (i)}
				{@const start = i === 0 ? 0.5 : i === 1 ? 0 : i === 2 ? 0 : 0}
				{@const end = i === 0 ? 1 : i === 1 ? 1 : i === 2 ? 0.5 : 0}
				{@const duration =
					i === 0 ? 1000 : i === 1 ? 2000 : i === 2 ? 1000 : 0}
				{@const delay = i === 0 ? 0 : i === 1 ? 0 : i === 2 ? 1000 : 0}
				<Tween
					{composition}
					{start}
					{end}
					{duration}
					{delay}
					let:v
				>
					{#if direction === WazeDirection.LEFT}
						{@const weightBase = 112}
						{@const weightExtension = 35}
						{@const weightHead = 21}
						{@const weightTotal =
							weightBase + weightExtension + weightHead}
						<div class="left">
							<div class="arrow">
								<div
									class="base clip top"
									style="--in: {bezierQuintIn.at(
										clamp01(
											map01(
												Number(v),
												0,
												weightBase / weightTotal,
											),
										),
									)}; --out: {bezierQuintIn.at(
										clamp01(
											map01(
												Number(v) * 2,
												0,
												weightBase / weightTotal,
											),
										),
									)}"
								></div>
								<div
									class="extension clip left"
									style="--in: {bezierQuintInOut.at(
										clamp01(
											map01(
												Number(v),
												weightBase / weightTotal,
												(weightBase + weightExtension) /
													weightTotal,
											),
										),
									)}; --out: {bezierQuintIn.at(
										clamp01(
											map01(
												Number(v) * 2,
												weightBase / weightTotal,
												(weightBase + weightExtension) /
													weightTotal,
											),
										),
									)}"
								></div>
								<div class="head">
									<div
										class="a clip right"
										style="--in: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v),
													(weightBase +
														weightExtension) /
														weightTotal,
													1,
												),
											),
										)}; --out: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v) * 2,
													(weightBase +
														weightExtension) /
														weightTotal,
													1,
												),
											),
										)}"
									></div>
									<div
										class="b clip right"
										style="--in: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v),
													weightBase / weightTotal,
													1,
												),
											),
										)}; --out: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v) * 2,
													weightBase / weightTotal,
													1,
												),
											),
										)}"
									></div>
								</div>
							</div>
						</div>
					{:else if direction === WazeDirection.STRAIGHT}
						{@const weightBase = 112}
						{@const weightHead = 21}
						{@const weightTotal = weightBase + weightHead}
						<div class="straight">
							<div class="arrow">
								<div
									class="base clip top"
									style="--in: {bezierQuintIn.at(
										clamp01(
											map01(
												Number(v),
												0,
												weightBase / weightTotal,
											),
										),
									)}; --out: {bezierQuintIn.at(
										clamp01(
											map01(
												Number(v) * 2,
												0,
												weightBase / weightTotal,
											),
										),
									)}"
								></div>
								<div class="head">
									<div
										class="a clip right"
										style="--in: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v),
													weightBase / weightTotal,
													1,
												),
											),
										)}; --out: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v) * 2,
													weightBase / weightTotal,
													1,
												),
											),
										)}"
									></div>
									<div
										class="b clip left"
										style="--in: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v),
													weightBase / weightTotal,
													1,
												),
											),
										)}; --out: {bezierQuintOut.at(
											clamp01(
												map01(
													Number(v) * 2,
													weightBase / weightTotal,
													1,
												),
											),
										)}"
									></div>
								</div>
							</div>
						</div>
					{:else if direction === WazeDirection.RIGHT}
						{@const weightBase = 112}
						{@const weightExtension = 35}
						{@const weightHead = 21}
						{@const weightTotal =
							weightBase + weightExtension + weightHead}
						<div class="right">
							<div class="arrow">
								<div
									class="base clip top"
									style="--in: {bezierQuintIn.at(
										clamp01(
											map01(
												v,
												0,
												weightBase / weightTotal,
											),
										),
									)}; --out: {bezierQuintIn.at(
										clamp01(
											map01(
												v * 2,
												0,
												weightBase / weightTotal,
											),
										),
									)}"
								></div>
								<div
									class="extension clip right"
									style="--in: {bezierQuintInOut.at(
										clamp01(
											map01(
												v,
												weightBase / weightTotal,
												(weightBase + weightExtension) /
													weightTotal,
											),
										),
									)}; --out: {bezierQuintIn.at(
										clamp01(
											map01(
												v * 2,
												weightBase / weightTotal,
												(weightBase + weightExtension) /
													weightTotal,
											),
										),
									)}"
								></div>
								<div class="head">
									<div
										class="a clip left"
										style="--in: {bezierQuintOut.at(
											clamp01(
												map01(
													v,
													(weightBase +
														weightExtension) /
														weightTotal,
													1,
												),
											),
										)}; --out: {bezierQuintOut.at(
											clamp01(
												map01(
													v * 2,
													(weightBase +
														weightExtension) /
														weightTotal,
													1,
												),
											),
										)}"
									></div>
									<div
										class="b clip left"
										style="--in: {bezierQuintOut.at(
											clamp01(
												map01(
													v,
													weightBase / weightTotal,
													1,
												),
											),
										)}; --out: {bezierQuintOut.at(
											clamp01(
												map01(
													v * 2,
													weightBase / weightTotal,
													1,
												),
											),
										)}"
									></div>
								</div>
							</div>
						</div>
					{/if}

					{#if v >= end}
						{(updateSegment(i), '')}
					{/if}
				</Tween>
			{/each}

			{(requestPlayInfinite(composition), '')}
		</Composition>
	</div>
	<div class="text">
		<div class="m">
			<h6>{Math.max(segments[2].m - m, 0).toFixed(0)}m</h6>
		</div>
		<div class="direction">
			<p>
				{#if segments[2].direction === WazeDirection.LEFT}
					Turn Left
				{:else if segments[2].direction === WazeDirection.STRAIGHT}
					Go Straight
				{:else if segments[2].direction === WazeDirection.RIGHT}
					Turn Right
				{:else}
					???
				{/if}
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.waze {
		--weight: 1.5px;
		--colour: var(----colour-text-primary);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.arrows {
		--width-base: var(--weight);
		--height-base: 112px;
		--width-extension: 112px;
		--height-extension: var(--weight);
		--width-head: 14px;
		--height-head: var(--weight);
		/* TODO: when `sqrt()` & `pow()` get better browser support, `calc(sqrt(pow(var(--width-head), 2) * 2) / 2)` */
		--hypot-head: 19.79898987322333px;

		width: var(--width-base);
		height: calc(
			var(--height-base) + var(--height-extension) + var(--hypot-head) / 2
		);
		position: relative;
		margin-bottom: -48px;
	}

	.arrow {
		position: absolute;
		top: 0;

		& > .base {
			position: absolute;
			top: 0;
			left: calc(50% - var(--width-base) / 2);
			width: var(--width-base);
			height: var(--height-base);
			background: var(--colour);
		}

		& > .extension {
			.left & {
				position: absolute;
				top: calc(var(--height-base) - var(--height-extension));
				left: calc(
					-1 * var(--width-extension) + (var(--width-base) / 2)
				);
				width: var(--width-extension);
				height: var(--height-extension);
				background: var(--colour);

				& > .head {
				}
			}

			.right & {
				position: absolute;
				top: calc(var(--height-base) - var(--height-extension));
				left: calc(-1 * var(--width-base) / 2);
				width: var(--width-extension);
				height: var(--height-extension);
				background: var(--colour);

				& > .head {
				}
			}

			.straight & {
				position: absolute;
				top: calc(var(--height-base) - var(--height-extension));
				left: calc(var(--width-base) / 2);
				width: 0;
				height: 0;

				& > .head {
				}
			}
		}

		& .head {
			position: absolute;
			top: 0;
			left: 0;

			.left & {
				position: absolute;
				top: calc(var(--height-base) - var(--height-extension));
				left: calc(
					-1 * var(--width-extension) + (var(--width-base) / 2)
				);

				& > * {
					transform-origin: left center;
				}

				& > .a {
					transform: translate(0, 50%) rotate(-45deg)
						translate(0, -50%);
				}

				& > .b {
					transform: translate(0, -50%) rotate(45deg)
						translate(0, 50%);
				}
			}

			.right & {
				position: absolute;
				top: calc(var(--height-base) - var(--height-extension));
				left: calc(var(--width-base) + var(--width-extension));

				& > * {
					left: calc(var(--width-head) * -1);
					transform-origin: right center;
				}

				& > .a {
					transform: rotate(45deg) translate(0, 50%);
				}

				& > .b {
					transform: rotate(-45deg) translate(0, -50%);
				}
			}

			.straight & {
				position: absolute;
				top: var(--height-base);
				left: calc(var(--width-base) / -2);

				& > * {
					left: calc(var(--width-head) * -0.5);
				}

				& > .a {
					transform-origin: left center;
					transform: translate(
							calc(50% - var(--height-head) / 2),
							calc(var(--height-head) / 2)
						)
						rotate(-45deg) translate(0, 50%);
				}

				& > .b {
					transform-origin: right center;
					transform: translate(
							calc(-50% + var(--height-head)),
							calc(var(--height-head) / 2)
						)
						rotate(45deg) translate(0, 50%);
				}
			}

			& > * {
				position: absolute;
				width: var(--width-head);
				height: var(--height-head);
				background: var(--colour);
			}
		}

		& .clip {
			--in: 0;
			--out: 1;
			--in-percent: calc(var(--in) * 100%);
			--out-percent: calc((1 - var(--out)) * 100%);

			&.left {
				clip-path: inset(0 var(--in-percent) 0 var(--out-percent));
			}
			&.right {
				clip-path: inset(0 var(--out-percent) 0 var(--in-percent));
			}
			&.top {
				clip-path: inset(var(--in-percent) 0 var(--out-percent) 0);
			}
			&.bottom {
				clip-path: inset(var(--out-percent) 0 var(--in-percent) 0);
			}
		}
	}

	.text {
		width: 224px;
		display: flex;
		flex-direction: column;
		gap: 7px;
		padding: 64px 28px 14px 28px;
		box-sizing: border-box;
		border-top-left-radius: 112px;
		border-top-right-radius: 112px;
		border: 1px solid var(--colour);
		border-bottom: 0;

		& > .m {
			& > h6 {
				margin: 0;
				font-size: 1rem;
				font-weight: 900;
				color: var(----colour-text-primary);
				text-shadow: 0px 0px 100px rgba(255, 255, 255, 0.5);
				text-align: center;
			}
		}

		& > .direction {
			& > p {
				margin: 0;
				font-size: 1rem;
				text-align: center;
			}
		}
	}
</style>
