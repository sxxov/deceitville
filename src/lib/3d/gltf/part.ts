import {
	GLTFLoader,
	type GLTF,
} from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { gltfs } from '../../../assets/village/parts/index';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export interface Part extends GLTF {
	object: THREE.Object3D | undefined;
}

const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
	'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
);
gltfLoader.setDRACOLoader(dracoLoader);

const partCache = new Map<(typeof gltfs)[keyof typeof gltfs], Part>();
export const createPart = async (
	gltf: (typeof gltfs)[keyof typeof gltfs],
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
