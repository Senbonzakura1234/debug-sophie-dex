import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: { fontFamily: { atelier: ['var(--font-atelier)'] } },
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['autumn', 'fantasy', 'forest', 'synthwave'],
	},
	darkMode: 'class',
};
export default config;
