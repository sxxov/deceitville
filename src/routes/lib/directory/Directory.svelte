<script lang="ts">
	import { goto } from '$app/navigation';
	import { Svg } from '@sxxov/sv/svg';
	import { ic_flag } from 'maic/two_tone';
	import type { DirectoryRoute } from './DirectoryRoute';
	import DirectoryScene from './DirectoryScene.svelte';
	import svg_loop_corner from '../../../assets/directory/loops/corner.svg?raw';
	import svg_loop_centre from '../../../assets/directory/loops/centre.svg?raw';
	import { Spacer } from '@sxxov/sv/layout';
	import { usePseudoHeight } from '../layout/usePseudoHeight';
	import { useThrelte } from '@threlte/core';
	import { inner, client } from '@sxxov/ut/viewport';
	import * as THREE from 'three';

	export let routes: DirectoryRoute[];

	const { renderer } = useThrelte();
	$: vh = Math.max(
		$inner.height,
		$client.height,
		renderer.getSize(new THREE.Vector2()).height,
	);
	const pseudoHeight = usePseudoHeight();
	$: pseudoHeight.self.set(
		$inner.width > 1000
			? Math.max(100 * (routes.length + 1), vh)
			: 200 + 100 * (routes.length + 1),
	);

	let route: DirectoryRoute | undefined;
	let exiting = false;
	let randomHovered = false;
	let randomIntervalHandle: ReturnType<typeof setInterval> | undefined;
	$: if (randomHovered && !exiting) {
		let i = Math.floor(Math.random() * routes.length);
		route = routes[i];
		randomIntervalHandle = setInterval(() => {
			route = routes[++i % routes.length];
		}, 300);
	} else {
		if (randomIntervalHandle) clearInterval(randomIntervalHandle);
		if (!exiting) route = undefined;
	}
	let directoryScene: DirectoryScene | undefined;
</script>

