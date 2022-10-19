import MapSlideUp from "./index";

export default {
    title: "MapSlideUp",
    component: MapSlideUp,
}

const foodBanksList = [
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" },
    { id: "04UP2U0IpksheWVcsYUN", program_name: "Gospel Mission Society - Food Program", location_address: "255 Dunlevy Ave, Vancouver, BC" }
]


export const Default = () => <MapSlideUp foodBanks={foodBanksList} />
export const Error = () => <MapSlideUp foodBanks={foodBanksList} />