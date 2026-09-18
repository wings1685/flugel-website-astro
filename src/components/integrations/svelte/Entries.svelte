<script lang="ts">
	import { onMount } from "svelte";
	import { fetchEntries } from "@/components/routes/_models/usePage";
	import { GlassButton } from "@/components/integrations";
	import type { BlogEntries } from "@/components/routes/_models/schema";
	import "@/components/shared/Typography/Paragraph.sass";

	const props = $props();
	let entries = $state([...Array(5)].map((_, i) => ({
		title: '**********',
		link: '',
		published: '2026-01-01 00:00:00',
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	})));
	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	onMount(() => {
		const getEntries = async () => { entries = await fetchEntries() };
		getEntries();
	});
</script>
{#each entries as entry}
	<li>
		<article>
			<GlassButton as="a" href={ entry.link } target="_blank">
				<p>{ entry.title }</p>
				{@render props.children?.()}
			</GlassButton>
			<span class="published">{ formatDate(entry.published )}</span>
			<p class="paragraph summary">{ entry.summary }</p>
		</article>
	</li>
{/each}
