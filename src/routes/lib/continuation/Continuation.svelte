<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import { ic_book, ic_help } from 'maic/two_tone';
	import Contact from '../../../lib/footer/Contact.svelte';
	import Footer from '../../../lib/footer/Footer.svelte';
	import ScrollPosition from '../layout/ScrollPosition.svelte';
	import ContinuationSceneCamera from './ContinuationSceneCamera.svelte';

	let scrollY = 0;
	let top = NaN;
</script>

<svelte:window bind:scrollY />
<ScrollPosition bind:top />
{#if !Number.isNaN(top) && scrollY > top}
	<ContinuationSceneCamera />
{/if}
<div class="continuation">
	<div class="content">
		<div class="info">
			<div class="heading">
				<h2>
					<span class="sub"
						><span class="icon"
							><Svg
								height="100%"
								width="100%"
								svg={ic_help}
							/></span
						>Company Profile<br /></span
					>De Corp.®<br />—est. 1969
				</h2>
			</div>
			<div class="content">
				<div class="quote">
					<section>
						<blockquote>
							We design to <em>
								<br />
								<span class="coverable">coerce</span><br />
								<span class="coverable">manipulate</span><br />
								<span class="coverable">trick</span><br />
								<span class="coverable">convince</span>
							</em> users into doing what we want.
						</blockquote>
					</section>
				</div>
				<a
					href="https://www.deceptive.design/"
					target="_blank"
				>
					<Button
						{...ButtonVariants.Secondary}
						{...ButtonVariants.Shadow.Sm}
						colourBackground="----colour-text-primary"
						colourBackgroundHover="----colour-background-primary"
						colourText="----colour-background-primary"
						><svelte:fragment slot="left">
							<Svg svg={ic_book} />
						</svelte:fragment> Learn more</Button
					>
				</a>
				<div class="qna">
					<section>
						<h6>Vision</h6>
						<p>
							To be the world's most <em>trusted</em> company.
						</p>
					</section>
				</div>
				<div class="qna">
					<section>
						<h6>Mission</h6>
						<p>
							To design user interfaces that increases the
							likelihood of users doing what we want.
						</p>
					</section>
				</div>
				<div class="qna">
					<section>
						<h6>Our History</h6>
						<p>
							We started as an entity to honour Harry Brignull's
							2010 work of
							<a
								href="https://www.deceptive.design/"
								target="_blank">Deceptive Design</a
							>, pursuing types & instances of maliciously
							designed User Interfaces (UIs) found in the wild. It
							has since been picked up by largely by the acedemic
							community, with
							<a
								href="https://scholar.google.com/scholar?hl=en&q=dark+pattern+brignull"
								target="_blank"
								>countless articles being published</a
							>.<br />
							<br />
							We believe it we can utilise it in a way to expand our
							influence & Harry's legacy in the world.
						</p>
					</section>
				</div>
			</div>
		</div>
		<div class="contact"><Contact /></div>
		<div class="footer"><Footer /></div>
	</div>
</div>

<style lang="postcss">
	.continuation {
		position: relative;
		top: 0;

		width: 100%;

		pointer-events: none;

		--colour-text: var(----colour-text-primary);
		--colour-background: black;
		--colour-selection: var(----colour-text-tertiary);

		z-index: 1;

		& > .content {
			position: sticky;
			top: 0;

			pointer-events: auto;

			border-top: 1px solid var(--colour-text);

			& > .info {
				position: relative;
				z-index: 0;

				padding: clamp(14px, 5vw, 28px);
				box-sizing: border-box;

				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				gap: 112px;

				background: var(--colour-background);

				width: 100%;
				height: 100%;
				min-height: 100vh;
				min-height: 100lvh;

				& > .heading {
					width: 400px;
					max-width: max(400px, 28vw);
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
						/* justify-content: space-between; */
						height: 100%;
						max-height: 100vh;
						max-height: 100lvh;

						font-size: clamp(4rem, 5vw, 20rem);
						font-weight: 100;
						letter-spacing: -0.05em;
						color: var(--colour-text);
						margin: 0;

						/* max-width: 400px; */

						& > .sub {
							display: flex;
							align-items: center;
							gap: 7px;
							font-family: var(----font-family-sans);
							letter-spacing: 0;
							line-height: 1;
							font-size: 1rem;
							font-weight: 900;
							text-transform: uppercase;
							color: var(--colour-text);
							margin: 0;
							margin-bottom: 28px;
							line-height: 1.5;
							padding-bottom: 1em;

							& > .icon {
								display: inline-block;
								height: 1em;
								width: 1em;

								padding: 7px;
								border-radius: var(----roundness);
								border: 1px solid var(--colour-text);
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
					gap: 112px;

					@media (max-width: 980px) {
						gap: 56px;
					}

					& > .quote {
						& > section {
							/* max-width: 400px; */

							display: flex;
							flex-direction: column;
							justify-content: space-between;

							& > blockquote {
								color: var(--colour-text);

								font-size: 4em;
								font-style: normal;
								font-weight: 100;
								line-height: 1;
								letter-spacing: -0.03em;

								margin-inline: 0;
								margin-block: 2.33rem;
								margin-top: 0;
								margin-bottom: 1em;

								/* border-block: 1px solid var(--colour-text); */
								/* padding-block: 1em; */

								&::selection {
									background: var(--colour-selection);
								}

								& > em {
									font-style: normal;
									font-weight: 900;
									letter-spacing: -0.05em;
								}

								& .coverable {
									position: relative;
									/* background: var(----colour-text-primary); */

									cursor: vertical-text;

									&::after {
										content: '';
										position: absolute;
										top: calc(10% + 1px);
										left: 0;
										right: 0;
										bottom: calc(10% + 1px);

										pointer-events: none;

										background: repeating-linear-gradient(
											-60deg,
											#000,
											#000 30px,
											var(----colour-text-primary) 30px,
											var(----colour-text-primary) 31px
										);
										border: 1.5px solid
											var(----colour-text-primary);
										border-radius: var(----roundness);

										clip-path: inset(0 0 0 0);

										transition: top 0.2s
											var(----ease-slow-slow);
									}

									&:hover ~ .coverable {
										&::after {
											/* clip-path: inset(0 0 0 0); */

											top: calc(10% + 1px);
										}
									}

									&:hover {
										&::after {
											top: calc(90% - 2px);

											/* clip-path: inset(100% 0 0 0); */
										}
									}

									&:last-child {
										&::after {
											top: calc(90% - 2px);

											/* clip-path: inset(100% 0 0 0); */
										}
									}
								}
							}
						}
					}

					& > .qna {
						display: flex;
						flex-direction: column;
						gap: 56px;

						& > section {
							/* max-width: 400px; */

							& > h6 {
								color: var(--colour-text);

								font-size: 1em;
								font-weight: 900;
								text-transform: uppercase;

								display: block;
								padding-bottom: 14px;
								border-bottom: 1px solid var(--colour-text);

								margin-block: 2.33rem;
								margin-top: 0;

								&::selection {
									background: var(--colour-selection);
								}
							}

							& > p {
								color: var(--colour-text);
								/* max-width: 400px; */

								/* columns: 300px;
					column-gap: 56px; */
								line-height: 1.5;

								&::selection {
									background: var(--colour-selection);
								}

								& > a {
									color: var(--colour-text);

									text-shadow: none;

									&:hover {
										letter-spacing: -0.03em;
									}
								}
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
