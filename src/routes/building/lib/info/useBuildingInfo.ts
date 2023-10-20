import { getContext, setContext } from 'svelte';
import type { BuildingInfo } from './BuildingInfo';

export const buildingInfoContextKey = Symbol('buildingInfo');

export const useBuildingInfo: (() => BuildingInfo | undefined) &
	(<T extends BuildingInfo>(info: T) => T) = (info?: BuildingInfo) => {
	if (info) {
		setContext<BuildingInfo>(buildingInfoContextKey, info);

		return info;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return getContext<BuildingInfo>(buildingInfoContextKey) as any;
};
