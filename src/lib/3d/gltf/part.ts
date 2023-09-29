import {
	GLTFLoader,
	type GLTF,
} from 'three/examples/jsm/loaders/GLTFLoader.js';
import type * as parts from '../../../assets/village/parts/gltfs.db';
import type * as text from '../../../assets/village/text/gltfs.db';
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

const partCache = new Map<
	(typeof parts)[keyof typeof parts] | (typeof text)[keyof typeof text],
	Part
>();
export const createPart = async (
	gltf: (typeof parts)[keyof typeof parts] | (typeof text)[keyof typeof text],
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
