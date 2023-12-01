import type { Supply } from '@sxxov/ut/store';
import type { BuildingInfo } from '../../building/lib/info/BuildingInfo';

export interface DirectoryRoute {
	info: BuildingInfo;
	url: string;
	completed: Supply<boolean>;
	comingSoon: boolean;
}
