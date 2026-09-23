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
	const imagePath = '/images/bg/';
	const getImagePc = (month?: Months) => month ? `${imagePath}${ month }.webp` : '';
	const getImageSp = (month?: Months) => month ? `${imagePath}${ month }_sp.webp` : '';
	const getSrcset = (month?: Months) => {
		if (import.meta.env.SSR || !month) return '';

		return window.innerWidth <= 750 ? getImageSp(month) : getImagePc(month);
	};

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
		<picture>
			<source media="(max-width: 750px)" :srcset="getImageSp(currentMonth)" />
			<img ref="elBg" :src="getImagePc(currentMonth)" alt="" data-testid="bg" />
		</picture>
		<img v-if="selectedMonth()" id="selected_bg" :src="getSrcset(selectedMonth())" alt="" />
	</div>
</template>
