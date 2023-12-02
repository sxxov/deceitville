import type { PartfulGltf } from './PartfulGltf';
import { gltfLoader } from './gltfLoader';

const partCache = new Map<Record<any, any>, PartfulGltf>();
export const createPart = async <T extends Record<any, any>>(
	gltf: T,
): Promise<PartfulGltf> => {
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
