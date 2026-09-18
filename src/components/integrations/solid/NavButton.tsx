import { useStore } from "@/_global/piquo";
import { propsClass } from "@/_global/lib/utils";
import type { Months } from "@/_global/lib/shared";
import type { DeepGuard } from "@/_global/types/types";
import "@/components/shared/Sections/Glass.sass";

type Props = {
	month: Months;
	name: string;
};

export default function NavButton(props: DeepGuard<Props>) {
	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	const handleClick = (e: Event, key: Months) => {
		e.preventDefault();

		if (selectedMonth()) return;

		setSelectedMonth(key);
	};
	return (
		<button onClick={ (e: Event) => handleClick(e, props.month) } class="glass mini is_dark btn_nav" classList={{ ...propsClass(props) }}>{ props.name }</button>
	)
}
