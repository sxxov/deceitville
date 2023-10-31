import { getContext } from 'svelte';
import { buildingNavContextKey } from './BuildingNav.svelte';
import type { BuildingNavContext } from './BuildingNavContext';

export const useBuildingNav = (): BuildingNavContext | undefined =>
	getContext(buildingNavContextKey);
