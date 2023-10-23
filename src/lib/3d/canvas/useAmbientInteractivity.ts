import { getContext } from 'svelte';
import { ambientInteractivityContextKey } from './AmbientCanvas.svelte';
import type { AmbientInteractivity } from './AmbientInteractivity';

export const useAmbientInteractivity = (enabled = true) => {
	const { interactivity } = getContext<AmbientInteractivity>(
		ambientInteractivityContextKey,
	);
	interactivity.enabled.set(enabled);

	return interactivity;
};
