<script lang="ts">
	import { browser } from '$app/environment';
	import { Tween } from '@sxxov/ut/animation';
	import { gltfs } from '../../../../assets/routes/building/04-clock-house/lib/clock/parts';
	import Part from '../../../../lib/3d/part/Part.svelte';
	import { bezierQuintOut } from '@sxxov/ut/bezier/beziers';
	import { degToRad } from 'three/src/math/MathUtils.js';
	import { map } from '@sxxov/ut/math';
	import {
		T,
		type Events,
		type Props,
		forwardEventHandlers,
	} from '@threlte/core';
	import { createEventDispatcher } from 'svelte';
	import { ClockTactileState } from './ClockTactile';

	interface $$Props extends Props<THREE.Group> {
		time?: typeof time;
		timer?: typeof timer;
		numbered?: typeof numbered;
		speed?: typeof speed;
		stopped?: typeof stopped;
	}
	interface $$Events extends Events<THREE.Group> {
		stopped: CustomEvent<undefined>;
	}

	const dispatch = createEventDispatcher();

	export let state: ClockTactileState = ClockTactileState.TICKING;
	export let time = 0;
	export let timer = Infinity;
	export let numbered = false;
	export let speed = 1;

	const component = forwardEventHandlers();

	let second = 0;
	let minute = 0;
	let hour = 0;

	$: paused = state === ClockTactileState.PAUSED;
	const pause = () => {
		dispatch('paused');
	};
	$: if (paused) pause();

	$: stopped =
		state === ClockTactileState.STOPPED ||
		(timer > 0 && !Object.is(timer, -0) ? time >= timer : time <= timer);
	const stop = () => {
		paused = true;
		time = timer;
		dispatch('stopped');
	};
	$: if (stopped) stop();

	const updateTimes = () => {
		second = Math.floor(time / 1000);
		minute = Math.floor(time / 1000) / 60;
		hour = Math.floor(time / 1000) / 60 / 60;
	};
	$: time, void updateTimes();

	let rafHandle: ReturnType<typeof requestAnimationFrame> | undefined;
	const startUpdatingTime = () => {
		// use requestAnimationFrame to update the clock
		let prevRafTime = performance.now();
		rafHandle = requestAnimationFrame(function raf(t) {
			const delta = t - prevRafTime;
			prevRafTime = t;
			time += delta * speed;

			rafHandle = requestAnimationFrame(raf);
		});
	};
	const stopUpdatingTime = () => {
		if (rafHandle) cancelAnimationFrame(rafHandle);
		secondTween.pause();
		minuteTween.pause();
		hourTween.pause();
	};
	$: if (browser)
		if (paused) stopUpdatingTime();
		else startUpdatingTime();

	let currSecond = second;
	$: secondTween = new Tween(currSecond, second, 100, bezierQuintOut);
	const updateCurrSecond = () => (currSecond = second);
	$: if (browser) void secondTween.play().then(updateCurrSecond);

	let currMinute = minute;
	$: minuteTween = new Tween(currMinute, minute, 100, bezierQuintOut);
	const updateCurrMinute = () => (currMinute = minute);
	$: if (browser) void minuteTween.play().then(updateCurrMinute);

	let currHour = hour;
	$: hourTween = new Tween(currHour, hour, 100, bezierQuintOut);
	const updateCurrHour = () => (currHour = hour);
	$: if (browser) void hourTween.play().then(updateCurrHour);
</script>

<T.Group
	bind:this={$component}
	{...$$restProps}
>
	<Part gltf={gltfs.clock_body} />
	<Part gltf={gltfs.clock_glass} />
	<Part
		gltf={gltfs.clock_hand_hour}
		rotation={[
			0,
			-degToRad(map(($hourTween || currHour) % 12, 0, 12, 0, 360)),
			0,
		]}
	/>
	<Part
		gltf={gltfs.clock_hand_minute}
		rotation={[
			0,
			-degToRad(map(($minuteTween || currMinute) % 60, 0, 60, 0, 360)),
			0,
		]}
	/>
	<Part
		gltf={gltfs.clock_hand_second}
		rotation={[
			0,
			-degToRad(map(($secondTween || currSecond) % 60, 0, 60, 0, 360)),
			0,
		]}
	/>

	{#if numbered}
		<Part gltf={gltfs.clock_text_1} />
		<Part gltf={gltfs.clock_text_2} />
		<Part gltf={gltfs.clock_text_3} />
		<Part gltf={gltfs.clock_text_4} />
		<Part gltf={gltfs.clock_text_5} />
		<Part gltf={gltfs.clock_text_6} />
		<Part gltf={gltfs.clock_text_7} />
		<Part gltf={gltfs.clock_text_8} />
		<Part gltf={gltfs.clock_text_9} />
		<Part gltf={gltfs.clock_text_10} />
		<Part gltf={gltfs.clock_text_11} />
		<Part gltf={gltfs.clock_text_12} />
	{/if}
</T.Group>
