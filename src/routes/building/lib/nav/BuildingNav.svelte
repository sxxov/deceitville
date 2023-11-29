<script
	lang="ts"
	context="module"
>
	export const buildingNavContextKey = Symbol('buildingNav');
</script>

<script lang="ts">
	import 'use-unsafe-threlte';

	import { browser } from '$app/environment';
	import { Button, ButtonVariants, Ripple } from '@sxxov/sv/button';
	import { BottomSheet, BottomSheetStates } from '@sxxov/sv/layout';
	import { Svg } from '@sxxov/sv/svg';
	import { Tween } from '@sxxov/ut/animation';
	import { bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { UnreachableError } from '@sxxov/ut/errors';
	import { lerp, map } from '@sxxov/ut/math';
	import { Store } from '@sxxov/ut/store';
	import type { Point } from '@sxxov/ut/viewport';
	import { T, useThrelte } from '@threlte/core';
	import {
		ic_arrow_outward,
		ic_close,
		ic_info,
		ic_logout,
	} from 'maic/two_tone';
	import { onDestroy, onMount, setContext } from 'svelte';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import { useAmbientRendererSize } from '../../../../lib/3d/canvas/useAmbientRendererSize';
	import { pointer } from '../../../../lib/follow/pointer';
	import { clientHistory } from '../../../../lib/history/clientHistory';
	import { useBuildingInfo } from '../info/useBuildingInfo';
	import type { BuildingNavContext } from './BuildingNavContext';

	const info = useBuildingInfo()!;
	const size = useAmbientRendererSize()!;
	$: sizeHypot = Math.hypot($size.width, $size.height);
	const { renderer = undefined } = browser ? useThrelte() : {};

	const bottomSheetState = new Store<BottomSheetStates>(
		BottomSheetStates.IDLE,
	);
	const cameraPeekEnabled = new Store(false);
	const applyCameraPeekResistance = (ms = 1000) => {
		cameraPeekSpeed = 0.1;
		cameraPeekSpeedTween.pause();
		cameraPeekSpeedTween = new Tween(
			cameraPeekSpeed,
			1,
			ms,
			bezierQuintOut,
		);
		void cameraPeekSpeedTween.play();
	};
	let cameraPeekSpeedTween = new Tween(1, 1, 0);
	$: cameraPeekSpeed = $cameraPeekSpeedTween;
	const cameraPeekTarget: Point = { x: 0, y: 0 };
	const cameraPeekCurrPointerPoint: Point = { x: 0, y: 0 };
	$: cameraPeekTarget.x = $cameraPeekEnabled
		? -1 *
		  map(
				$pointer.y - cameraPeekCurrPointerPoint.y,
				-sizeHypot,
				sizeHypot,
				degToRad(-20),
				degToRad(20),
		  )
		: 0;
	$: cameraPeekTarget.y = $cameraPeekEnabled
		? -1 *
		  map(
				$pointer.x - cameraPeekCurrPointerPoint.x,
				-sizeHypot,
				sizeHypot,
				degToRad(-20),
				degToRad(20),
		  )
		: 0;
	$: cameraPeek = { x: 0, y: 0 };
	let cameraPeekRotation = new Store<[x: number, y: number, z: number]>([
		0, 0, 0,
	]);
	$: $cameraPeekRotation = [cameraPeek.x, cameraPeek.y, 0];
	let cameraPeekRafHandle:
		| ReturnType<typeof requestAnimationFrame>
		| undefined;
	const cameraPeekRaf = () => {
		cameraPeek.x = lerp(cameraPeekSpeed, cameraPeek.x, cameraPeekTarget.x);
		cameraPeek.y = lerp(cameraPeekSpeed, cameraPeek.y, cameraPeekTarget.y);

		if ($cameraPeekEnabled || (cameraPeek.x !== 0 && cameraPeek.y !== 0))
			cameraPeekRafHandle = requestAnimationFrame(cameraPeekRaf);
	};
	$: if (browser && $cameraPeekEnabled) {
		if (cameraPeekRafHandle) cancelAnimationFrame(cameraPeekRafHandle);
		cameraPeekRafHandle = requestAnimationFrame(cameraPeekRaf);
	}
	if (browser)
		onDestroy(() => {
			cancelAnimationFrame(cameraPeekRafHandle!);
		});

	onMount(() => {
		if (!renderer) throw new UnreachableError();

		const onPointerDown = () => {
			cameraPeekCurrPointerPoint.x = $pointer.x;
			cameraPeekCurrPointerPoint.y = $pointer.y;
			applyCameraPeekResistance(100);
			$cameraPeekEnabled = true;
		};

		const onPointerUp = () => {
			applyCameraPeekResistance();
			$cameraPeekEnabled = false;
		};

		const onPointerLeave = () => {
			applyCameraPeekResistance();
			$cameraPeekEnabled = false;
		};

		renderer.domElement.addEventListener('pointerdown', onPointerDown);
		renderer.domElement.addEventListener('pointerup', onPointerUp);
		window.addEventListener('pointerup', onPointerUp);
		renderer.domElement.addEventListener('pointerleave', onPointerLeave);
		window.addEventListener('pointerleave', onPointerLeave);
		renderer.domElement.addEventListener('pointercancel', onPointerLeave);
		window.addEventListener('pointercancel', onPointerLeave);

		return () => {
			renderer.domElement.removeEventListener(
				'pointerdown',
				onPointerDown,
			);
			renderer.domElement.removeEventListener('pointerup', onPointerUp);
			window.removeEventListener('pointerup', onPointerUp);
			renderer.domElement.removeEventListener(
				'pointerleave',
				onPointerLeave,
			);
			window.removeEventListener('pointerleave', onPointerLeave);
			renderer.domElement.removeEventListener(
				'pointercancel',
				onPointerLeave,
			);
			window.removeEventListener('pointercancel', onPointerLeave);
		};
	});
	const exit = () => {
		applyCameraPeekResistance();
		$cameraPeekEnabled = false;
		clientHistory.back();
	};
	let key = {};
	const reslot = () => {
		key = {};
	};
	setContext<BuildingNavContext>(buildingNavContextKey, {
		bottomSheetState,
		cameraPeekEnabled,
		cameraPeekRotation,
		exit,
		reslot,
	});

	let objectiveActive = true;
</script>

{#if browser}
	<T.Group rotation={$cameraPeekRotation}>
		<slot name="peek" />
	</T.Group>
{/if}
<div class="building-nav">
	<div class="content">
		<div class="exit">
			<Button
				{...ButtonVariants.Fab.Md}
				{...ButtonVariants.Transparent}
				{...ButtonVariants.Shadow.Sm}
				on:click={exit}
			>
				<Svg svg={ic_logout} />
			</Button>
		</div>
		<div class="heading">
			<h1>{info.name}</h1>
		</div>
		<div class="info">
			<div class="button">
				<Button
					{...ButtonVariants.Transparent}
					{...ButtonVariants.Shadow.Sm}
					roundness={28}
					padding="14px 21px"
					on:click={() => {
						$bottomSheetState = BottomSheetStates.PEEK;
					}}
				>
					<Svg svg={ic_info} />
					Info
				</Button>
			</div>
		</div>
	</div>

	<div class="objective">
		<div
			class="background"
			class:active={objectiveActive}
		></div>
		<div
			class="ripple"
			class:active={objectiveActive}
			role="presentation"
			on:click={() => {
				objectiveActive = false;
			}}
			on:keydown={(e) => {
				if (e.key === 'Enter') objectiveActive = false;
			}}
		>
			<Ripple
				durationMin={2000}
				durationMax={5000}
			/>
		</div>
		<div
			class="outer"
			class:out={!objectiveActive}
		>
			<div class="content">
				<h2
					class:in={objectiveActive}
					class:out={!objectiveActive}
				>
					Objective
				</h2>
				<p class="text">
					{#if 1}
						{@const words = info.objective.split(' ')}
						{#each words as word, i}
							<span
								style="
									--i: {i};
									--l: {words.length};
								"
								class:in={objectiveActive}
								class:out={!objectiveActive}
								>{word}{#if i < words.length - 1}&nbsp;{/if}</span
							>
						{/each}
					{/if}
				</p>
				<p class="prompt">
					<!-- <Svg svg={ic_touch_app} /> -->
					{#if 1}
						{@const words = 'Press anywhere to continue.'.split(
							' ',
						)}
						{#each words as word, i}
							<span
								style="
									--i: {i};
									--l: {words.length};
								"
								><span
									class:in={objectiveActive}
									class:out={!objectiveActive}
									>{word}{#if i < words.length - 1}&nbsp;{/if}</span
								></span
							>
						{/each}
					{/if}
				</p>
			</div>
		</div>
	</div>

	<div class="sheet">
		<BottomSheet
			colourBackground="----colour-background-primary"
			width="min(100%, 600px)"
			roundness={28}
			bind:state={$bottomSheetState}
		>
			<div class="content">
				<div class="close">
					<Button
						{...ButtonVariants.Fab.Md}
						{...ButtonVariants.Transparent}
						{...ButtonVariants.Shadow.None}
						roundness={56}
						on:click={() => {
							$bottomSheetState = BottomSheetStates.IDLE;
						}}
					>
						<Svg svg={ic_close} />
					</Button>
				</div>
				<div class="heading">
					<div class="chip">
						<Svg
							width="1em"
							height="1em"
							svg={ic_info}
						/>
						Info
					</div>
					<h2>{info.name}</h2>
				</div>
				<section>
					<h3>Objective</h3>
					<p>{info.objective}</p>
				</section>
				<!-- <section>
					<h3>Description</h3>
					<p>{info.description}</p>
				</section> -->
				<section>
					<h3>Lessons</h3>
					<ul>
						{#each info.lessons as lesson}
							<li>{lesson}</li>
						{/each}
					</ul>
				</section>
				<section>
					<h3>Inspirations</h3>
					<ul>
						{#each info.inspirations as inspiration}
							<li>{inspiration}</li>
						{/each}
					</ul>
				</section>
				<section>
					<h3>Learn More</h3>
					<ul>
						{#each info.brignulls as { url, kind }}
							<li>
								<a
									class="external"
									href={url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{kind}<Svg svg={ic_arrow_outward} />
								</a>
							</li>
						{/each}
					</ul>
				</section>
			</div>
		</BottomSheet>
	</div>
</div>
{#key key}
	<slot />
{/key}

<style lang="postcss">
	.building-nav {
		& > .content {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			display: grid;
			grid-template-rows: 1fr;
			grid-template-columns: auto 1fr auto;
			grid-template-areas: 'exit heading info';
			align-items: center;
			gap: 14px;

			padding: 14px;
			box-sizing: border-box;

			z-index: 10;

			pointer-events: none;

			& > * {
				pointer-events: auto;
			}

			& > .exit {
				grid-area: exit;

				transform: scaleX(-1);
			}

			& > .heading {
				grid-area: heading;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				width: max-content;

				& > h1 {
					margin: 0;

					font-family: var(----font-family-sans);
					font-size: 1rem;
					font-weight: 900;
					text-transform: uppercase;
					color: var(----color-text-primary);
				}
			}

			& > .info {
				grid-area: info;
			}
		}

		& > .objective {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			pointer-events: none;

			z-index: 9;

			& > .background {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				background: radial-gradient(
					circle at center,
					var(----colour-background-primary) 0%,
					var(----colour-background-transparent) 50%
				);

				opacity: 1;
				transition: opacity 0.2s 1.3s var(----ease-slow-fast);

				&:not(.active) {
					opacity: 0;
				}
			}

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

			& > .outer {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 7px;

				pointer-events: none;
				user-select: none;

				transform: translate(0, 0);
				opacity: 1;
				visibility: inherit;
				transition:
					transform 0.5s 1s var(----ease-slow-fast),
					opacity 0.2s 1.3s var(----ease-slow-fast),
					visibility 0s 1.48s;

				&.out {
					animation:
						move-out 1s 1s var(----ease-slow-slow) forwards,
						float-scale-out 1s 1s var(----ease-slow-fast),
						fade-out 0.2s 1.9s var(----ease-slow-slow) forwards;

					@keyframes move-out {
						100% {
							translate: calc(50% - 72px) calc(-50% + 42px);
						}
					}

					@keyframes float-scale-out {
						0% {
							scale: 1;
						}

						50% {
							scale: 2;
						}

						100% {
							scale: 1.5;
						}
					}

					@keyframes fade-out {
						0% {
							opacity: 1;
							/* filter: blur(0); */
						}

						100% {
							opacity: 0;
							/* filter: blur(10px); */
						}
					}

					/* transform: translate(
								calc(50% - 72px),
								calc(-50% + 42px)
							)
							scale(1);
						visibility: hidden;
						opacity: 0; */
				}

				& .in {
					--i: 0;

					clip-path: unset;

					animation: reveal-in 1s calc(var(--i) * 100ms) 1
						var(----ease-slow-slow) backwards;

					@keyframes reveal-in {
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

				& .out {
					--i: 0;
					--l: 1;

					clip-path: unset;

					animation: reveal-out 1s
						calc(((var(--l) - 1) - var(--i)) * 100ms) 1
						var(----ease-slow-slow) forwards;

					@keyframes reveal-out {
						0% {
							clip-path: unset;
						}

						1% {
							clip-path: inset(0 0 0 0);
							transform: translateY(0);
						}

						100% {
							clip-path: inset(100% 0 0 0);
							transform: translateY(-100%);
						}
					}
				}

				& > .content {
					position: relative;

					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 14px;

					pointer-events: none;

					& > h2 {
						margin: 0;

						position: absolute;
						top: -56px;
						left: 50%;
						transform: translate(-50%, 0);

						font-family: var(----font-family-sans);
						font-size: 1rem;
						font-weight: 900;
						letter-spacing: -0em;
						text-transform: uppercase;
						color: var(----colour-text-primary);
						text-align: center;

						padding: 14px 21px;

						border-radius: 28px;
						border: 1px solid var(----colour-text-secondary);

						backdrop-filter: blur(14px);

						z-index: 1;

						transition:
							top 1s var(----ease-slow-slow),
							transform 1s var(----ease-slow-slow);

						&.in {
							animation: blur-in 1s calc(var(--i) * 100ms) 1
								var(----ease-slow-slow) backwards;

							@keyframes blur-in {
								0% {
									filter: blur(10px);
								}

								99% {
									filter: blur(0);
								}

								100% {
									filter: unset;
								}
							}
						}

						&.out {
							animation: none;

							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
						}
					}

					& > .text {
						margin: 0;

						font-family: var(----font-family-sans);
						font-size: 4rem;
						font-weight: 100;
						/* text-transform: uppercase; */
						letter-spacing: -0.03em;
						color: var(----colour-text-primary);
						text-align: center;
						line-height: 1;

						& > span {
							display: inline-block;
						}
					}

					& > .prompt {
						display: flex;
						/* gap: 14px; */
						align-items: center;

						position: absolute;
						bottom: -56px;
						left: 50%;
						transform: translateX(-50%);

						margin: 0;

						font-family: var(----font-family-sans);
						font-size: 1rem;
						color: var(----colour-text-primary);
						text-align: center;

						padding-top: 22px;

						& > span {
							--i: 0;

							display: inline-block;

							animation: pulse 2s calc(var(--i) * 100ms) infinite
								var(----ease-slow-slow) both;

							@keyframes pulse {
								0% {
									opacity: 0.5;
								}

								50% {
									opacity: 1;
								}

								100% {
									opacity: 0.5;
								}
							}
						}
					}
				}
			}
		}

		& > .sheet {
			display: contents;

			& .content {
				position: relative;
				padding: 28px;
				box-sizing: border-box;

				display: flex;
				flex-direction: column;
				gap: 14px;

				& > .close {
					position: absolute;
					top: 0;
					right: 0;
				}

				& > .heading {
					display: flex;
					flex-direction: column;
					gap: 28px;

					& > h2 {
						margin: 0;

						color: var(----colour-text-primary);

						padding-bottom: 14px;
						border-bottom: 1px solid var(----colour-text-tertiary);
					}

					& > .chip {
						width: max-content;
						display: flex;
						align-items: center;
						gap: 7px;

						padding: 7px 14px;
						margin-left: -14px;
						margin-top: -14px;
						box-sizing: border-box;

						border-radius: 28px;
						background-color: var(----colour-background-secondary);
						border: 1px solid var(----colour-text-tertiary);
					}
				}

				& > section {
					& > h3 {
						color: var(----colour-text-primary);
						-webkit-text-stroke: unset;
						text-stroke: unset;

						font-family: var(----font-family-sans);
						font-size: 1rem;
						font-weight: 900;
						text-transform: uppercase;

						padding-bottom: 14px;
						border-bottom: 1px solid var(----colour-text-tertiary);
					}

					& a:any-link {
						color: var(----colour-text-primary);

						&.external {
							width: max-content;
							display: flex;
							align-items: center;
						}
					}
				}
			}
		}
	}
</style>
