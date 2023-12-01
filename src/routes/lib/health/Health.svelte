<script lang="ts">
	import { R } from '@sxxov/sv/functional';
	import { Svg } from '@sxxov/sv/svg';
	import { UnreachableError } from '@sxxov/ut/errors';
	import { raise } from '@sxxov/ut/functional';
	import { infos } from '../../building/lib/info/infos';
	import { ic_heart_broken, ic_favorite } from 'maic/two_tone';
	import HealthScene from './HealthScene.svelte';
	import { completable } from './completion';
	import { Store } from '@sxxov/ut/store';

	const infosEntries = Object.entries(infos);

	const heartsBlueprint = [
		{
			icon: ic_heart_broken,
			predicate: (v: boolean) => v,
		},
		{
			icon: ic_favorite,
			predicate: (v: boolean) => !v,
		},
	];
	const completableEntries = Object.entries(completable);
</script>

<HealthScene />
<div class="health">
	<div class="content">
		<h2 class="top">Town Status</h2>
		<div class="hearts">
			{#each heartsBlueprint as { icon, predicate }}
				{#each completableEntries as [k, r]}
					{@const hovering = new Store(false)}
					<R
						{r}
						let:v
					>
						{#if predicate(v)}
							{@const [url, info] =
								infosEntries.find(([, v]) => v.id === k) ??
								raise(
									new UnreachableError(
										'Could not find info from completable key',
									),
								)}
							{#if info}
								<a
									href={url}
									on:pointerover={(e) => {
										if (e.pointerType === 'mouse')
											hovering.set(true);
									}}
									on:keyup={(e) => {
										if (e.key === 'Tab') hovering.set(true);
									}}
									on:blur={() => {
										hovering.set(false);
									}}
									on:click={(e) => {
										if (!hovering.get()) {
											e.preventDefault();
											hovering.set(true);
										}
									}}
								>
									<div class="heart">
										<Svg
											width={16}
											svg={icon}
										/>
										<div class="hint">
											<Svg
												width={16}
												svg={info.icon}
											/>{info.name}
										</div>
									</div>
								</a>
							{/if}
						{/if}
					</R>
				{/each}
			{/each}
		</div>
		<h2 class="bottom">H</h2>
	</div>

	<div class="padding end"></div>
</div>

<style lang="postcss">
	.health {
		position: relative;
		top: 0;
		width: 100%;
		pointer-events: none;

		z-index: 1;

		& > .content {
			width: 100%;
			height: 100vh;
			height: 100lvh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;

			pointer-events: auto;

			/* border-bottom: 1px solid var(----colour-text-primary); */

			& > h2 {
				/* font-size: 4em; */

				&.top {
					color: var(----colour-text-primary);
				}

				&.bottom {
					visibility: hidden;
					pointer-events: none;
					user-select: none;
				}
			}

			& > .hearts {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				gap: 14px;
				padding: 0 28px;

				& > a {
					pointer-events: auto;

					& > .heart {
						position: relative;

						display: flex;
						gap: 14px;
						align-items: center;
						justify-content: center;

						border-radius: 999px;
						border: 1px solid var(----colour-text-primary);
						padding: 28px;
						box-sizing: border-box;
						background: var(----colour-background-primary);
						color: var(----colour-text-primary);

						&:hover,
						&:focus,
						&:active {
							color: var(----colour-background-primary);
							background: var(----colour-text-primary);

							& > .hint {
								color: var(----colour-text-primary);
							}
						}

						&:not(:hover) {
							& > .hint {
								opacity: 0;
								transform: translate(0, 3.5px);
							}
						}

						& > .hint {
							position: absolute;

							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 7px;

							bottom: calc(100% + 14px);
							text-align: center;

							border-radius: 999px;
							border: 1px solid var(----colour-text-primary);
							padding: 14px;
							box-sizing: border-box;
							background: var(----colour-background-primary);

							pointer-events: none;

							opacity: 1;
							transform: translate(0, 0);

							transition:
								opacity 0.1s var(----ease-fast-slow),
								transform 0.2s var(----ease-fast-slow);

							&::before {
								content: '';
								position: absolute;
								top: 100%;
								left: 50%;
								width: 0;
								height: 0;
								border-left: 7px solid transparent;
								border-right: 7px solid transparent;
								border-top: 7px solid
									var(----colour-text-primary);
								transform: translate(-50%, 0);
							}
						}
					}
				}
			}
		}
	}
</style>
