<script lang="ts">
	import { onMount } from 'svelte';
	import svg_mask from '../../assets/lib/splash/mask.svg?raw';
	import script_splash from './splash.mjs?raw';
	import './splash.pcss';

	onMount(() => {
		const splashDiv =
			document.querySelector<HTMLDivElement>('.global.splash')!;

		splashDiv.dispatchEvent(new CustomEvent('splash:mounted'));
	});
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `
	<script type="module">
		${script_splash}
	<${''}/script>
	<div class="splash global active" style="--progress: 0%">
		<div
			class="svg"
			style="
				--l: 0;
				--colour-filled: var(----colour-text-primary);
				--colour-unfilled: var(----colour-text-tertiary);
			"
		>
			${svg_mask}
		</div>
	</div>
`}

<style lang="postcss">
</style>
