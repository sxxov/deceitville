<script lang="ts">
	import { dropIn, scaleIn } from '@sxxov/sv/ut/transition/transitions';
</script>

<div class="building-status">
	<div class="content">
		<div
			class="heading"
			in:dropIn
		>
			<h1><slot name="status">Status</slot></h1>
		</div>
		<p>
			<slot>Uh oh. Try again?</slot>
		</p>
		<div class="buttons">
			<slot name="buttons" />
		</div>
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
			ellipse at center,
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
				padding: 21px 28px;
				box-sizing: border-box;
				border-radius: 56px;
				border: 1px solid var(----colour-accent-primary);

				& > h1 {
					margin: 0;

					animation: splash-in 1s cubic-bezier(0.77, 0, 0.02, 1.21)
						both;

					@keyframes splash-in {
						0% {
							font-size: 80rem;
							opacity: 0;
						}

						10% {
							opacity: 1;
						}

						60% {
							font-size: 70rem;
						}

						100% {
							font-size: 4rem;
						}
					}
				}
			}

			& > p {
				text-align: center;

				animation: drop-in 0.6s 0.3s cubic-bezier(0.3, 1.27, 0.25, 1)
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
		}
	}
</style>
