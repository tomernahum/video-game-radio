<script>
	import Page from "$lib/Page.svelte"

    import { page } from '$app/stores';

    export let data;

    // $: selectedRegion = data.regionName
    
</script>

<Page selectedRegion={data.regionName}/>

