<script lang="ts">
	import ExrHdriProvider from '../../../lib/3d/environment/ExrHdriProvider.svelte';
	import exr_hdri from '../../../assets/village/hdri/dikhololo_night_2k.exr?url';
	import { Store } from '@sxxov/ut/store';
</script>

<ExrHdriProvider
	ctx={{
		exr: new Store(exr_hdri),
	}}
>
	<slot />
</ExrHdriProvider>
