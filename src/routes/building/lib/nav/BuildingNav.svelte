<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import {
		ic_arrow_outward,
		ic_close,
		ic_info,
		ic_logout,
	} from 'maic/two_tone';
	import { useBuildingInfo } from '../info/useBuildingInfo';
	import { BottomSheet, BottomSheetStates } from '@sxxov/sv/layout';
	import { goto } from '$app/navigation';

	const info = useBuildingInfo()!;

	let infoSheetState = BottomSheetStates.IDLE;
</script>

<div class="building-nav">
	<div class="exit">
		<Button
			{...ButtonVariants.Fab.Md}
			{...ButtonVariants.Transparent}
			{...ButtonVariants.Shadow.Sm}
			on:click={() => {
				if (
					document.referrer &&
					document.referrer.startsWith(window.location.origin)
				)
					history.back();
				else void goto('/');
			}}
		>
			<Svg svg={ic_logout} />
		</Button>
	</div>
	<div class="heading">
		<h1>{info.name}</h1>
	</div>
	<div class="info">
		<Button
			{...ButtonVariants.Transparent}
			{...ButtonVariants.Shadow.Sm}
			roundness={28}
			on:click={() => {
				infoSheetState = BottomSheetStates.PEEK;
			}}
		>
			<Svg svg={ic_info} />
			Info
		</Button>
		<BottomSheet
			colourBackground="----colour-background-primary"
			width="min(100%, 600px)"
			roundness={28}
			bind:state={infoSheetState}
		>
			<div class="content">
				<div class="close">
					<Button
						{...ButtonVariants.Fab.Md}
						{...ButtonVariants.Transparent}
						{...ButtonVariants.Shadow.None}
						roundness={56}
						on:click={() => {
							infoSheetState = BottomSheetStates.IDLE;
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
					<h3>Description</h3>
					<p>{info.description}</p>
				</section>
				<section>
					<h3>Lessons</h3>
					<ul>
						{#each info.lessons as lesson}
							<li>{lesson}</li>
						{/each}
					</ul>
				</section>
				<section>
					<h3>Learn More</h3>
					<ul>
						<li>
							<a
								class="external"
								href={info.brignull.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{info.brignull.kind}<Svg
									svg={ic_arrow_outward}
								/>
							</a>
						</li>
					</ul>
				</section>
			</div>
		</BottomSheet>
	</div>
</div>

<style lang="postcss">
	.building-nav {
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

		& > .exit {
			grid-area: exit;

			transform: scaleX(-1);
		}

		& > .heading {
			grid-area: heading;
			display: flex;
			justify-content: flex-start;
			align-items: center;

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

						& > svg {
							width: 1rem;
							height: 1rem;

							fill: var(----colour-text-primary);
						}

						& > p {
							margin: 0;

							font-family: var(----font-family-sans);
							font-size: 1rem;
							font-weight: 900;
							text-transform: uppercase;
							color: var(----colour-text-primary);
						}
					}

					& > h2 {
						margin: 0;

						color: var(----colour-text-primary);

						padding-bottom: 14px;
						border-bottom: 1px solid var(----colour-text-tertiary);
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
