<script lang="ts">
	import { Svg } from '@sxxov/sv/svg';
	import { ic_block, ic_warning } from 'maic/two_tone';
	import Marquee from './Marquee.svelte';

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<div class="caution">
	<div class="content">
		<!-- <div class="heading">
			<h2>
				<span class="icon">
					<Svg
						height="100%"
						width="1em"
						svg={ic_block}
					/>
				</span> Corporate Secrets
			</h2>
		</div> -->
		<div class="tape _1">
			<Marquee duration={100}
				><span class="de-corp">De Corp.®</span></Marquee
			>
		</div>
		<div class="tape _2">
			<Marquee
				><span class="de-caution"
					><span class="icon"
						><Svg
							height="100px"
							width="100%"
							svg={ic_warning}
						/></span
					>Caution</span
				></Marquee
			>
		</div>
		<div class="tape _3">
			<Marquee
				direction={-1}
				duration={60}
				><span class="de-no-entry"
					><span class="icon"
						><Svg
							height="100px"
							width="100%"
							svg={ic_block}
						/></span
					> No Entry Beyond This Line</span
				></Marquee
			>
		</div>
		<div class="tape _4">
			<Marquee direction={-1}
				><span class="de-caution"
					><span class="icon"
						><Svg
							height="100px"
							width="100%"
							svg={ic_warning}
						/></span
					>Caution</span
				></Marquee
			>
		</div>
		<div class="tape _5">
			<Marquee><span class="de-corp">De Corp.®</span></Marquee>
		</div>
	</div>
</div>

<style lang="postcss">
	.caution {
		position: relative;
		top: 0;
		width: 100%;
		pointer-events: none;

		z-index: 2;

		& > .content {
			/* position: sticky;
			top: 0; */
			position: relative;
			top: 0;

			width: 100%;
			height: 100vh;
			height: 100lvh;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0;
			/* justify-content: space-between; */
			justify-content: center;

			pointer-events: auto;

			overflow-x: hidden;
			overflow-x: clip;

			border-bottom: 1px solid var(----colour-text-primary);

			& > .heading {
				position: absolute;
				top: 0;
				display: flex;
				flex-direction: column;
				gap: 28px;
				height: 100%;
				align-items: center;
				justify-content: center;

				/* background: var(----colour-background-primary); */

				z-index: 1;

				/* transform: rotate3d(1, 1, 1, -60deg); */
				border-radius: var(----roundness);

				/* box-shadow: var(----shadow-lg); */

				& > h2 {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					gap: 0.2em;

					color: var(----colour-text-primary);
					/* letter-spacing: -0.04em; */
					/* font-size: 8rem; */
					margin: 0;
					text-transform: uppercase;
					font-family: var(----font-family-sans);
					font-weight: 900;
					font-size: 2rem;

					padding: 28px;
					box-sizing: border-box;
					backdrop-filter: blur(28px);
					border: 1px solid var(----colour-background-tertiary);
				}
			}

			& > .tape {
				height: 140px;
				width: 200%;

				background: repeating-linear-gradient(
					45deg,
					#000,
					#000 60px,
					var(----colour-text-primary) 60px
						/* var(----colour-text-primary) 61px, */
						/* var(----colour-background-primary) 60px,
					var(----colour-background-primary) 120px */
				);
				border: 1.5px solid var(----colour-text-primary);
				/* box-shadow: var(----shadow-lg); */
				box-shadow: 5px 5px 500px -3px rgb(0 0 0 / 50%);

				&._1 {
					transform: rotate3d(10, 10, 2, 20deg);
				}

				&._2 {
					transform: rotate(15deg);
				}

				&._3 {
					transform: rotate3d(0, 10, 3, -10deg);
				}

				&._4 {
					transform: rotate(10deg);
				}

				&._5 {
					transform: rotate(-10deg);
				}

				& .de-corp {
				}

				& .de-caution {
					display: inline-flex;
					gap: 28px;
					align-items: center;
					justify-content: center;
					height: 100%;

					padding-right: 28px;

					font-size: 100px;
					text-transform: uppercase;
					font-weight: 900;
					letter-spacing: -0.04em;
					-webkit-text-fill-color: transparent;
					text-fill-color: transparent;
					-webkit-text-stroke: 2px var(----colour-text-primary);
					text-stroke: 2px var(----colour-text-primary);
				}

				& .de-no-entry {
					display: inline-flex;
					gap: 28px;
					align-items: center;
					justify-content: center;
					height: 100%;

					padding-right: 28px;

					font-size: 100px;
					/* text-transform: uppercase; */
					font-weight: 100;
					letter-spacing: -0.04em;
					/* -webkit-text-fill-color: transparent;
					text-fill-color: transparent;
					-webkit-text-stroke: 2px var(----colour-text-primary);
					text-stroke: 2px var(----colour-text-primary); */
				}

				& .icon {
					display: inline-block;
				}
			}
		}
	}
</style>
