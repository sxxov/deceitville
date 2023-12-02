// @ts-nocheck

const splashDiv = document.querySelector('.global.splash');

if (splashDiv instanceof HTMLDivElement) {
	const timeStart = performance.now();

	splashDiv.classList.add('created');

	splashDiv.addEventListener('splash:mounted', () => {
		const timeEnd = performance.now();
		const timeDiff = timeEnd - timeStart;

		if (timeDiff < 500) splashDiv.classList.add('suppressed');
		splashDiv.classList.remove('active');
	});

	const splashSvgDiv = splashDiv.querySelector('.svg');
	const splashSvg = splashSvgDiv.querySelector('svg');
	const splashSvgAspect = 13.6487 / 36.6361;
	const clonesDiv = document.createElement('div');
	clonesDiv.classList.add('clones');
	splashSvgDiv.appendChild(clonesDiv);
	if (
		splashSvg instanceof SVGSVGElement &&
		clonesDiv instanceof HTMLDivElement
	) {
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

		window.addEventListener('resize', updateSvgs);
		updateSvgs();
	}

	let paceProgressDiv = document.querySelector('.pace-progress');
	while (!paceProgressDiv) {
		await new Promise((resolve) => {
			setTimeout(resolve, 10);
		});
		paceProgressDiv = document.querySelector('.pace-progress');
	}

	if (paceProgressDiv instanceof HTMLDivElement) {
		const mo = new MutationObserver((recs) => {
			for (const rec of recs)
				if (
					rec.type === 'attributes' &&
					rec.attributeName === 'data-progress'
				) {
					splashDiv.style.setProperty(
						'--progress',
						`${paceProgressDiv.dataset.progress ?? '0'}%`,
					);

					return;
				}
		});

		mo.observe(paceProgressDiv, { attributes: true });
	}
}
