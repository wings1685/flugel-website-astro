<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import { fetchEntries } from "@/components/routes/_models/usePage";
	import { GlassButton } from "@/components/integrations";
	import type { BlogEntries, BlogEntry } from "@/components/routes/_models/schema";
	import "@/components/shared/Typography/Paragraph.sass";

	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	const entries = ref<BlogEntry[]>([...Array(5)].map((_, i) => ({
		title: '**********',
		link: '',
		published: '2026-01-01 00:00:00',
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	})));

	onMounted(async () => {
		entries.value = await fetchEntries();
	});
</script>
<template>
	<li v-for="entry of entries" :key="entry.title">
		<article>
			<GlassButton :as="'a'" :href="entry.link" target="_blank">
				<p>{{ entry.title }}</p>
				<slot />
			</GlassButton>
			<span class="published">{{ formatDate(entry.published) }}</span>
			<p class="paragraph summary">{{ entry.summary }}</p>
		</article>
	</li>
</template>
