import type { BuildingInfo } from '../../building/lib/BuildingInfo';

export interface DirectoryRoute {
	info: BuildingInfo;
	object: THREE.Object3D;
	url: string;
}
