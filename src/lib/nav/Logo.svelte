<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { Svg } from '@sxxov/sv/svg';
	import ic_logo from '../../assets/common/brand/logo.svg?raw';
	import { css, type Css } from '@sxxov/ut/css';

	export let width: Css = 24;
	export let height: Css = 24;
	export let padding: Css = 16;
	export let colour: Css = 'var(----colour-text-primary)';
</script>

<div class="nav logo">
	<a href="/">
		<Button
			{...ButtonVariants.Fab.Md}
			{...ButtonVariants.Transparent}
			{...ButtonVariants.Shadow.Sm}
			width="max(56px, 100%)"
			height="max(56px, 100%)"
			colourBackground="var(----colour-background-primary)"
			{padding}
		>
			<Svg
				height={css(height)}
				width={css(width)}
				svg={ic_logo}
				firm
				{colour}
			/>
		</Button>
	</a>
</div>

<style lang="postcss">
</style>
