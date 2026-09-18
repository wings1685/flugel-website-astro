<script setup lang="ts">
	import { useStore } from "@/_global/piquo";
	import type { Months } from "@/_global/lib/shared";
	import type { JSX } from "vue/jsx-runtime";
	import "@/components/shared/Sections/Glass.sass";

	type Props = /* @vue-ignore */ JSX.IntrinsicElements['button'] & {
		month: Months;
		name: string;
	};

	const props = defineProps<Props>();

	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	const handleClick = (e: Event, key: Months) => {
		e.preventDefault();

		if (selectedMonth()) return;

		setSelectedMonth(key);
	};
</script>
<template>
	<button @click="(e: Event) => handleClick(e, props.month)" :class="[ 'glass mini is_dark btn_nav', props.class ]">{{ props.name }}</button>
</template>
