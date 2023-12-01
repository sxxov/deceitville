import type { GLTF } from 'three-stdlib';
import { gltfLoader } from './gltfLoader';

export interface Part extends GLTF {
	object: THREE.Object3D | undefined;
}

const partCache = new Map<Record<any, any>, Part>();
export const createPart = async <T extends Record<any, any>>(
	gltf: T,
): Promise<Part> => {
	let part = partCache.get(gltf);

	if (!part) {
		const result = // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			await gltfLoader.parseAsync(gltf as any, '');
		const [object] = result.scene.children;

		part = {
			...result,
			object,
		};

		partCache.set(gltf, part);
	}

	return part;
};
