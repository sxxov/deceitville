<script lang="ts">
	import { goto } from '$app/navigation';
	import { Svg } from '@sxxov/sv/svg';
	import { ic_flag } from 'maic/two_tone';
	import type { DirectoryRoute } from './DirectoryRoute';
	import DirectoryScene from './DirectoryScene.svelte';

	export let routes: DirectoryRoute[];

	let route: DirectoryRoute | undefined;
	let exiting = false;
	let randomHovered = false;
	let randomIntervalHandle: ReturnType<typeof setInterval> | undefined;
	$: if (randomHovered && !exiting) {
		let i = 0;
		route = routes[++i % routes.length];
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
			</div>
			<div class="description">
				{#if route}
					<h5>{randomHovered ? 'Random' : route.info.name}</h5>
					<p>
						{randomHovered
							? 'Let nature decide.'
							: route.info.description}
					</p>
				{/if}
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
					height: calc(var(--length) * var(--height-route) + 25vh);
					height: calc(var(--length) * var(--height-route) + 25lvh);
				}
			}

			& > .content {
				position: sticky;
				top: 0;
				width: 100%;

				padding: 14px;
				box-sizing: border-box;

				& > .heading {
					& > h2 {
						margin: 0;
						color: #fff;
						letter-spacing: -0.04em;
					}
				}

				& > .description {
					padding: 112px 0;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					gap: 28px;

					@media (pointer: coarse) {
						display: none;
					}

					& > h5 {
						text-transform: uppercase;
						margin: 0;
						color: #fff;
						letter-spacing: -0.04em;
						max-width: 300px;
					}

					& > p {
						margin: 0;
						color: #fff;
						max-width: 300px;
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
					height: 25vh;
					height: 25lvh;
				}
			}

			& > .content {
				position: sticky;
				top: 0;
				width: 100%;

				background: #000;
				border-top: 1px solid #fff;

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
						border-bottom: 1px solid #fff;

						&::before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background: #fff;
							z-index: -1;
							clip-path: inset(100% 0 0 0);

							transition: clip-path 0.3s var(----ease-slow-slow);
						}

						&:hover {
							&::before {
								clip-path: inset(0 0 0 0);
							}

							& > h6 {
								color: #000;
							}

							& > .arrow {
								--colour: #000;
								--width-tail: 56px;
								--width-head: 14px;
							}

							& > .icon {
								color: #000;
							}
						}

						& > .arrow {
							--weight: 2px;
							--width-tail: 0px;
							--width-head: 0px;
							--hypot-head: 19.79898987322333px;
							--colour: #fff;

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
							color: #fff;

							transition: color 0.2s 0.1s var(----ease-fast-slow);
						}

						& > h6 {
							margin: 0;
							color: #fff;

							transition: color 0.2s 0.1s var(----ease-fast-slow);
						}
					}
				}
			}
		}
	}
</style>
