<script lang="ts">
	import { mounted } from '@sxxov/sv/ut/stores';
	import { whenResize } from '@sxxov/sv/ut/action/actions';
	import { bezierQuintIn, bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { clamp, clamp01, map } from '@sxxov/ut/math';
	import { resolvePointerFromEvent } from '@sxxov/ut/viewport';
	import { onDestroy, onMount } from 'svelte';

	export let active = true;
	export let invert = false;

	let outCanvas: HTMLCanvasElement | undefined;
	let outCtx: CanvasRenderingContext2D | undefined;
	let matteCanvas: HTMLCanvasElement | undefined;
	let bufferCtx: CanvasRenderingContext2D | undefined;
	let [w, h] = [0, 0];
	let [ox, oy] = [0, 0];
	let rafHandle: number | undefined;

	const balls: {
		x: number;
		y: number;
		t: number;
	}[] = [];
	const ballSizeMin = 100;
	const ballSizeMax = 300;
	const ballResolution = 10;
	const ballLifetimeIntrinsic = 1000;
	const ballLifetimeThrottleDamageRate = 0;
	const ballLifetimeThrottleRegenRate = 0;
	let ballLifetimeThrottled = ballLifetimeIntrinsic;
	const ballCountThrottleDamageRate = 10;
	const ballCountThrottleRegenRate = 5;
	const ballCountThrottleRegenDelay = 300;
	const ballCountMinIntrinsic = 100;
	const ballCountMaxIntrinsic = 1000;
	let ballCountMaxThrottled = ballCountMaxIntrinsic;

	onMount(() => {
		bufferCtx = matteCanvas!.getContext('2d')!;
		outCtx = outCanvas!.getContext('2d')!;
	});

	onDestroy(() => {
		if (rafHandle) cancelAnimationFrame(rafHandle);
	});

	const targetFrameRate = 30;
	const targetFrameTime = 1000 / targetFrameRate;
	let prevTimestamp = Infinity;
	let prevLagFrameTimestamp = Infinity;
	let consecutiveLagFrameCount = 0;

	const raf = (active: boolean) =>
		active
			? (rafHandle = requestAnimationFrame(onFrame))
			: (rafHandle &&= void cancelAnimationFrame(rafHandle));

	$: $mounted && raf(active);

	const reflow = () => {
		if (!outCanvas) return;

		const { x, y } = outCanvas.getBoundingClientRect();

		[ox, oy] = [x, y];
	};

	const onFrame = (currTimestamp: number) => {
		if (!active) return;

		rafHandle = requestAnimationFrame(onFrame);
		if (!bufferCtx || !outCtx) return;
		if (w === 0 || h === 0) return;

		throttle: {
			no: {
				yes: {
					if (currTimestamp - prevTimestamp > targetFrameTime)
						damage: {
							ballCountMaxThrottled = clamp(
								balls.length -
									ballCountThrottleDamageRate *
										(consecutiveLagFrameCount / 2),
								ballCountMinIntrinsic,
								ballCountMaxIntrinsic,
							);
							ballLifetimeThrottled = clamp(
								ballLifetimeThrottled -
									(ballCountMaxIntrinsic -
										ballCountMaxThrottled) *
										ballLifetimeThrottleDamageRate,
								ballLifetimeIntrinsic *
									(ballLifetimeIntrinsic /
										ballCountMaxIntrinsic) *
									(ballCountMaxThrottled /
										ballCountMaxIntrinsic),
								ballLifetimeIntrinsic,
							);
							++consecutiveLagFrameCount;
							prevLagFrameTimestamp = currTimestamp;

							break yes;
						}

					if (
						currTimestamp - prevLagFrameTimestamp >
						ballCountThrottleRegenDelay
					)
						regen: {
							let didRegen = false;

							if (ballCountMaxThrottled < ballCountMaxIntrinsic) {
								ballCountMaxThrottled = clamp(
									ballCountMaxThrottled +
										ballCountThrottleRegenRate,
									ballCountMinIntrinsic,
									ballCountMaxIntrinsic,
								);

								didRegen = true;
							}

							if (ballLifetimeThrottled < ballLifetimeIntrinsic) {
								ballLifetimeThrottled = clamp(
									ballLifetimeThrottled +
										(ballCountMaxIntrinsic -
											ballCountMaxThrottled) *
											ballLifetimeThrottleRegenRate,
									0,
									ballLifetimeIntrinsic,
								);

								didRegen = true;
							}

							if (!didRegen) break no;

							consecutiveLagFrameCount = 0;

							break yes;
						}

					break no;
				}

				shaveBalls();
			}
		}

		prevTimestamp = currTimestamp;

		bufferCtx.clearRect(0, 0, w, h);

		for (const ball of balls) {
			const { x, y, t } = ball;
			/** Destination time */
			const dt = performance.now();
			/** Time difference */
			const td = dt - t;

			if (td > ballLifetimeThrottled) {
				balls.splice(balls.indexOf(ball), 1);
				continue;
			}

			const percent = clamp01(td / ballLifetimeThrottled);
			const r = map(
				bezierQuintOut.at(clamp01(percent * 2)),
				0,
				1,
				ballSizeMin,
				ballSizeMax,
			);

			const gradient = bufferCtx.createRadialGradient(x, y, 0, x, y, r);
			// gradient.addColorStop(0, `rgba(0,0,0,${0.1 * (1 - percent)})`);
			gradient.addColorStop(
				clamp01(1 - ballResolution * bezierQuintIn.at(percent)),
				`rgba(1,1,1,${0.1 * (1 - percent)})`,
			);
			gradient.addColorStop(1, 'rgba(1,1,1,0)');
			bufferCtx.fillStyle = gradient;
			bufferCtx.fillRect(0, 0, w, h);
		}

		// inverting involves only using the matte
		// save some compute (:
		if (!invert) {
			outCtx.clearRect(0, 0, w, h);
			outCtx.drawImage(matteCanvas!, 0, 0);
			outCtx.globalCompositeOperation = 'source-out';
			outCtx.fillRect(0, 0, w, h);
		}
	};

	const shaveBalls = () => {
		while (balls.length > ballCountMaxThrottled) balls.shift();
	};

	let [/** Curr x */ cx, /** Curr y */ cy] = [0, 0];
	const onMove = (event: MouseEvent | TouchEvent) => {
		const { x: ex, y: ey } = resolvePointerFromEvent(event);

		if (ex === cx && ey === cy) return;

		if (cx === 0 && cy === 0) {
			[cx, cy] = [ex, ey];
			return;
		}

		/** Time of event */
		const t = performance.now();
		const distance = Math.hypot(ex - cx, ey - cy);

		for (
			let i = 0, l = Math.max(Math.floor(distance / ballResolution), 1);
			i < l;
			++i
		) {
			const percent = i / l;

			balls.push({
				x: cx + (ex - cx) * percent - ox,
				y: cy + (ey - cy) * percent - oy,
				t,
			});
		}

		shaveBalls();

		[cx, cy] = [ex, ey];
	};
</script>

<svelte:window
	on:mousemove={onMove}
	on:touchmove={onMove}
	on:resize={reflow}
	on:scroll={reflow}
/>
<div
	class="revealer"
	class:active
	class:invert
	use:whenResize={({ width, height }) => {
		[w, h] = [width, height];
	}}
>
	<canvas
		class="matte"
		bind:this={matteCanvas}
		width={w}
		height={h}
	/>
	<canvas
		class="out"
		bind:this={outCanvas}
		width={w}
		height={h}
	/>
</div>

<style lang="postcss">
	.revealer {
		width: 100%;
		height: 100%;

		opacity: 1;

		transition: opacity 1s var(----ease-slow-fast);

		&:not(.active) {
			opacity: 0;
		}

		& > .matte {
			position: absolute;
		}

		& > .out {
			filter: var(----filter-background-primary);
		}

		&.invert > .out,
		&:not(.invert) > .matte {
			opacity: 0;
		}

		&.invert > .matte,
		&:not(.invert) > .out {
			opacity: 1;
		}
	}
</style>
