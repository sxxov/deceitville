<script lang="ts">
	import { R } from '@sxxov/sv/functional';
	import { Svg } from '@sxxov/sv/svg';
	import { UnreachableError } from '@sxxov/ut/errors';
	import { raise } from '@sxxov/ut/functional';
	import { infos } from '../../building/lib/info/infos';
	import { ic_heart_broken, ic_favorite } from 'maic/filled';
	import HealthScene from './HealthScene.svelte';
	import { completable } from './completion';
	import { Store } from '@sxxov/ut/store';
	import type { BuildingInfo } from '../../building/lib/info/BuildingInfo';
	import { onDestroy } from 'svelte';

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
	const completableEntries = Object.entries(completable) as [
		keyof typeof infos,
		Store<boolean>,
	][];

	let completeds: BuildingInfo[] = [];
	let incompleteds: BuildingInfo[] = [];
	const completedUnsubscribes = completableEntries.map(([, completed]) =>
		completed.subscribe(() => {
			completeds = completableEntries
				.filter(([, v]) => v.get())
				.map(([k]) => {
					const [, v] =
						infosEntries.find(([, v]) => v.id === k) ??
						raise(
							new UnreachableError(
								'Could not find info from completable key',
							),
						);
					return v;
				});
			incompleteds = completableEntries
				.filter(([, v]) => !v.get())
				.map(([k]) => {
					const [, v] =
						infosEntries.find(([, v]) => v.id === k) ??
						raise(
							new UnreachableError(
								'Could not find info from completable key',
							),
						);
					return v;
				});
		}),
	);

	onDestroy(() => {
		for (const unsubscribe of completedUnsubscribes) unsubscribe();
	});

	let info: BuildingInfo | undefined;
</script>

<HealthScene
	selected={info}
	{completeds}
	{incompleteds}
/>
<div class="health">
	<div class="content">
		<!-- <h2 class="top">
			{completedCount}/{completableEntries.length}
		</h2> -->
		<div class="hearts">
			{#each heartsBlueprint as { icon, predicate }}
				{#each completableEntries as [k, r]}
					{@const hovering = new Store(false)}
					<R
						{r}
						let:v={completed}
					>
						{#if predicate(completed)}
							{@const [url, v] =
								infosEntries.find(([, v]) => v.id === k) ??
								raise(
									new UnreachableError(
										'Could not find info from completable key',
									),
								)}
							{#if v}
								<a
									href={url}
									on:pointerover={(e) => {
										if (e.pointerType === 'mouse') {
											hovering.set(true);
											info = v;
										}
									}}
									on:pointerleave={() => {
										hovering.set(false);
										info = undefined;
									}}
									on:keyup={(e) => {
										if (e.key === 'Tab') {
											hovering.set(true);
											info = v;
										}
									}}
									on:blur={() => {
										hovering.set(false);
										info = undefined;
									}}
									on:click={(e) => {
										if (!hovering.get()) {
											e.preventDefault();
											hovering.set(true);
											info = v;
										}
									}}
								>
									<div
										class="heart"
										class:broken={completed}
									>
										<Svg
											width={24}
											height={24}
											svg={icon}
										/>
										<div class="hint">
											<Svg
												width={16}
												svg={v.icon}
											/>{v.name}
										</div>
									</div>
								</a>
							{/if}
						{/if}
					</R>
				{/each}
			{/each}
		</div>
		<h2 class="bottom">{completeds.length}/{completableEntries.length}</h2>
	</div>

	<div class="padding end"></div>
</div>

<style lang="postcss">
	.health {
		position: sticky;
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

			padding: 28px;
			box-sizing: border-box;

			/* border-bottom: 1px solid var(----colour-text-primary); */

			& > h2 {
				/* font-size: 4em; */

				margin: 0;

				&.top {
					visibility: hidden;
					pointer-events: none;
					user-select: none;
				}

				&.bottom {
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
					display: contents;

					& > .heart {
						pointer-events: auto;
						position: relative;

						display: flex;
						gap: 14px;
						align-items: center;
						justify-content: center;

						border-radius: 999px;
						border: 1px solid var(----colour-text-primary);
						padding: 21px;
						box-sizing: border-box;
						color: var(----colour-text-primary);
						background: #000;

						&::after {
							content: 'Healthy';
							position: absolute;
							top: calc(100% + 14px);
							left: 50%;
							transform: translate(-50%, 0);
							padding: 7px 14px;
							border-radius: 999px;
							border: 1px solid var(----colour-text-primary);
							background: #000;
							color: var(----colour-text-primary);
							/* font-size: 0.8em; */
							pointer-events: none;

							opacity: 1;

							transition:
								opacity 0.1s var(----ease-fast-slow),
								transform 0.2s var(----ease-fast-slow);
						}

						&.broken {
							background: #0008;

							&::after {
								content: 'Destroyed';
							}
						}

						&:hover,
						&:focus,
						&:active {
							z-index: 2;
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

							&::after {
								opacity: 0;
								transform: translate(-50%, -3.5px);
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
							background: #000;

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

		& > .padding {
			height: 100vh;
			height: 100lvh;
		}
	}
</style>
