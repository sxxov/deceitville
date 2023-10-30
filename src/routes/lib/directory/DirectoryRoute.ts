import type { BuildingInfo } from '../../building/lib/info/BuildingInfo';

export interface DirectoryRoute {
	info: BuildingInfo;
	url: string;
}
