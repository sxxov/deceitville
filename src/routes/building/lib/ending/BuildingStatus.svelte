<script lang="ts">
	import { dropIn, scaleIn } from '@sxxov/sv/ut/transition/transitions';
</script>

<div class="building-status">
	<div
		class="heading"
		in:scaleIn={{ duration: 1000 }}
	>
		<h1><slot name="status">Status</slot></h1>
	</div>
	<p in:dropIn={{ delay: 1000 }}>
		<slot>Uh oh. Try again?</slot>
	</p>
	<div class="buttons">
		<slot name="buttons" />
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 56px;

		z-index: 1;

		background: radial-gradient(
			ellipse at center,
			var(----colour-background-primary) 0%,
			var(----colour-background-transparent) 100%
		);

		& > .buttons {
			width: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
