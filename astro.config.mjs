import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://stoyan-scava.github.io',
	base: '/voice-over-101-introduction',
	integrations: [mdx(), sitemap()],
});
