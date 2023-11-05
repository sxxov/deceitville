import { Store } from '@sxxov/ut/store';
import { infos } from '../../building/lib/info/infos';
import { browser } from '$app/environment';

const c = new Store(0);
export const completion = c.supply;
export const health = completion.derive((v) => 1 - v);

const completableLocalStorageKey = 'completable';

const read = (
	ref = Object.fromEntries(
		Object.entries(infos).map(
			([, v]) => [v.id, false] as [id: string, value: boolean],
		),
	),
) => {
	if (!browser) return ref;

	const string = localStorage.getItem(completableLocalStorageKey);
	if (string)
		try {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const json = JSON.parse(string);
			for (const [k] of Object.entries(ref)) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const data = json[k];

				if (typeof data === 'boolean') ref[k] = data;
			}
		} catch {}

	return ref;
};

const write = (ref: Record<string, boolean>) => {
	if (!browser) return;

	localStorage.setItem(completableLocalStorageKey, JSON.stringify(ref));
};

const completableRef = read();
const completableEntries = Object.entries(completableRef).map(
	([k, v]) => [k, new Store(v)] as const,
);
export const completable = Object.fromEntries(completableEntries);
const getCompletion = () =>
	completableEntries.reduce((p, [, v]) => p + (v.get() ? 1 : 0), 0) /
	completableEntries.length;
c.set(getCompletion());
for (const [k, v] of completableEntries)
	v.subscribeLazy((v) => {
		c.set(getCompletion());
		completableRef[k] = v;
		write(completableRef);
	});
