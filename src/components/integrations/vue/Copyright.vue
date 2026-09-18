<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import { flugel } from "@/_global/lib/shared";

	const year = ref<number>(2026);

	onMounted(() => {
		year.value = (new Date()).getFullYear();
	});
</script>
<template>
	<p class="copyright">{{ flugel }} &copy; {{ year }}</p>
</template>
