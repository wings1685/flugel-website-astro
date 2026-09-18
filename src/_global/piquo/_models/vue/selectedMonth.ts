import { ref } from "vue";
import type { Months } from "@/_global/lib/shared";

type Store = Months | '';
const initialValue: Store = '';

export const _vueSelectedMonth = {
	server: {
		selectedMonth: (): Months => initialValue,
		setSelectedMonth: (_: Months = '') => {},
	},
	client: () => {
		const selectedMonth = ref<Months>();
		const setSelectedMonth = (value: Store = '') => { selectedMonth.value = value };

		return { selectedMonth: () => selectedMonth.value, setSelectedMonth };
	},
};
