import { ref } from "vue";

type Store = boolean;
const initialValue: Store = false;

export const _vueNavOpened = {
	server: {
		navOpened: (): Store => initialValue,
		setNavOpened: (_: Store) => {},
	},
	client: () => {
		const navOpened = ref<Store>(initialValue);
		const setNavOpened = (value: Store) => { navOpened.value = value };

		return { navOpened: () => navOpened.value, setNavOpened };
	},
};
