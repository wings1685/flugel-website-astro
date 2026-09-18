<script setup lang="ts">
	import { useStore } from "@/_global/piquo";

	const { navOpened } = useStore('navOpened');
</script>
<template>
	<input type="checkbox" :checked="navOpened()" />
</template>
