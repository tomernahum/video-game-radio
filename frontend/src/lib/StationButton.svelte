

<script lang="ts">
	import type { StationData } from "./stationsData.js";
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();


    export let selected = false;


    export let posX = 0;
    export let posY = 0;
    export let size = 15;
    
    export let stationData:StationData;


    function onClick(){
        // alert("Selected " + stationData.name)
        dispatch('selected', {
			name: stationData.name
		});
    }

</script>


<div 
    style="left: {posX}%; top: {posY}%; width: {size}%; height: {size}%;"
>
    <input type="image" src="{stationData.logo}" alt="{stationData.name}" on:click={onClick}
        style="{selected ? "" : "opacity:0.5"}"
    />
</div>

<style>
    img, input {
        width:100%;
        height: 100%;
        border-radius: 50%;


        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    div {
        position: absolute;

    }
</style>
