

import nonStopPopLogo from "$lib/assets/non-stop-pop-logo.png";
import none from "$lib/assets/none.png";


export type StationData = {
    name: string, //name acts as ID
    logo: string
}

function getTestStationsData(): StationData[] {
    const out = [
        {
            name: "None",
            logo: none,
        },
        {
            name: "Non-Stop-Pop FM",
            logo: nonStopPopLogo
        },
    ]

    //filler for testing
    for (let i = 0; i < 20; i++) {
        out.push({
            name: `Non-Stop-Pop FM ${i+2}`,
            logo: nonStopPopLogo
        },)
    }

    return out
}

export function getStationsData(region="test"): StationData[] {
    switch (region) {
        case "test":
            return getTestStationsData()
        case "etc":
            return []
    }

    return getTestStationsData()
}