import Head from 'next/head';
import Link from 'next/link'
import { useState } from "react";
import { getFoodBank, addFoodBank } from '../../server/database';
import NavBar from '../../components/NavBar';

export default function FoodBank({ d }) {

    const [navValue, setNavValue] = useState(2);

    return (
        <>
            <img width="100" height="100" src={d.foodBank_Image} alt={d.program_name} />

            < h1 > {d.program_name}</ h1 >
            {d.organization_name && (<h2>Organization Name: {d.organization_name}</h2>)}
            {d.program_population_served && (<h3>Population Served: {d.program_population_served}</h3>)}
            {d.wheelchair_accessible && (<p>Wheelchair Acessible: {d.wheelchair_accessible}</p>)}
            {d.signup_required && (<h3>Signup Required: {d.signup_required}</h3>)}
            {d.requires_referral && (<p>requiresReferral: {d.requires_referral}</p>)}
            {d.signup_email && (<p>signupEmail: {d.signup_email}</p>)}
            {d.location_address && (<h3>locationAddress: {d.location_address}</h3>)}
            {d.local_areas && (<p>localAreas: {d.local_areas}</p>)}
            {d.delivery_available && (<p>deliveryAvailable: {d.delivery_available}</p>)}
            {d.takeout_available && (<p>takeoutAvailable: {d.takeout_available}</p>)}
            {d.hamper_cost && (<p>hamperCost: {d.hamper_cost}</p>)}
            {d.provides_hampers && (<p>providesHampers: {d.provides_hampers}</p>)}
            {d.provides_meals && (<p>providesMeals: {d.provides_meals}</p>)}
            {d.description && (<><h3>Description:</h3><p>{d.description}</p></>)}
            {d.last_updated_date && (<p>lastUpdatedDate: {d.last_updated_date}</p>)}
            <NavBar value={navValue} onChange={(event, newValue) => {
                setNavValue(newValue);
            }} />
        </>
    )
    // })
}

export async function getServerSideProps({ params }) {
    // console.log(params.id)
    const req = await getFoodBank(params.id)
    // console.log(req)
    const d = JSON.parse(JSON.stringify(req));
    // const data = [oneFoodBankObj._document.data.value.mapValue.fields]
    // console.log(d)

    // // set all foodbank data in firestore
    // const fbDataAPI = await fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=free-and-low-cost-food-programs&q=&rows=200&facet=program_name&facet=local_areas&facet=provides_meals&facet=provides_hampers&facet=takeout_available&facet=wheelchair_accessible&facet=signup_required&facet=requires_referral");
    // // console.log(`this one: ${fbDataAPI}`);
    // const fbDataToJson = await fbDataAPI.json()
    // // console.log(fbDataToJson.records);
    // let formattedFbData = fbDataToJson.records.map((fb) => fb.fields)
    // formattedFbData.map(async (fb) => {
    //     const fbWImage = { foodBank_Image: "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0", ...fb }
    //     await addFoodBank(fbWImage);
    // })

    return {
        props: { d },
    }
}
