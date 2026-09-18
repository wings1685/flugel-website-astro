<script lang="ts">
	import { onMount } from "svelte";
	import { flugel } from "@/_global/lib/shared";

	let year = $state<number>(2026);

	onMount(() => {
		year = (new Date()).getFullYear()
	});
</script>
<p class="copyright">{ flugel } &copy; { year }</p>
