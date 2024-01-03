
<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import RegionSelector from "./RegionSelector.svelte";
	import StationWheel from "./StationWheel.svelte";

    import { getBackground, getStationsData, type RegionName } from "./stationsData.js";
	import { browser } from "$app/environment";

    export let selectedRegion:RegionName;

    let stationsData = getStationsData(selectedRegion);

    

    
</script>



<!-- Todo maybe: make page zooming in browser actually do something -->

<div style="position: absolute; z-index: 100">
    <RegionSelector selected={selectedRegion}/>
</div>
<main>
    {#if selectedRegion === "Test1"}
        <div class="outer" style="background: #4976ff;">
            <StationWheel  stationsData={stationsData}/>
        </div>
    {:else if selectedRegion === "Test2"}
        <div class="outer" style="background: hsl(0, 27%, 49%);">
            <StationWheel  stationsData={stationsData}/>
        </div>
    {:else}
        <p></p>
    {/if}
</main>

<br style="margin-top:100vh">

<!-- TODO add background image to whole page -->
<style>
    main {
        /* max-width: 800px; */
        max-width: 95svh;
        /* width:800px; */
        margin: 0 auto;
        /* background-color: blue; */

        min-height: 100px;

        /* margin: 10px; */
        padding:10px;
    }

    
    .outer {
        /* background: hsl(165, 44%, 59%); */
        /* background-image: none; */ 

        padding: 7px;
        
    }
</style>