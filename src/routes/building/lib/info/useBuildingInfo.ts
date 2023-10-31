import { getContext, setContext } from 'svelte';
import type { BuildingInfo } from './BuildingInfo';

export const buildingInfoContextKey = Symbol('buildingInfo');

export const useBuildingInfoRegistration = (info: BuildingInfo) => {
	setContext(buildingInfoContextKey, info);
};

export const useBuildingInfo = (): BuildingInfo | undefined =>
	getContext(buildingInfoContextKey);
