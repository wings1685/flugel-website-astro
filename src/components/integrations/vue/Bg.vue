<script setup lang="ts">
	import { onMounted, ref, useTemplateRef, watch } from "vue";
	import { months } from "@/_global/lib/shared";
	import { sleep } from "@/_global/lib/utils";
	import { useStore } from "@/_global/piquo";
	import type { Months } from "@/_global/lib/shared";
	import "../Bg.sass";

	const currentMonth = ref<Months>();
	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	const elBg = useTemplateRef('elBg');
	const getSrcset = (month?: Months) => month ? `/images/bg/${ month }.webp 1920w, /images/bg/${ month }_sp.webp 768w` : '';

	onMounted(() => {
		const month = months[(new Date()).getMonth()];
		currentMonth.value = month;
	});

	watch(
		() => selectedMonth(),
		() => {
			const next = selectedMonth();

			if (!elBg.value || !next) return;

			if (!('computedStyleMap' in elBg.value)) {
				currentMonth.value = next;
				return;
			}

			const style = elBg.value.computedStyleMap();
			const duration = style.get('animation-duration') as CSSUnitValue;
			const delay = duration.value * 1000;
			const animated = async () => {
				await sleep(delay);

				currentMonth.value = next;
				setSelectedMonth();
			};
			animated();
		}
	);
</script>
<template>
	<div id="bg">
		<img ref="elBg" alt="" :srcset="getSrcset(currentMonth)" data-testid="bg" />
		<img v-if="selectedMonth()" id="selected_bg" :srcset="getSrcset(selectedMonth())" alt="" />
	</div>
</template>
