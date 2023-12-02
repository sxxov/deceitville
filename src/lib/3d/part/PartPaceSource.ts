import { browser } from '$app/environment';
import type { OrAnyNumber } from '@sxxov/ut/types';

export class PartPaceSource implements Pace.ProgressSource {
	public static readonly instance = new PartPaceSource();

	private trackedPartCount = 0;
	private loadingPartCount = 0;

	public get progress(): OrAnyNumber<0 | 100> {
		const v =
			this.trackedPartCount <= 0
				? 100
				: Math.max(
						(this.trackedPartCount - this.loadingPartCount) /
							this.trackedPartCount,
						0,
				  ) * 100;

		console.log('progress', v);

		return v;
	}

	public async track<T>(promise: Promise<T>): Promise<T> {
		if (browser && this.trackedPartCount <= 0 && !Pace.running)
			Pace.restart();

		++this.trackedPartCount;
		++this.loadingPartCount;

		void promise.then(() => {
			--this.loadingPartCount;

			if (this.loadingPartCount <= 0) {
				this.loadingPartCount = 0;
				this.trackedPartCount = 0;

				if (browser) Pace.stop();
			}
		});

		return promise;
	}

	constructor() {
		// eslint-disable-next-line no-constructor-return
		return PartPaceSource.instance;
	}
}

if (browser) (Pace.options.extraSources ??= []).push(PartPaceSource);
