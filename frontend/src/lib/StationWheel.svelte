
<script lang="ts">

    import StationButton from "./StationButton.svelte";
	import { getPositionsAndSizeForRadioCircleWithTouchingIcons } from "./circles.js";
	import type { StationData } from "./stationsData.js";
    import RegionSelector from "./RegionSelector.svelte";
    
    
    export let stationsData:StationData[];

    
    let numStations = stationsData.length;
    
    let [pos, size] = getPositionsAndSizeForRadioCircleWithTouchingIcons(numStations)
    
    let selectedStation = "None";   

</script>


<div class="outer">
    <div class="inner">
        <!-- <RegionSelector /> -->
        
        <!-- Elements inside here should be positioned absolutely with values as percents -->
        {#each stationsData as station, i}
            <!-- <p>PosX: {pos[i][0]} PosY: {pos[i][1]}</p> -->
            <StationButton 
                stationData={station} selected={selectedStation === station.name}
                posX={pos[i][0]} posY={pos[i][1]} size={size}
                on:selected={() => selectedStation = station.name}
            />
        {/each}

        <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -65%); width: 40%;  background:red; font-size: min(3dvw, 3dvh, 20px); text-align: center;">
            {#if selectedStation === "None"}
                Radio Off
            {:else}
                {selectedStation}
                <br>
                Current Track.... 
            {/if}
        </p>
    </div>
</div>


<style>
    .outer {
        height: 0;
        /* padding-bottom: 56.25%; 16:9 */
        padding-bottom: 100%; /* 1:1 */
        position: relative;

        background: rgb(73, 118, 255);
    }
    .inner {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
</style>