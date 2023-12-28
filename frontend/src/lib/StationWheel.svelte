
<script lang="ts">

    import StationIcon from "./StationIcon.svelte";
import { stationsData } from "./stationsData.js";

    let selectedStation = "None";

    


</script>


<div class="test">
    <div class="test2">
        <StationIcon 
            stationData={stationsData.NonStopPop} selected={selectedStation === "NonStopPop"} 
            posX={0} posY={0}
        />
        <StationIcon 
            stationData={stationsData.NonStopPop} selected={selectedStation === "NonStopPop"} 
            posX={20} posY={20}
        />

        <StationIcon 
            stationData={stationsData.NonStopPop} selected={selectedStation === "NonStopPop"} 
            posX={85} posY={85}
        />
    </div>
</div>


<style>
    .test {
        height: 0;
        /* padding-bottom: 56.25%; 16:9 */
        padding-bottom: 100%;
        position: relative;
    }
    .test2 {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
</style>