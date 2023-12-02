// @ts-nocheck

const splashDiv = document.querySelector('.global.splash');

if (splashDiv instanceof HTMLDivElement) {
	splashDiv.classList.add('created');

	const splashSvgDiv = splashDiv.querySelector('.svg');
	const splashSvg = splashSvgDiv.querySelector('svg');

	if (splashSvg instanceof SVGSVGElement) {
		const splashSvgAspect = 13.6487 / 36.6361;
		const clonesDiv = document.createElement('div');
		clonesDiv.classList.add('clones');
		splashSvgDiv.appendChild(clonesDiv);

		const updateSvgs = () => {
			const svgWidth = window.innerHeight * splashSvgAspect;
			const count = Math.ceil(window.innerWidth / svgWidth);
			const clones = clonesDiv.querySelectorAll('svg');

			splashSvgDiv.style.setProperty('--l', `${count}`);

			if (clones.length < count)
				for (let i = clones.length; i < count; ++i) {
					const clone = splashSvg.cloneNode(true);
					clone.style.setProperty('--i', `${i + 1}`);
					clonesDiv.appendChild(clone);
				}
			else if (clones.length > count)
				for (let i = clones.length; i > count; --i)
					clonesDiv.removeChild(clones[i - 1]);
		};

		const timeStart = performance.now();

		splashDiv.addEventListener('splash:mounted', () => {
			const timeEnd = performance.now();
			const timeDiff = timeEnd - timeStart;

			if (timeDiff < 500) splashDiv.classList.add('suppressed');
			splashDiv.classList.remove('active');

			window.removeEventListener('resize', updateSvgs);
		});

		window.addEventListener('resize', updateSvgs);
		updateSvgs();
	}

	const paceProgressDiv = await (async () => {
		let paceProgressDiv;
		while (!(paceProgressDiv = document.querySelector('.pace-progress')))
			await new Promise((resolve) => {
				setTimeout(resolve, 10);
			});
		return paceProgressDiv;
	})();

	if (paceProgressDiv instanceof HTMLDivElement) {
		const mo = new MutationObserver((recs) => {
			for (const rec of recs)
				if (
					rec.type === 'attributes' &&
					rec.attributeName === 'data-progress'
				) {
					const progress =
						/translate3d\((.+?%),.+\)/.exec(
							paceProgressDiv.style.transform,
						)?.[1] ?? `${paceProgressDiv.dataset.progress ?? '0'}%`;

					splashDiv.style.setProperty('--progress', `${progress}`);

					return;
				}
		});

		mo.observe(paceProgressDiv, { attributes: true });
	}
}
