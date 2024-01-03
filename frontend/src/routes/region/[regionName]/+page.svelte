<script>
	import Page from "$lib/Page.svelte"

    import { page } from '$app/stores';

    export let data;

    // $: selectedRegion = data.regionName
    
    
    //todo add background

</script>

<Page selectedRegion={data.regionName}/>



