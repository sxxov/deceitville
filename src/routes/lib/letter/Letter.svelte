<script lang="ts">
	import { Svg } from '@sxxov/sv/svg';
	import { map01 } from '@sxxov/ut/math';
	import { inner } from '@sxxov/ut/viewport';
	import { ic_warning } from 'maic/two_tone';
	import ScrollPosition from '../layout/ScrollPosition.svelte';

	const dtf = new Intl.DateTimeFormat(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	let scrollY = 0;
	let top = 0;
	let bottom = 0;
	const heightShred = 224;

	$: shred = $inner.width > 500;
</script>

<svelte:window bind:scrollY />
<ScrollPosition bind:top />
<div class="letter">
	<div
		class="content"
		style="--height-shred: {heightShred}px;"
	>
		{#if shred}
			<div
				class="cover"
				class:visible={scrollY > top - heightShred &&
					scrollY <= bottom - heightShred}
			></div>
		{/if}
		{#each Array(shred ? 13 : 1).fill(undefined) as _, i}
			<div
				class="outer"
				class:content={i <= 0}
				class:fixed={i > 0}
			>
				<div
					class="paper"
					class:shred={i > 0}
					class:visible={scrollY > top - heightShred &&
						scrollY <= bottom}
					class:p={i > 0 && i % 2}
					class:q={i > 0 && !(i % 2)}
					style="
						--i: {i > 0 ? (i - 1) / 12 : undefined};
						--n: {1 / 12}; 
						--l: {12};
						--r: {Math.random()};
						--p: {Math.abs((map01(top - scrollY, top, bottom) * 30 + i) % Math.PI)}rad;
					"
				>
					<div class="shadow"></div>
					<div
						class="content"
						style="
							transform: {i > 0 ? `translateY(${top - scrollY}px)` : undefined};
						"
					>
						<div class="bar">
							<span class="de">De Corp.®</span>
							<span class="date">{dtf.format(new Date())}</span>
						</div>
						<div class="heading">
							<div class="chip">
								<Svg
									width={16}
									svg={ic_warning}
								/> Confidential
							</div>
							<h2>Memo</h2>
						</div>
						<table>
							<tbody>
								<tr>
									<td>To:</td>
									<td>Executive Committee of De Corp.®</td>
								</tr>
								<tr>
									<td>From:</td>
									<td
										><span class="redacted">Prof. De</span>,
										CEO</td
									>
								</tr>
								<tr>
									<td>Subject:</td>
									<td
										><div class="chip">Urgent</div>
										&nbsp;What is the point of Deceitville?</td
									>
								</tr>
							</tbody>
						</table>
						<span class="greetings">Dear Committee,</span>
						<p>
							I trust this message finds you all well. Recently
							I've received many questions regarding the goals of
							our operation, which I believe can be boiled down to
							a single line:
						</p>
						<h1>What is the point of Deceitville?</h1>
						<p>
							In short, we aim to create a confirming public using
							coersions that can be implemented without knowledge
							by our consumers. We need to find ways to sell a
							product, paint an idea, push a narrative, or even
							create a new reality without the consumer being
							aware of it. We are not the first company to do
							something like this, but we are the first that aims
							to do it in a way that <i>captivates</i> our guests through
							pretty visuals, luxury, & experience.
						</p>
						<blockquote>
							If we succeed—we will—we'll have a group of people
							at our bottom line.
						</blockquote>
						<p>
							We are now at a critical juncture in our operation,
							as we are about to welcome our first group of new
							guests into Deceitville. These guests are visitors
							from the outside world, who have been unknowingly
							volunteered to participate in our experiment. They
							will be arriving in the coming weeks, and will be
							staying with us for a period of a few minutes at a
							time.
						</p>
						<p>
							Thus, in the spirit of hospitality, we urge you to
							welcome these visitors warmly, offering them an
							unforgettable experience in our town. Each shop,
							building, & outlet must be at their top performance.
							As a reminder of corporate posture even in the face
							of friendliness or foeness, I have taken the liberty
							to attach below, our guidelines for engaging with
							guests:
						</p>
						<ol>
							<li>
								Do not reveal any information about De Corp.®
								or its employees.
							</li>
							<li>
								Attempt to achieve your goal with the guests at
								all costs.
							</li>
							<li>
								<div class="chip">Important</div>
								&nbsp;<b>Always be aware of adversaries</b> attempting
								to circumvent our operations.
							</li>
						</ol>
						<p>
							Refer to the attached company profile on how to
							further prepare yourselves for this important
							milestone. We look forward to your continued support
							& commitment to De Corp.®.
						</p>
						<p>
							<span class="greetings">Sincerely,</span>
							<br />
							<span class="redacted">Prof. De</span>, CEO
						</p>
					</div>
				</div>
			</div>
		{/each}
		<!-- <div class="fader"></div> -->
	</div>
</div>
<ScrollPosition bind:top={bottom} />

<style lang="postcss">
	.letter {
		position: relative;
		top: 0;
		width: 100%;
		pointer-events: none;

		z-index: 1;

		& > .content {
			/* position: sticky;
			top: 0; */
			position: relative;
			top: 0;

			width: 100%;
			/* height: 300vh;
			height: 300lvh; */
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;

			pointer-events: auto;

			overflow: hidden;
			overflow: clip;

			/* border-top: 1px solid var(----colour-text-primary); */

			--background: repeating-linear-gradient(
				180deg,
				#000,
				#000 8rem,
				var(----colour-text-tertiary) 8rem,
				var(----colour-text-tertiary) calc(8rem + 1px)
			);
			background: var(--background);

			& > .cover {
				position: fixed;
				top: 0;
				height: calc(var(--height-shred) - 4px);
				width: 100%;
				max-width: 800px;
				margin: 0 auto;
				/* background: var(--background); */
				background: black;

				z-index: 2;

				display: none;

				&.visible {
					display: block;
				}
			}

			& > .outer {
				display: flex;
				flex-direction: column;
				align-items: center;

				&.content {
					display: contents;
				}

				&.fixed {
					position: absolute;
					width: 100%;

					z-index: 3;

					& > .paper.shred {
						position: fixed;
						top: 0;
						/* left: 0; */
						width: 100%;
						/* height: 100%; */
						/* max-width: 800px; */
					}
				}

				& > .paper {
					position: relative;

					width: 100%;
					max-width: 800px;
					/* min-height: calc(200vh - 112px);
				min-height: calc(200lvh - 112px); */

					z-index: 1;

					&.shred {
						position: absolute;
						box-shadow: none;

						clip-path: inset(
							-100% calc(
									100% - (100% * (var(--i) + var(--n))) - 1px
								) calc(100% - var(--height-shred)) calc(100% *
										var(--i) - 1px)
						);

						transform-origin: calc(100% * (var(--i) + var(--n) / 2))
							var(--height-shred);

						display: none;
						opacity: 0;

						transition:
							opacity 0.3s var(----ease-slow-slow),
							display 0s 0.3s;

						&.visible {
							opacity: 1;
							display: block;

							transition:
								opacity 0s var(----ease-slow-slow),
								display 0s 0s;
						}

						&.p {
							transform: rotate3d(
								1,
								0.2,
								0.02,
								calc(
									20deg + 1deg *
										(sin(var(--p)) * 30 * var(--r))
								)
							);
						}

						&.q {
							transform: rotate3d(
								1,
								-0.2,
								-0.02,
								calc(
									15deg + -1deg *
										(sin(var(--p)) * 30 * var(--r))
								)
							);
						}
					}

					&.shred > .shadow {
						background-image: linear-gradient(
							180deg,
							rgba(0, 0, 0, 1) 0%,
							rgba(0, 0, 0, 0.2) calc(var(--height-shred) / 2),
							rgba(0, 0, 0, 0) var(--height-shred)
						);
						background-position-y: calc(
							var(--height-shred) * var(--r) +
								((-1 * var(--height-shred)) * sin(var(--p)) / 2)
						);
						/* filter: blur(100px); */
						position: absolute;
						top: 0;
						width: 100%;
						height: 100%;
						z-index: 100;
						transform: translateY(calc(-1 * var(--height-shred)));
					}

					/* &:not(&.shred) {
						clip-path: inset(112px 0 0 0);
					} */

					& > .content {
						width: 100%;
						height: 100%;
						padding: 28px;
						/* margin-block: 56px; */
						box-sizing: border-box;

						background: var(----colour-text-primary);
						box-shadow: var(----shadow-sm);

						border-top: 1px solid
							var(----colour-background-tertiary);
						border-inline: 1px solid
							var(----colour-background-secondary);
						border-radius: var(----roundness);

						& * {
							color: var(
								----colour-background-primary
							) !important;
						}

						& .redacted {
							color: var(----colour-background-primary);
							background: var(----colour-background-primary);
							border-radius: var(----roundness);
							border-bottom: var(----colour-background-secondary)
								2px solid;
							user-select: none;
							/* pointer-events: none; */
							cursor: not-allowed;
						}

						& .chip {
							width: max-content;
							display: inline-flex;
							gap: 7px;
							align-items: center;
							border: 1px solid
								var(----colour-background-tertiary);
							border-radius: 56px;
							padding: 7px 14px;
							/* padding-left: 12px; */
							box-sizing: border-box;
							margin: 0 -3.5px;
						}

						& > .bar {
							display: flex;
							justify-content: space-between;

							& > .de {
								color: var(----colour-background-primary);
								letter-spacing: -0.04em;
								font-size: 1.5rem;
							}

							& > .date {
								color: var(----colour-background-secondary);
							}
						}

						& > .heading {
							position: relative;
							display: flex;
							flex-direction: column;
							gap: 28px;
							padding-top: 6rem;
							box-sizing: border-box;

							& > h2 {
								color: var(----colour-background-primary);
								letter-spacing: -0.04em;
								font-size: 8rem;
								margin-top: 0;
							}
						}

						& > table {
							width: 100%;
							margin-block: 28px;
							border-collapse: collapse;

							& > tbody {
								display: contents;

								& > tr {
									& > td {
										padding: 14px;
										border-bottom: 1px solid
											var(----colour-background-tertiary);
										color: var(
											----colour-background-primary
										);
										font-weight: 100;
										font-size: 1.5rem;
										letter-spacing: -0.04em;
									}
								}
							}
						}

						& > .greetings {
							display: inline-block;
							color: var(----colour-text-primary);
							padding: 14px 0;
							/* text-decoration: wavy underline
						var(----colour-text-tertiary) 0.1em; */
							/* text-underline-offset: 0.1em; */
							letter-spacing: -0.04em;
							font-weight: 100;
							font-size: 1.5rem;
							/* margin-block: 28px; */
							margin-top: 28px;
							cursor: help;
						}

						& > p {
							color: var(----colour-text-primary);
							line-height: 1.5em;
							margin-block: 28px;
						}

						& > blockquote {
							font-size: 1.5em;
							font-style: normal;
							font-weight: 100;
							line-height: 1;
							letter-spacing: -0.03em;

							margin-inline: 0;
							margin-block: 2.33rem;
							margin-top: 0;
							margin-bottom: 1em;

							border-block: 1px solid
								var(----colour-background-tertiary);
							padding-block: 1em;
						}

						& > ol {
							margin-block: 28px;
							padding-inline: 28px;
							list-style-type: decimal;
							font-size: 1.5em;
							font-style: normal;
							letter-spacing: -0.03em;
							font-weight: 100;

							border-block: 1px solid
								var(----colour-background-tertiary);
							padding-block: 1em;

							& > li {
								color: var(----colour-background-primary);
								line-height: 1em;
								margin-block: 1em;
								padding-left: 2em;
							}
						}
					}
				}
			}

			& > .fader {
				position: relative;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 50vh;
				height: 50lvh;
				background: linear-gradient(
					to bottom,
					var(----colour-text-transparent) 0%,
					var(----colour-text-tertiary) 86%,
					var(----colour-text-secondary) 90%,
					var(----colour-text-primary) 100%
				);

				z-index: 10;
			}
		}
	}
</style>
