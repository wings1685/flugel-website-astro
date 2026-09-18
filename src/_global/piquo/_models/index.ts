import { integration } from "@/_global/lib/shared";
import { _solidNavOpened } from "./solid/navOpened";
import { _solidSelectedMonth } from "./solid/selectedMonth";
import { _svelteNavOpened } from "./svelte/navOpened.svelte";
import { _svelteSelectedMonth } from "./svelte/selectedMonth.svelte";
import { _vueNavOpened } from "./vue/navOpened";
import { _vueSelectedMonth } from "./vue/selectedMonth";

export const allStores = {
	navOpened: integration === 'solid' ? _solidNavOpened : integration === 'svelte' ? _svelteNavOpened : _vueNavOpened,
	selectedMonth: integration === 'solid' ? _solidSelectedMonth : integration === 'svelte' ? _svelteSelectedMonth : _vueSelectedMonth,
} as const;
export type AllStores = typeof allStores;
export type AllStoreKeys = keyof AllStores;
