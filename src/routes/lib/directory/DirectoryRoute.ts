import type { BuildingInfo } from '../../building/lib/info/BuildingInfo';

export interface DirectoryRoute {
	info: BuildingInfo;
	object: THREE.Object3D;
	url: string;
}
