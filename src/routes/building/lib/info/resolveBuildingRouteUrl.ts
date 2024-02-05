import { IllegalArgumentError } from '@sxxov/ut/errors';
import { resolveRouteUrl } from '../../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from './BuildingInfo';

export const resolveBuildingRouteUrl = (path: string) => {
	const resolved = resolveRouteUrl(path);

	if (!resolved.startsWith('/building/'))
		throw new IllegalArgumentError(
			`Path (${path} → ${resolved}) is not a building route.`,
		);

	return resolved as BuildingInfo['id'];
};
