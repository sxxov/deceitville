<script lang="ts">
	import { useLoader, useRender, useThrelte } from '@threlte/core';
	import {
		BloomEffect,
		BrightnessContrastEffect,
		ChromaticAberrationEffect,
		DotScreenEffect,
		EffectComposer,
		EffectPass,
		HueSaturationEffect,
		KernelSize,
		LUT3DEffect,
		LUTCubeLoader,
		RenderPass,
		SMAAEffect,
		SMAAPreset,
		VignetteEffect,
	} from 'postprocessing';
	import * as THREE from 'three';
	import img_lut from '../../../assets/common/3d/lut/django-25.cube?url';

	const { camera, scene, renderer } = useThrelte();

	const composer = new EffectComposer(renderer);
	const lutCubeLoader = useLoader(LUTCubeLoader as any);
	const lutTex = lutCubeLoader.load(img_lut);

	const bloom = new BloomEffect({
		intensity: 1,
		luminanceThreshold: 0.15,
		height: 512,
		width: 512,
		luminanceSmoothing: 0.08,
		mipmapBlur: true,
		kernelSize: KernelSize.MEDIUM,
	});
	const smaa = new SMAAEffect({
		preset: SMAAPreset.LOW,
	});
	const chromaticAberration = new ChromaticAberrationEffect({
		offset: new THREE.Vector2(0.001, 0),
		radialModulation: false,
		modulationOffset: 0,
	});
	const brightnessContrast = new BrightnessContrastEffect({
		contrast: 0.6,
		brightness: -0.2,
	});
	const dotScreen = new DotScreenEffect({
		scale: 1,
	});
	const vignette = new VignetteEffect({
		eskil: false,
		offset: 0.1,
		darkness: 1,
	});
	$: lut =
		// kill. me.
		// Safari will render a black screen with LUT3DEffect
		// Ping me in the future when Safari gets deprecated
		$lutTex && !('webkitConvertPointFromNodeToPage' in globalThis)
			? // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			  new LUT3DEffect($lutTex)
			: undefined;
	const hueSaturation = new HueSaturationEffect({
		hue: 0,
		saturation: -1,
	});

	$: effects = [
		bloom,
		smaa,
		chromaticAberration,
		brightnessContrast,
		dotScreen,
		vignette,
		lut,
		hueSaturation,
	];

	let renderPass: RenderPass;
	let fxPasses: EffectPass[];
	$: {
		if (renderPass) composer.removePass(renderPass);
		renderPass = new RenderPass(scene, $camera);
		composer.addPass(renderPass);

		if (fxPasses) for (const pass of fxPasses) composer.removePass(pass);
		fxPasses = effects
			.filter(Boolean)
			.map((effect) => new EffectPass($camera, effect!));
		for (const pass of fxPasses) composer.addPass(pass);
	}

	useRender((_, delta) => {
		composer.render(delta);
	});
</script>
