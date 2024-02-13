<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { BottomSheetStates } from '@sxxov/sv/layout';
	import { Svg } from '@sxxov/sv/svg';
	import { dropIn } from '@sxxov/sv/ut/transition/transitions';
	import { ic_lightbulb } from 'maic/two_tone';
	import { useBuildingInfo } from '../info/useBuildingInfo';
	import { useBuildingNav } from '../nav/useBuildingNav';

	const info = useBuildingInfo();
	const nav = useBuildingNav();
</script>

<div class="building-status">
	<div class="content">
		<div
			class="heading"
			in:dropIn
		>
			<h1><slot name="status">Status</slot></h1>
		</div>
		<div class="info">
			<p>
				<slot>Uh oh. Try again?</slot>
			</p>
		</div>
		<div class="buttons">
			<slot name="buttons" />
		</div>
		{#if info}
			<div class="brignull">
				<Button
					{...ButtonVariants.Transparent}
					{...ButtonVariants.Shadow.Sm}
					width="max-content"
					roundness={28}
					height={48}
					padding="14px 21px 14px 16px"
					on:click={() => {
						nav?.bottomSheetState.set(BottomSheetStates.PEEK);
					}}
				>
					<Svg svg={ic_lightbulb} />
					<!-- <Spacer width={0} /> -->
					{info.brignulls.map(({ kind }) => kind).join(', ')}
					<!-- <Svg
							width={16}
							svg={ic_arrow_outward}
						/> -->
				</Button>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.building-status {
		position: fixed;

		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 56px;
		box-sizing: border-box;

		z-index: 1;

		background: radial-gradient(
			circle at center,
			var(----colour-background-primary) 0%,
			var(----colour-background-transparent) 100%
		);

		animation: fade-in 0.2s var(----ease-fast-slow) both;

		@keyframes fade-in {
			from {
				opacity: 0;
			}

			to {
				opacity: 1;
			}
		}

		& > .content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 56px;

			& > .heading {
				display: flex;
				align-items: center;
				/* gap: 14px; */
				flex-direction: column;

				& > h1 {
					display: inline-block;
					text-align: center;
					padding: 21px 28px;
					box-sizing: border-box;
					border-radius: 56px;
					border: 1px solid var(----colour-accent-primary);
					margin: 0;

					pointer-events: none;
					user-select: none;

					animation: splash-in 1s cubic-bezier(0.77, 0, 0.02, 1.21)
						both;

					@keyframes splash-in {
						0% {
							font-size: 80rem;
							opacity: 0;
							padding-right: 84px;
						}

						10% {
							opacity: 1;
						}

						60% {
							font-size: 70rem;
							padding-right: 84px;
						}

						100% {
							font-size: 4rem;
						}
					}
				}
			}

			& > .info {
				& > p {
					margin: 0;
					text-align: center;

					animation: drop-in 0.6s 0.3s
						cubic-bezier(0.3, 1.27, 0.25, 1) both;

					@keyframes drop-in {
						0% {
							transform: translateY(-20px);
							opacity: 0;
						}

						10% {
							opacity: 1;
						}

						100% {
							transform: translateY(0);
						}
					}
				}
			}

			& > .buttons {
				width: 100%;
				display: flex;
				flex-wrap: wrap;

				animation: drop-in 0.6s 0.6s cubic-bezier(0.3, 1.27, 0.25, 1)
					both;

				@keyframes drop-in {
					0% {
						transform: translateY(-20px);
						opacity: 0;
					}

					10% {
						opacity: 1;
					}

					100% {
						transform: translateY(0);
					}
				}
			}

			& > .brignull {
				position: absolute;
				bottom: 56px;

				display: flex;
				gap: 14px;
				align-items: center;

				/* padding: 14px 21px;
				box-sizing: border-box;
				border-radius: 56px;
				border: 1px solid var(----colour-text-tertiary); */

				animation: raise-in 0.6s 1s var(----ease-fast-slow) both;

				@keyframes raise-in {
					0% {
						transform: translateY(20px);
						opacity: 0;
					}

					10% {
						opacity: 1;
					}

					100% {
						transform: translateY(0);
					}
				}
			}
		}
	}
</style>
