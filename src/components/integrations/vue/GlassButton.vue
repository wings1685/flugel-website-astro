<script setup lang="ts">
	import { useStore } from "@/_global/piquo";
	import type { JSX } from "vue/jsx-runtime";
	import "@/components/shared/Sections/Glass.sass";

	type Props = ( | (/* @vue-ignore */ JSX.IntrinsicElements['a'] & {
		as: 'a';
		href: string;
		target?: '_blank';
	}) | (/* @vue-ignore */ JSX.IntrinsicElements['div'] & {
		as: 'div';
		href?: never;
	}));

	const props = defineProps<Props>();

	const { navOpened, setNavOpened } = useStore('navOpened');

	const handleClick = (e?: Event) => {
		if (e) {
			e.preventDefault();
			setNavOpened(!navOpened());
		} else {
			setNavOpened(false);
		}
	};
</script>
<template>
	<a v-if="props.as === 'a'" v-bind="props" @click="() => handleClick()" :class="[ 'glass mini is_dark', props.class ]">
		<slot />
	</a>
	<div v-else v-bind="props" @click="handleClick" :class="[ 'glass mini is_dark', props.class ]">
		<slot />
	</div>
</template>
