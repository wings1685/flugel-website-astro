import { Dynamic } from "solid-js/web";
import { useStore } from "@/_global/piquo";
import { propsClass } from "@/_global/lib/utils";
import type { JSX } from "solid-js";
import type { DeepGuard } from "@/_global/types/types";
import "@/components/shared/Sections/Glass.sass";

type Props = {
	children: JSX.Element;
} & ( | (JSX.IntrinsicElements['a'] & {
	as: 'a';
	href: string;
}) | (JSX.IntrinsicElements['div'] & {
	as: 'div';
	href?: never;
}));

export default function GlassButton(props: DeepGuard<Props>) {
	const { navOpened, setNavOpened } = useStore('navOpened');

	const handleClick = (e?: Event) => {
		if (e) {
			e.preventDefault();
			setNavOpened(!navOpened());
		} else {
			setNavOpened(false);
		}
	};

	return (
		<Dynamic component={ props.as } { ...props } onClick={ (e: Event) => handleClick(props.as === 'a' ? undefined : e) } class="glass mini is_dark" classList={{ ...propsClass(props) }}>
			{ props.children }
		</Dynamic>
	)
}
