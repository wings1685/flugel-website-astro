import type { Months } from "@/_global/lib/shared";

type Store = Months | '';
const initialValue: Store = '';

export const _svelteSelectedMonth = {
	server: {
		selectedMonth: (): Months => initialValue,
		setSelectedMonth: (_: Months = '') => {},
	},
	client: () => {
		let selectedMonth = $state<Months>();
		const setSelectedMonth = (value: typeof selectedMonth = '') => { selectedMonth = value };

		return { selectedMonth: () => selectedMonth, setSelectedMonth };
	},
};
