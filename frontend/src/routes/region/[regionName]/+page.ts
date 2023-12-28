import { validRegionNames, type RegionName } from '$lib/stationsData.js';
import { error } from '@sveltejs/kit';



export function load({ params }) {
	// const post = posts.find((post) => post.slug === params.slug);

    // const 
    const regionName = params.regionName as RegionName;
    if (!validRegionNames.includes(regionName)) {
        throw error(404)
    }

	return {
		regionName: regionName,
	};
}