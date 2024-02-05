<script lang="ts">
	import { Button, ButtonVariants } from '@sxxov/sv/button';
	import { BottomSheet, BottomSheetStates, Spacer } from '@sxxov/sv/layout';
	import { Svg } from '@sxxov/sv/svg';
	import { getGPUTier, type TierType } from 'detect-gpu';
	import {
		ic_cancel,
		ic_check_circle,
		ic_close,
		ic_do_not_disturb,
		ic_warning,
	} from 'maic/two_tone';
	import { onMount } from 'svelte';

	let state = BottomSheetStates.IDLE;

	const performanceDisclaimerLocalStorageKey =
		'disclaimer.performance.dismissed';

	const dismiss = () => {
		state = BottomSheetStates.IDLE;
	};
	const dismissForever = () => {
		localStorage.setItem(performanceDisclaimerLocalStorageKey, 'true');
		state = BottomSheetStates.IDLE;
	};

	let tier: number | undefined;
	let type: TierType | undefined;
	let gpu: string | undefined;
	let isMobile: boolean | undefined;
	onMount(async () => {
		const shouldRemind = !localStorage.getItem(
			performanceDisclaimerLocalStorageKey,
		);

		if (!shouldRemind) return;

		({ tier, type, gpu, isMobile } = await getGPUTier());
	});

	$: webglUnsupported =
		type === 'WEBGL_UNSUPPORTED' || type === 'BLOCKLISTED';
	$: gpuSpeedBelowThreshold = Number(tier) <= 0;
	$: knownBad = gpu?.toLowerCase().includes('apple a') && isMobile;

	$: if (webglUnsupported || gpuSpeedBelowThreshold || knownBad)
		state = BottomSheetStates.PEEK;
</script>

<div class="performance-disclaimer">
	<BottomSheet
		bind:state
		colourBackground="----colour-background-primary"
		fullHeight="100%"
		peekHeight="100%"
		width="min(100%, 600px)"
		roundness={28}
	>
		<div class="content">
			<div class="close">
				<Button
					{...ButtonVariants.Fab.Md}
					{...ButtonVariants.Transparent}
					{...ButtonVariants.Shadow.None}
					roundness={56}
					on:click={dismiss}
				>
					<Svg svg={ic_close} />
				</Button>
			</div>
			<div class="heading">
				<div class="chip">
					<Svg
						width="1em"
						height="1em"
						svg={ic_warning}
					/>
					Warning
				</div>
				<h2>Below Minimum Requirements</h2>
			</div>

			<p>Hi! Your friendly neighbourhood developer here.</p>
			<p>
				It seems like your device might have some trouble running this
				site, but we will try to continue.
			</p>

			<h4>Detections</h4>
			<blockquote>
				{#if webglUnsupported}<span class="error"
						><span class="icon"
							><Svg
								svg={ic_cancel}
								height="1em"
								width="1em"
							/></span
						>Your device doesn't support WebGL</span
					>{:else}<span
						><span class="icon"
							><Svg
								svg={ic_check_circle}
								height="1em"
								width="1em"
							/></span
						>Your device supports WebGL</span
					>{/if}
				{#if gpuSpeedBelowThreshold}<span class="error"
						><span class="icon"
							><Svg
								svg={ic_cancel}
								height="1em"
								width="1em"
							/></span
						>Your GPU speed is below the site's required threshold</span
					>{:else}<span
						><span class="icon"
							><Svg
								svg={ic_check_circle}
								height="1em"
								width="1em"
							/></span
						>Your GPU speed is above the site's required threshold</span
					>{/if}
				{#if knownBad}<span class="error"
						><span class="icon"
							><Svg
								svg={ic_cancel}
								height="1em"
								width="1em"
							/></span
						>Your device ({gpu}) is known to misbehave when under
						load</span
					>{:else}<span
						><span class="icon"
							><Svg
								svg={ic_check_circle}
								height="1em"
								width="1em"
							/></span
						>Your device doesn't have known bugs that affect
						performance</span
					>{/if}
			</blockquote>

			<p>
				You may experience unexpected bugs & behaviours from here on
				out. Hang tight!
			</p>

			<Spacer height={56 + 56 + 42} />
		</div>
		<div
			class="dismiss"
			slot="overlay"
		>
			<Button
				{...ButtonVariants.Primary}
				on:click={dismiss}
			>
				<Svg
					svg={ic_close}
					slot="left"
				/>
				Dismiss
			</Button>
			<Button
				{...ButtonVariants.Secondary}
				on:click={dismissForever}
			>
				<Svg
					svg={ic_do_not_disturb}
					slot="left"
				/>
				Don't remind me again
			</Button>
		</div>
	</BottomSheet>
</div>

<style lang="postcss">
	.performance-disclaimer {
		position: fixed;
		z-index: 9999999999;

		& .content {
			/* position: relative; */
			padding: 28px;
			box-sizing: border-box;

			display: flex;
			flex-direction: column;
			gap: 14px;

			/* min-height: 100%; */

			& > p {
				margin-block: 0.3em;
			}

			& > h4 {
				margin-block: 0.3em;
				margin-top: 1em;
			}

			& > blockquote {
				font-size: 1.5em;
				font-style: normal;
				font-weight: 100;
				line-height: 1;
				letter-spacing: -0.03em;

				margin-inline: 0;
				margin-block: 2.33rem;
				margin-top: 0;
				margin-bottom: 1em;

				border-block: 1px solid var(----colour-background-tertiary);
				padding-block: 1em;

				display: flex;
				flex-direction: column;
				gap: 14px;

				& > span {
					display: flex;
					align-items: center;
					gap: 28px;

					&.error {
						color: #eb2f06;
					}

					& > .icon {
						min-width: 1em;
					}
				}
			}

			& > .close {
				position: absolute;
				top: 0;
				right: 0;
			}

			& > .heading {
				display: flex;
				flex-direction: column;
				gap: 28px;

				& > h2 {
					margin: 0;

					color: var(----colour-text-primary);

					padding-bottom: 14px;
					border-bottom: 1px solid var(----colour-text-tertiary);
				}

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

					/* background-color: #fa983a33;
					border: 1px solid #fa983a;
					color: #f3b072; */
				}
			}
		}

		& .dismiss {
			/* position: fixed; */
			/* bottom: 0; */
			width: min(100vw, 600px);

			display: flex;
			flex-direction: column;
			gap: 14px;

			padding: 28px;
			box-sizing: border-box;
			background: var(----colour-background-primary);
		}
	}
</style>
