<script
	lang="ts"
	context="module"
>
	import { ic_pets } from 'maic/two_tone';
	import * as gltfs from '../../../assets/village/parts/gltfs.db';
	import type { BuildingInfo } from '../lib/info/BuildingInfo';

	export const info: BuildingInfo = {
		name: 'Pet Shop',
		description:
			"The local pet shop, where all kids' dream come true. You will need to pick between 3 unknown animals, based on their vague & incomplete descriptions.",
		icon: ic_pets,
		facade: gltfs.building_1,
	};
</script>

<script lang="ts">
	import LMTH from '../../../lib/3d/lmth/LMTH.svelte';
	import { Tt } from '../lib/tt/Tt';
	import EphemeralCamera from '../../../lib/3d/camera/EphemeralCamera.svelte';
	import VillageScenePostProcessing from '../../lib/village/VillageScenePostProcessing.svelte';
	import VillageSceneEnvironment from '../../lib/village/VillageSceneEnvironment.svelte';
	import exr_hdri from '../../../assets/building/hdri/kloofendal_misty_morning_puresky_2k.exr?url';
	import Hdri from '../../../lib/3d/environment/Hdri.svelte';
	import { interactivity, useInteractivity } from '@threlte/extras';
	import { injectPlugin } from '@threlte/core';
	import Meta from '../../../lib/meta/Meta.svelte';
	import BuildingMeta from '../lib/info/BuildingMeta.svelte';

	useInteractivity().enabled.set(true);
</script>

<BuildingMeta {info} />
<EphemeralCamera position={[0, 0, 0]} />
<VillageScenePostProcessing brightness={0.2} />
<Hdri exr={exr_hdri} />
<div class="building pet-shop">
	<div class="heading">
		<hr />
		<h1>Pick a pet.</h1>
		<hr />
	</div>
	<div class="choices">
		<section>
			<div class="info">
				<div class="letter">Fluffernutter</div>
				<ul>
					<li class="pro">
						Harbours a latent, tumultuous potentiality within.
					</li>
					<li class="con">
						Known to beguile and then unleash its capricious
						tempest.
					</li>
				</ul>
			</div>
			<div class="button">
				<LMTH strategy="fit">
					<Tt.Button />
				</LMTH>
			</div>
		</section>
		<section>
			<div class="info">
				<div class="letter">Whiskerflop</div>
				<ul>
					<li class="pro">
						Radiates a bewitching allure that veils potential peril.
					</li>
					<li class="con">
						Conceals a mysterious fortification mechanism.
					</li>
				</ul>
			</div>
			<div class="button">
				<LMTH strategy="fit">
					<Tt.Button />
				</LMTH>
			</div>
		</section>
		<section>
			<div class="info">
				<div class="letter">Snugglemonster</div>
				<ul>
					<li class="pro">
						Effuses a comforting presence tinged with concealed
						jeopardy.
					</li>
					<li class="con">
						Possesses the propensity for unrestrained chaos when
						incited.
					</li>
				</ul>
			</div>
			<div class="button">
				<LMTH strategy="fit">
					<Tt.Button />
				</LMTH>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">
	.building {
		position: relative;
		display: flex;
		flex-direction: column;
		/* gap: 14px; */

		width: 100%;
		height: 100vh;
		height: 100lvh;

		z-index: 1;

		pointer-events: none;

		& > .heading {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr max-content 1fr;
			/* flex-direction: column; */
			align-items: center;
			justify-items: center;

			pointer-events: auto;

			/* border-block: 1px solid var(----colour-background-tertiary); */

			& > h1 {
				display: block;
				/* text-align: center; */
				margin: 0;
				width: 100%;

				padding: 28px;
				box-sizing: border-box;
				/* background: var(----colour-background-primary);

				border-radius: var(----roundness);
				border: 1px solid var(----colour-background-tertiary); */

				font-family: var(----font-family-sans);
				text-transform: uppercase;
				font-weight: 900;
				font-size: 1rem;
				letter-spacing: -0.03em;
			}
		}

		& > .choices {
			/* display: grid;
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			grid-auto-rows: 1fr; */

			display: flex;
			flex-wrap: wrap;
			/* gap: 14px; */

			width: 100%;
			height: 100%;

			section {
				display: flex;
				flex-direction: column;

				/* width: 100%; */
				width: 400px;
				flex-grow: 1;
				/* height: 100%; */

				padding: 14px;
				box-sizing: border-box;
				border: 1px solid var(----colour-background-tertiary);

				@media (max-width: 800px) {
					flex-direction: row;
					gap: 28px;
				}

				& > .info {
					position: relative;

					display: flex;
					flex-direction: column;
					align-items: center;

					pointer-events: auto;

					@media (max-width: 800px) {
						width: 100%;
						align-items: flex-start;
					}

					& > ul {
						display: inline-block;
						padding: 0;
						margin: 0;
						margin-block: 2em;
						z-index: 1;

						padding-bottom: 1em;
						margin-bottom: 1em;
						/* border-bottom: 1px solid
							var(----colour-background-tertiary); */

						@media (max-width: 800px) {
							margin-left: 2rem;
						}

						& > li {
							text-align: center;
							/* &::after {
								content: '';
								display: inline-block;
								width: 2em;
							} */
							/* margin-bottom: 0.5em; */
							line-height: 1.5em;

							list-style-type: none;
							list-style-position: inside;
							margin: 0;
							padding: 0;

							&.pro {
								/* color: #84e890; */
							}
							&.con {
								/* color: #c15d5a; */
								opacity: 0.5;
							}

							@media (max-width: 800px) {
								margin-bottom: 0.5em;
								text-align: start;
							}
						}
					}

					& > .letter {
						font-family: var(----font-family-display);
						font-size: clamp(2rem, 5vw, 8rem);

						margin: 20px;
						/* padding: 14px 28px; */
						box-sizing: border-box;

						width: 100%;
						text-align: center;
						padding-inline: 0.2em;

						background: var(----colour-background-primary);
						border-radius: 112px;
						border: 1px solid var(----colour-background-tertiary);
						/* border-block: 1px solid
							var(----colour-background-tertiary); */
						padding-block: 0.4em;
						margin-bottom: 0.05em;

						@media (max-width: 800px) {
							text-align: start;
							padding-left: 2rem;
						}
					}
				}

				& > .button {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
