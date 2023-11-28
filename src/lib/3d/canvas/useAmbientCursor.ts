import { getContext, onDestroy, setContext } from 'svelte';
import type { AmbientCursorContext } from './AmbientCursorContext';
import { ambientCursorContextKey } from './AmbientCanvas.svelte';

export const useAmbientCursor = (
	cursor?: ReturnType<AmbientCursorContext['cursor']['get']>,
	cursorHover?: ReturnType<AmbientCursorContext['cursorHover']['get']>,
	cursorActive?: ReturnType<AmbientCursorContext['cursorActive']['get']>,
): AmbientCursorContext | undefined => {
	const ctx = getContext<AmbientCursorContext>(ambientCursorContextKey);
	const {
		cursor: initialCursor,
		cursorHover: initialCursorHover,
		cursorHoverCount,
		cursorActive: initialCursorActive,
	} = ctx;

	if (cursor) ctx.cursor.set(cursor);
	if (cursorHover) ctx.cursorHover.set(cursorHover);
	if (cursorActive) ctx.cursorActive.set(cursorActive);

	onDestroy(() => {
		cursorHoverCount.set(0);

		setContext(ambientCursorContextKey, {
			cursor: initialCursor,
			cursorHover: initialCursorHover,
			cursorHoverCount,
			cursorActive: initialCursorActive,
		});
	});

	return ctx;
};
