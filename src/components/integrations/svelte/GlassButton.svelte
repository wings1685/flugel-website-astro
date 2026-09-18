<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import "@/components/shared/Sections/Glass.sass";

	type Props = {
		children: Snippet;
	} & ( | (HTMLAttributes<HTMLAnchorElement> & {
		as: 'a';
		href: string;
		target?: '_blank';
	}) | (HTMLAttributes<HTMLDivElement> & {
		as: 'div';
		href?: never;
		target?: never;
	}));

	const props: Props = $props();

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
{#if props.as === 'a'}
	<a { ...props } onclick={ () => handleClick() } class={[ 'glass mini is_dark', props.class ]}>
		{@render props.children?.()}
	</a>
{:else}
	<div { ...props } onclick={ (e: Event) => handleClick(e) } class={[ 'glass mini is_dark', props.class ]}>
		{@render props.children?.()}
	</div>
{/if}
