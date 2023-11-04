import { resolveRouteUrl } from '../../../../lib/url/resolveRouteUrl';
import type { BuildingInfo } from './BuildingInfo';

export const infos = Object.fromEntries(
	Object.entries(
		import.meta.glob<true, string, BuildingInfo>('../../**/@info.ts', {
			eager: true,
			import: 'info',
		}),
	).map(([k, v]) => [
		resolveRouteUrl(
			k
				.replace(/^\.\.\/\.\.\//, 'routes/building/')
				.slice(0, -'@info.ts'.length - 1),
		),
		v,
	]),
) as Record<`/building/${string}`, BuildingInfo>;
