import MapSlideUp from "./index";

export default {
    title: "MapSlideUp",
    component: MapSlideUp,
}

const foodBanksList = [
    {
        id: 'test1',
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
    },
    {
        id: 'test2',
        provides_hampers: 'True',
        organization_name: 'Vancouver Farmers Markets',
        hamper_cost: 'Free',
        requires_referral: 'Unknown',
        latitude: 49.263996,
        location_address: '2390 Brunswick St, Vancouver, BC',
        signup_required: 'Yes',
        program_name: 'Mount Pleasant Farmers Market - Nutrition Coupons',
        program_status: 'Open',
        last_update_date: '2022-08-10T15:58:02+00:00',
        delivery_available: 'Unknown',
        local_areas: 'Mount Pleasant',
        foodBank_Image: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0',
        longitude: -123.09594,
        geom: [49.263996, -123.09594],
        wheelchair_accessible: 'Unknown',
        takeout_available: 'Unknown',
        description: 'Vancouver Farmers Market location accepting Nutrition Coupons. Enrolled households receive minimum of $21/week in vouchers. Market is open May – October, Sundays 10am-2pm.',
        provides_meals: 'False',
        program_population_served: 'eligible families enrolled through Vancouver Farmers Market Society',
        signup_email: 'https://bcfarmersmarket.org/coupon-program/get-involved/individuals/'
    },
    {
        id: 'test3',
        foodBank_Image: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0',
        delivery_available: 'Yes',
        wheelchair_accessible: 'Unknown',
        takeout_available: 'Yes',
        signup_email: 'directions@fsgv.ca',
        latitude: 49.279589,
        location_address: '1138 Burrard St, Vancouver, BC',
        signup_phone_number: '(604) 633-1472',
        meal_cost: 'Free',
        requires_referral: 'No',
        organization_name: 'Family Services of Greater Vancouver',
        program_name: 'Directions Youth Services - Meal and Snacks',
        program_population_served: 'Youth under 25 experiencing homelessness or precariously housed',
        description: 'Open for snacks 24/7; Meal daily from 8-9 pm. Intake process to become a client.',
        provides_hampers: 'False',
        provides_meals: 'True',
        program_status: 'Open',
        longitude: -123.12829,
        signup_required: 'Yes',
        last_update_date: '2022-08-22T11:43:21+00:00',
        geom: [49.279589, -123.12829],
        local_areas: 'Downtown'
    }
]


export const Default = () => <MapSlideUp foodBanks={foodBanksList} />
export const Error = () => <MapSlideUp foodBanks={foodBanksList} />