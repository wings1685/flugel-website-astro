// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({
    integrations: [
		solidJs({
			include: ['**/solid/**/*'],
        }),
		svelte(),
		vue()
	],
  vite: {
	plugins: [
		yaml(),
	],
  },
});
