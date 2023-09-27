import { afterNavigate } from '$app/navigation';
import Lenis from '@studio-freight/lenis';
import { onMount } from 'svelte';

let lenis: Lenis | undefined;
let rafHandle: ReturnType<typeof requestAnimationFrame> | undefined;

const onCreate = () => {
	if (lenis) lenis.destroy();
	if (rafHandle) cancelAnimationFrame(rafHandle);

	lenis = new Lenis({
		duration: 0.5,
	});
	lenis.on('scroll', () => {
		document.documentElement.dispatchEvent(new CustomEvent('scroll'));
	});

	rafHandle = requestAnimationFrame(function raf(time) {
		lenis!.raf(time);
		rafHandle = requestAnimationFrame(raf);
	});
};

export const useLenis = () => {
	afterNavigate(onCreate);
	onMount(onCreate);
};
