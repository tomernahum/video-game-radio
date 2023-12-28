

<script lang="ts">
	import type { StationData } from "./stationsData.js";


    export let selected = false;


    export let posX = 0;
    export let posY = 0;
    export let size = 15;
    
    export let stationData:StationData;


</script>


<div 
    style="left: {posX}%; top: {posY}%; width: {size}%; height: {size}%;"
>
    <img src="{stationData.logo}" alt="{stationData.name}">
</div>

<style>
    img {
        width:100%;
        height: 100%;
    }
    div {
        position: absolute;
    }
</style>
