type Store = boolean;
const initialValue: Store = false;

export const _svelteNavOpened = {
	server: {
		navOpened: (): Store => initialValue,
		setNavOpened: (_: Store) => {},
	},
	client: () => {
		let navOpened = $state<Store>(initialValue);
		const setNavOpened = (value: typeof navOpened) => { navOpened = value };

		return { navOpened: () => navOpened, setNavOpened };
	},
};
