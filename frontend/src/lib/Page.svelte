
<script lang="ts">
	import RegionSelector from "./RegionSelector.svelte";
	import StationWheel from "./StationWheel.svelte";

    import { getStationsData } from "./stationsData.js";

    getStationsData();
    let stationsData = getStationsData();

</script>



<!-- Todo maybe: make page zooming in browser actually do something -->

<div style="position: absolute; z-index: 100">

    <RegionSelector />
</div>
<main>
    <StationWheel  {stationsData}/>
</main>

<br style="margin-top:100vh">


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
</style>