<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Months } from "@/_global/lib/shared";
	import type { DeepGuard } from "@/_global/types/types";
	import "@/components/shared/Sections/Glass.sass";

	type Props = HTMLAttributes<HTMLButtonElement> & {
		month: Months;
		name: string;
	};

	const props: DeepGuard<Props> = $props();

	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	const handleClick = (e: Event, key: Months) => {
		e.preventDefault();

		if (selectedMonth()) return;

		setSelectedMonth(key);
	};
</script>
<button onclick={ (e: Event) => handleClick(e, props.month) } class={[ 'glass mini is_dark btn_nav', props.class ]}>{ props.name }</button>
