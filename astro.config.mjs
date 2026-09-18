// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    integrations: [
		solidJs({
			include: ['**/solid/**/*'],
        }),
		svelte(),
		vue()
	]
});
