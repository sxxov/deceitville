<script lang="ts">
	import { Store } from '@sxxov/ut/store';
	import { client, inner, type Point } from '@sxxov/ut/viewport';
	import { useFrame, useThrelte } from '@threlte/core';
	import * as THREE from 'three';
	import { usePseudoHeight } from '../layout/usePseudoHeight';
	import VillageSceneEnvironment from '../village/VillageSceneEnvironment.svelte';
	import VillageScenePostProcessing from '../village/VillageScenePostProcessing.svelte';
	import ContinuationSceneCamera from './ContinuationSceneCamera.svelte';
	import { Button } from '@sxxov/sv/button';
	import { ic_book, ic_help } from 'maic/two_tone';
	import { Svg } from '@sxxov/sv/svg';
	import Footer from '../../../lib/footer/Footer.svelte';
	import { Spacer } from '@sxxov/sv/layout';

	const { renderer } = useThrelte();
	$: vh = Math.max(
		$inner.height,
		$client.height,
		renderer.getSize(new THREE.Vector2()).height,
	);
	const { self, top, bottom } = usePseudoHeight();
	$: self.set(vh * 2);

	let scrollY = 0;
	const point = new Store<Point>({ x: 0, y: 0 });
	let rotation = 0;

	useFrame(() => {
		point.set({
			x: $inner.width / 2,
			y: $bottom - scrollY,
		});
		rotation = (rotation + 0.01) % (Math.PI * 2);
	});
</script>

<svelte:window bind:scrollY />
{#if scrollY > $top}
	<ContinuationSceneCamera />
{/if}
{#if scrollY > $top && scrollY < $bottom}
	<VillageScenePostProcessing />
	<VillageSceneEnvironment />
{/if}
<div class="continuation">
	<div
		class="padding start"
		style="--top: {$top}px"
	></div>
	<div class="content">
		<div class="info">
			<div class="heading">
				<!-- <FollowLocus point={$point}>
					{#await createPart(gltfs.pumpkin) then { object }}
						{#if scrollY > $top - vh}
							<T
								is={object}
								position={[0, -0.6, 0]}
								scale={1}
								rotation={[0, rotation, 0]}
							/>
						{/if}
					{/await}
				</FollowLocus> -->

				<h2>
					<span class="sub"
						><span class="icon"
							><Svg
								height="100%"
								width="100%"
								svg={ic_help}
							/></span
						>OK, Educate me.<br /></span
					>What's all this about?
				</h2>
			</div>
			<div class="content">
				<section>
					<blockquote>
						Deceptive design is widespread in the digital world.
					</blockquote>
					<a
						href="https://www.deceptive.design/"
						target="_blank"
					>
						<Button
							><svelte:fragment slot="left">
								<Svg svg={ic_book} />
							</svelte:fragment> Learn more</Button
						>
					</a>
				</section>
				<section>
					<h6>What is it?</h6>
					<p>
						Formerly known as "<b>dark patterns</b>", it's a way of
						tricking users into doing things they didn't want to do,
						but that the designer wanted them to do.
					</p>
				</section>
				<section>
					<h6>How does it impact you?</h6>
					<p>
						You have probably stumbled across some of these patterns
						just by simply browsing the web. They are everywhere.
						When you accept some terms & conditions, when you try to
						opt out of receiving marketing emails, when you try not
						to give Facebook all your information & soul, etc.
					</p>
				</section>
				<section>
					<h6>Where did it come from?</h6>
					<p>
						It started as a push by Harry Brignull in 2010 via the
						<a
							href="https://www.deceptive.design/"
							target="_blank">Deceptive Design</a
						>
						website, detailing types & instances of deceptive design
						found in the wild. It has since been picked up by largely
						by the acedemic community, with
						<a
							href="https://scholar.google.com/scholar?hl=en&q=dark+pattern+brignull"
							target="_blank"
							>countless articles being published</a
						>
						picking both it and Harry's work apart.
					</p>
				</section>
			</div>
		</div>
		<div class="footer"><Footer /></div>
	</div>
	<div class="padding end"></div>
</div>

<style lang="postcss">
	.continuation {
		position: absolute;
		top: 0;

		width: 100%;

		pointer-events: none;

		/* z-index: 1; */

		& > .padding {
			--top: 0px;

			pointer-events: none;

			&.start {
				height: var(--top);
			}
			/* &.end {
				height: 200vh;
				height: 200lvh;
			} */
		}

		& > .content {
			position: sticky;
			top: 0;

			pointer-events: auto;

			& > .info {
				position: relative;
				z-index: 0;

				padding: 14px;
				box-sizing: border-box;

				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				gap: 56px;

				background: #ddd;

				width: 100%;
				height: 100%;
				min-height: 100vh;
				min-height: 100lvh;

				& > .heading {
					width: 400px;
					max-width: 40.5vw;
					flex-grow: 2;

					display: flex;
					flex-direction: column;
					/* justify-content: flex-end; */
					gap: 56px;

					z-index: 100;

					& > .model {
						height: 400px;
						width: 400px;
					}

					& > h2 {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						height: 100%;
						max-height: 100vh;
						max-height: 100lvh;

						font-size: clamp(2rem, 21vw, 19.9rem);
						font-weight: 100;
						letter-spacing: -0.05em;
						color: #333;
						margin: 0;

						/* max-width: 400px; */

						& > .sub {
							display: flex;
							align-items: center;
							font-family: var(----font-family-sans);
							letter-spacing: 0;
							line-height: 1;
							font-size: 1rem;
							font-weight: 900;
							text-transform: uppercase;
							color: #333;
							margin: 0;
							margin-bottom: 28px;
							line-height: 1.5;

							& > .icon {
								display: inline-block;
								height: 1em;
								width: 1em;

								padding: 7px;
								border-radius: var(----roundness);
								border: 1px solid #333;
								margin-right: 7px;
							}
						}
					}
				}

				& > .content {
					width: 400px;
					flex-grow: 1;
					/* flex-shrink: 0; */

					display: grid;
					grid-template-columns: repeat(
						auto-fit,
						minmax(min(calc(100vw - 56px), 400px), 1fr)
					);
					gap: 28px;

					& > section {
						max-width: 400px;

						& > blockquote {
							color: #333;

							font-size: 4em;
							font-style: normal;
							font-weight: 100;
							line-height: 1;
							letter-spacing: -0.03em;

							margin-inline: 0;
							margin-block: 2.33rem;
							margin-bottom: 1em;

							&::selection {
								background: #0001;
							}
						}

						& > h6 {
							color: #333;

							font-size: 1em;
							font-weight: 900;
							text-transform: uppercase;

							display: block;
							padding-bottom: 14px;
							border-bottom: 1px solid #333;

							margin-block: 2.33rem;

							&::selection {
								background: #0001;
							}
						}

						& > p {
							color: #000;
							max-width: 400px;

							/* columns: 300px;
					column-gap: 56px; */
							line-height: 1.5;

							&::selection {
								background: #0001;
							}

							& > a {
								color: #333;

								text-shadow: none;
							}
						}
					}
				}
			}

			& > .footer {
				position: relative;
				z-index: 1;
			}
		}
	}
</style>
