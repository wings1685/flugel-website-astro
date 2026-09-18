import { createSignal, onMount } from "solid-js";
import { flugel } from "@/_global/lib/shared";

export default function Copyright() {
	const [ year, setYear ] = createSignal<number>(2026);

	onMount(() => setYear((new Date()).getFullYear()));

	return (
		<p class="copyright">{ flugel } &copy; { year() }</p>
	)
}
