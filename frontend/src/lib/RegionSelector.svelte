
<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import type { RegionName } from "./stationsData.js";
	import { page } from "$app/stores";

    // We will have regions from gta V and gta V online here based on radio scenarios (+ all gta V if necessary)
    // Can also support other games, might do it through this dropdown or seperate nav elements
    // All subject to change of mind obviously

    

    export let selected:RegionName;

    $: {
        selected;
        onChange();
    }

    function onChange(){
        if (browser) {
            goto(`/region/${selected}`);
        }
    }

    //TODO displays wrong page at first for some reason
    
</script>


<p style="margin: 5px; color:white;">
    Region: 
    <select bind:value={selected} id="region" name="region" autocomplete="off">
        <option value="Test1"> Test 1</option>
        <option value="Test2"> Test 2</option>
        $
    </select> 
    <!-- {selected} -->
</p>