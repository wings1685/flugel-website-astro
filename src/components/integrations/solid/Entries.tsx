import { Index, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { fetchEntries } from "@/components/routes/_models/usePage";
import { GlassButton } from "@/components/integrations";
import type { BlogEntries } from "@/components/routes/_models/schema";
import "@/components/shared/Typography/Paragraph.sass";

export default function Entries() {
	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	const [ entries, setEntries ] = createStore<BlogEntries>([...Array(5)].map((_, i) => ({
		title: '**********',
		link: '',
		published: '2026-01-01 00:00:00',
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	})));

	onMount(async () => {
		setEntries(await fetchEntries());
	});

	return (
		<Index each={ entries }>
			{entry => (
				<li>
					<article>
						<GlassButton as="a" href={ entry().link } target="_blank">
							<p>{ entry().title }</p>
							<slot />
						</GlassButton>
						<span class="published">{ formatDate(entry().published )}</span>
						<p class="paragraph summary">{ entry().summary }</p>
					</article>
				</li>
			)}
		</Index>
	)
}
