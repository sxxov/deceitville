import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

const production = process.env['NODE_ENV'] === 'production';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	compilerOptions: {
		dev: !production,
	},
	kit: {
		adapter: adapter({
			runtime: 'edge',
		}),
		files: {
			appTemplate: 'src/app.html',
		},
	},
	vitePlugin: {},
};