<div class="directory">
	<div class="info">
		<div class="padding start"></div>
		<div class="content">
			<div class="heading">
				<h2>Directory</h2>
				<!-- <Spacer height={39} />
				<hr /> -->
			</div>
			<div class="description">
				<div class="frame">
					<div class="line left"></div>

					<div class="corner top-left">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_corner}
						/>
					</div>
					<div class="line top-left"></div>
					<div class="centre top-left">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_centre}
						/>
					</div>
					<div class="centre top-right">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_centre}
						/>
					</div>
					<div class="line top-right"></div>
					<div class="corner top-right">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_corner}
						/>
					</div>

					<div class="line right"></div>

					<div class="corner bottom-left">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_corner}
						/>
					</div>
					<div class="line bottom-left"></div>
					<div class="centre bottom-left">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_centre}
						/>
					</div>
					<div class="centre bottom-right">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_centre}
						/>
					</div>
					<div class="line bottom-right"></div>
					<div class="corner bottom-right">
						<Svg
							height="100%"
							width="100%"
							svg={svg_loop_corner}
						/>
					</div>
				</div>
				<div class="content">
					{#if route}
						<div class="heading">
							<h4>
								{randomHovered
									? '00'
									: String(
											routes.indexOf(route) + 1,
									  ).padStart(2, '0')}
							</h4>
							<h5>
								{randomHovered ? 'Random' : route.info.name}
							</h5>
						</div>
						<p>
							{randomHovered
								? 'Let nature decide.'
								: route.info.description}
						</p>
					{:else}
						<div class="heading">
							<h4>{routes.length} Places</h4>
							<!-- <h5>Hi.</h5> -->
						</div>
						<p>Where would you like to go?</p>
					{/if}
				</div>
			</div>
		</div>
		<div
			class="padding end"
			style="--length: {routes.length};"
		></div>
	</div>
	<div class="routes">
		<div class="padding start"></div>
		<div class="content">
			<a
				href={route?.url ?? '#'}
				on:click={async (e) => {
					if (e.ctrlKey || e.metaKey) return;
					e.preventDefault();
					exiting = true;
					await directoryScene?.exit();
					await goto(route?.url ?? '#');
				}}
			>
				<div
					class="route"
					on:touchstart={() => {
						randomHovered = true;
					}}
					on:touchmove={() => {
						randomHovered = true;
					}}
					on:touchend={() => {
						randomHovered = false;
					}}
					on:pointerenter={() => {
						randomHovered = true;
					}}
					on:pointerleave={() => {
						randomHovered = false;
					}}
					on:pointercancel={() => {
						randomHovered = false;
					}}
				>
					<div class="icon">
						<Svg
							colour="currentColor"
							height={28}
							svg={ic_flag}
						/>
					</div>
					<div class="arrow">
						<div class="content">
							<div class="tail"></div>
							<div class="head">
								<div class="a"></div>
								<div class="b"></div>
							</div>
						</div>
					</div>

					<h6>???</h6>
				</div>
			</a>

			{#each routes as { info: { name, icon }, url }, i}
				<a
					href={url}
					on:click={async (e) => {
						if (e.ctrlKey || e.metaKey) return;
						e.preventDefault();
						await directoryScene?.exit();
						await goto(url);
					}}
				>
					<div
						class="route"
						on:pointerenter={() => {
							route = routes[i];
						}}
						on:pointerleave={() => {
							route = undefined;
						}}
						on:pointercancel={() => {
							route = undefined;
						}}
					>
						<div class="icon">
							<Svg
								colour="currentColor"
								height={28}
								svg={icon}
							/>
						</div>
						<div class="arrow">
							<div class="content">
								<div class="tail"></div>
								<div class="head">
									<div class="a"></div>
									<div class="b"></div>
								</div>
							</div>
						</div>

						<h6>{name}</h6>
					</div>
				</a>
			{/each}
		</div>
		<div class="padding end"></div>
	</div>
</div>
<DirectoryScene
	object={route?.object}
	{pseudoHeight}
	bind:this={directoryScene}
/>

<style lang="postcss">
	.directory {
		--height-route: 100px;

		display: contents;

		& > .info {
			position: absolute;
			top: 0;
			width: 33.33%;

			@media (max-width: 1000px) {
				left: 0;
				width: 100%;
			}

			& > .padding {
				--length: 0;

				pointer-events: none;

				&.start {
					height: 900vh;
					height: 900lvh;
				}
				&.end {
					min-height: 25vh;
					min-height: 25lvh;
					height: calc(
						0,
						(var(--length) + 1) * var(--height-route) - 100vh
					);
					height: calc(
						(var(--length) + 1) * var(--height-route) - 100lvh
					);
				}
			}

			& > .content {
				position: sticky;
				top: 0;
				width: 100%;
				height: 100vh;
				height: 100lvh;

				display: flex;
				flex-direction: column;

				& > .heading {
					padding: 14px;
					box-sizing: border-box;

					height: 100px;
					border-top: 1px solid var(----colour-text-primary);
					flex-shrink: 0;

					& > h2 {
						margin: 0;
						color: var(----colour-text-primary);
						letter-spacing: -0.04em;
					}
				}

				& > .description {
					position: relative;
					/* top: 168px; */
					/* width: calc(100% - 28px); */
					/* height: calc(100vh - 168px - 28px);
					height: calc(100lvh - 168px - 28px); */
					/* position: absolute; */
					width: 100%;
					height: 100%;

					padding: 14px;
					box-sizing: border-box;

					border-block: 1px solid var(----colour-text-primary);

					@media (max-width: 1000px) {
						display: none;
					}

					& > .frame {
						position: relative;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;

						pointer-events: none;

						--height-corner: 56px;
						--width-corner: 42px;

						--height-centre: 28px;
						--width-centre: 84px;

						--padding-line: 7px;
						--weight-line: 0.5px;
						--gap-line: 14px;

						& > .corner {
							position: absolute;

							height: var(--height-corner);
							width: var(--width-corner);

							&.top-left {
								top: 0;
								left: 0;
								transform: scale(1, 1);
							}

							&.top-right {
								top: 0;
								right: 0;
								transform: scale(-1, 1);
							}

							&.bottom-left {
								bottom: 0;
								left: 0;
								transform: scale(1, -1);
							}

							&.bottom-right {
								bottom: 0;
								right: 0;
								transform: scale(-1, -1);
							}
						}

						& > .centre {
							position: absolute;

							height: var(--height-centre);
							width: var(--width-centre);

							&.top-left {
								top: 0;
								left: calc(50% - var(--width-centre));
								transform: scale(1, 1);
							}

							&.top-right {
								top: 0;
								right: calc(50% - var(--width-centre));
								transform: scale(-1, 1);
							}

							&.bottom-left {
								bottom: 0;
								left: calc(50% - var(--width-centre));
								transform: scale(1, -1);
							}

							&.bottom-right {
								bottom: 0;
								right: calc(50% - var(--width-centre));
								transform: scale(-1, -1);
							}
						}

						& > .line {
							position: absolute;

							background: currentColor;

							&.left {
								top: calc(
									var(--height-corner) + var(--gap-line)
								);
								left: var(--padding-line);
								width: var(--weight-line);
								height: calc(
									100% -
										(var(--height-corner) + var(--gap-line)) *
										2
								);
							}

							&.top-left {
								top: var(--padding-line);
								left: calc(
									var(--width-corner) + var(--gap-line)
								);
								width: calc(
									50% -
										(
											var(--width-corner) +
												var(--width-centre) +
												var(--gap-line) * 2
										)
								);
								height: var(--weight-line);
							}

							&.top-right {
								top: var(--padding-line);
								right: calc(
									var(--width-corner) + var(--gap-line)
								);
								width: calc(
									50% -
										(
											var(--width-corner) +
												var(--width-centre) +
												var(--gap-line) * 2
										)
								);
								height: var(--weight-line);
							}

							&.right {
								top: calc(
									var(--height-corner) + var(--gap-line)
								);
								right: var(--padding-line);
								width: var(--weight-line);
								height: calc(
									100% -
										(var(--height-corner) + var(--gap-line)) *
										2
								);
							}

							&.bottom-left {
								bottom: var(--padding-line);
								left: calc(
									var(--width-corner) + var(--gap-line)
								);
								width: calc(
									50% -
										(
											var(--width-corner) +
												var(--width-centre) +
												var(--gap-line) * 2
										)
								);
								height: var(--weight-line);
							}

							&.bottom-right {
								bottom: var(--padding-line);
								right: calc(
									var(--width-corner) + var(--gap-line)
								);
								width: calc(
									50% -
										(
											var(--width-corner) +
												var(--width-centre) +
												var(--gap-line) * 2
										)
								);
								height: var(--weight-line);
							}
						}
					}

					& > .content {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						gap: 28px;
						padding: 56px;
						box-sizing: border-box;

						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;

						& > .heading {
							display: flex;
							flex-direction: column;
							gap: clamp(2rem, 6vw, 6rem);

							& > h4 {
								margin: 0;
								color: var(----colour-text-primary);
								font-size: clamp(2rem, 6vw, 6rem);
								line-height: 1;
								letter-spacing: -0.04em;
								-webkit-text-fill-color: transparent;
								text-fill-color: transparent;
								-webkit-text-stroke: 0.1px
									var(----colour-text-primary);
								text-stroke: 0.1px var(----colour-text-primary);
							}

							& > h5 {
								text-transform: uppercase;
								margin: 0;
								color: var(----colour-text-primary);
								font-size: 1.5rem;
								letter-spacing: -0.04em;
								max-width: 300px;
							}
						}

						& > p {
							margin: 0;
							color: var(----colour-text-primary);
							max-width: 300px;
						}
					}
				}
			}
		}

		& > .routes {
			position: absolute;
			top: 0;
			left: 33.33%;
			width: 66.67%;

			@media (max-width: 1000px) {
				top: 200px;
				left: 0;
				width: 100%;
			}

			& > .padding {
				pointer-events: none;

				&.start {
					height: 900vh;
					height: 900lvh;
				}
				&.end {
					/* height: 25vh;
					height: 25lvh; */

					@media (max-width: 1000px) {
						height: 0;
					}
				}
			}

			& > .content {
				position: sticky;
				top: 0;
				width: 100%;

				background: #000;
				border-top: 1px solid var(----colour-text-primary);

				& > a {
					text-decoration: none;

					&:hover {
						text-shadow: none;
					}

					& > .route {
						position: relative;
						height: var(--height-route);
						padding: 0 14px;
						box-sizing: border-box;
						display: flex;
						gap: 14px;
						align-items: center;
						justify-content: flex-start;
						border-bottom: 1px solid var(----colour-text-primary);

						&::before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background: var(----colour-text-primary);
							z-index: -1;
							clip-path: inset(100% 0 0 0);

							transition: clip-path 0.3s var(----ease-slow-slow);
						}

						&:hover {
							&::before {
								clip-path: inset(0 0 0 0);
							}

							& > h6 {
								color: var(----colour-background-primary);
							}

							& > .arrow {
								--colour: var(----colour-background-primary);
								--width-tail: 56px;
								--width-head: 14px;
							}

							& > .icon {
								color: var(----colour-background-primary);
							}
						}

						&:active {
							&::before {
								background: var(----colour-background-primary);
							}

							& > h6 {
								color: var(----colour-text-primary);
							}

							& > .arrow {
								--colour: var(----colour-text-primary);
								--width-tail: 56px;
								--width-head: 14px;
							}

							& > .icon {
								color: var(----colour-text-primary);
							}
						}

						& > .arrow {
							--weight: 2px;
							--width-tail: 0px;
							--width-head: 0px;
							--hypot-head: 19.79898987322333px;
							--colour: var(----colour-text-primary);

							position: relative;
							width: var(--width-tail);

							transition: width 0.2s 0.1s var(----ease-fast-slow);

							& > .content {
								position: absolute;
								top: 0;

								& > .tail {
									position: absolute;
									top: calc(50% - var(--weight) / 2);
									left: 0;
									width: var(--width-tail);
									height: var(--weight);
									background: var(--colour);

									transition:
										background 0.2s 0.1s
											var(----ease-fast-slow),
										width 0.2s 0.1s var(----ease-fast-slow);
								}

								& > .head {
									position: absolute;
									top: calc(50% - var(--weight) / 2);
									left: var(--width-tail);

									transition: left 0.2s 0.1s
										var(----ease-fast-slow);

									& > * {
										position: absolute;
										width: var(--width-head);
										height: var(--weight);
										background: var(--colour);
										left: calc(
											var(--hypot-head) / 2 * -1 -
												var(--weight)
										);
										transform-origin: right center;

										transition:
											background 0.2s 0.1s
												var(----ease-fast-slow),
											width 0.1s 0.1s
												var(----ease-fast-slow);

										&.a {
											transform: rotate(45deg)
												translate(0, 50%);
										}

										&.b {
											transform: rotate(-45deg)
												translate(0, -50%);
										}
									}
								}
							}
						}

						& > .icon {
							color: var(----colour-text-primary);

							transition: color 0.2s 0.1s var(----ease-fast-slow);
						}

						& > h6 {
							margin: 0;
							color: var(----colour-text-primary);

							transition: color 0.2s 0.1s var(----ease-fast-slow);
						}
					}
				}
			}
		}
	}
</style>
