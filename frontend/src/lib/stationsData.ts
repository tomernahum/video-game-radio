

import nonStopPopLogo from "$lib/assets/non-stop-pop-logo.png";
import nonStopPop2 from "$lib/assets/nonstoppop.jpg";
import none from "$lib/assets/none.png";
import none2 from "$lib/assets/none.jpg";
import background1 from "$lib/assets/background1.webp"


export const validRegionNames = ["Test1", "Test2"] as const
export type RegionName =  typeof validRegionNames[number]

export type StationData = {
    name: string, //name acts as ID
    logo: string
}

export function getBackground(regionName:RegionName) {
    return background1;
}




function getTestStationsData(numStations:number): StationData[] {
    const out = [
        {
            name: "None",
            logo: none2,
        },
        {
            name: "Non-Stop-Pop FM",
            logo: nonStopPopLogo
        },
    ]

    //filler for testing
    for (let i = 0; i < numStations-1; i++) {
        out.push({
            name: `Non-Stop-Pop FM ${i+2}`,
            logo: nonStopPop2
        },)
    }

    return out
}

export function getStationsData(region: RegionName="Test1"): StationData[] {
    switch (region) {
        case "Test1":
            return getTestStationsData(21)
        case "Test2":
            return getTestStationsData(15)
    }
    return getTestStationsData(5)
}