import MapSlideItem from "./index";

export default {
    title: "MapSlideItem",
    component: MapSlideItem,
}

const foodBank = {
    objectID: 'test1',
    wheelchair_accessible: 'Yes',
    organization_name: "DTES Women's Centre",
    program_name: "DTES Women's Centre - Drop In - Takeout Meals",
    last_update_date: '2022-08-22T11:44:15+00:00',
    local_areas: 'Downtown',
    signup_required: 'Unknown',
    provides_hampers: 'False',
    delivery_available: 'No',
    latitude: 49.281867,
    location_address: '302 Columbia St, Vancouver, BC',
    geom: [49.281867, -123.102196],
    foodBank_Image: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0',
    takeout_available: 'Yes',
    longitude: -123.102196,
    requires_referral: 'No',
    program_population_served: 'women',
    meal_cost: 'Free',
    description: 'Daily (except Wed) 10-11am, 12-2pm. Coffee and snacks until 4pm.',
    provides_meals: 'True',
    program_status: 'Open'
}



export const Default = () => <MapSlideItem fb={foodBank} />
export const Error = () => <MapSlideItem fb={foodBank} />