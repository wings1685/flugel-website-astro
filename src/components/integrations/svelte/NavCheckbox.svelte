<script lang="ts">
	import { useStore } from "@/_global/piquo";

	const { navOpened } = useStore('navOpened');
</script>
<input type="checkbox" checked={ navOpened() } />
