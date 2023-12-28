

import nonStopPopLogo from "$lib/assets/non-stop-pop-logo.png";


export type StationData = {
    name: string,
    logo: string
}


export const stationsData: Record<string, StationData> = {
    "None": {
        name: "None",
        logo: nonStopPopLogo
    },
    "NonStopPop": {
        name: "Non-Stop-Pop FM",
        logo: nonStopPopLogo
    }
}