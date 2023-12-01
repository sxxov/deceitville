import { DRACOLoader } from 'three-stdlib';

/** Global DRACO loader instance */
export const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
	'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
);
