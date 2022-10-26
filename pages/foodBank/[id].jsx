import Head from 'next/head';
import Link from 'next/link'
import { useState } from "react";
import { getFoodBank, addFoodBank } from '../../server/database';
import NavBar from '../../components/NavBar';
import TopBanner from '../../components/TopBanner';
import TextBubble from '../../components/TextBubble';
import { Wrapper, Container, FlexBox } from '../../styles/globals';
import { Filter, EventFilter } from '../../components/Filters';
import GetDirectionGreenBtn from '../../components/GetDirectionGreenBtn';
import AddToCalander from "../../components/AddToCalander";
import ShareLink from "../../components/ShareLink";
import FavoriteBtn from "../../components/FavoriteBtn";
import styled from 'styled-components';
import { FunctionsBox } from '../events/[id]';

const EventImageBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 250px;
    margin-top:-15px;
`

const EventImage = styled.img` 
    position: relative;
    width: 100%;
    height: 250px;
    object-fit: cover;
`

const EventDescription = styled.div`
    margin: 30px;
`

const FilterDiv = styled.div`
    display:grid;
    grid-auto-flow: column dense;
    gap:5px;
    margin:0 5%;
    @media (max-width: 767px) {
        grid-template-rows:1fr 1fr 1fr;
    }
`

export default function FoodBank({ d }) {

    const [navValue, setNavValue] = useState(2);
    var locationInfo = [];
    var locationIcons = [];
    var signUp = [];
    var signUpIcons = [];
    if (d.location_address) { locationInfo.push(d.location_address); locationIcons.push("location_on") }
    if (d.local_areas) { locationInfo.push(d.local_areas); locationIcons.push("map") }
    if (d.program_population_served) { locationInfo.push(d.program_population_served); locationIcons.push("people") }
    // if(d.wheelchair_accessible) {locationInfo.push("Wheelchair Accessible: " + d.wheelchair_accessible); locationIcons.push("accessible")}

    if (d.signup_required) {
        signUp.push("Signup Required: " + d.signup_required); signUpIcons.push('person_add')
        if (d.requires_referral) { signUp.push("Requires Referral: " + d.requires_referral); signUpIcons.push("diversity_1") };
        if (d.signup_email) { signUp.push(d.signup_email); signUpIcons.push("email") };
        if (d.signup_phone_number) { signUp.push(d.signup_phone_number); signUpIcons.push("call") };
    };


    return (
        <Wrapper direction="column" gap="10px" sx={{ alignItems: "normal" }}>
            {/* can place d.program_name with d.organization_name */}
            {d.program_name && <TopBanner text={d.program_name}></TopBanner>}
            <EventImageBlock >
                <EventImage src={d.foodBank_Image} alt={d.program_name} />
                <FunctionsBox>
                    <AddToCalander />
                    <ShareLink />
                    <FavoriteBtn />
                </FunctionsBox>
            </EventImageBlock>

            <TextBubble text={locationInfo} icon={locationIcons}></TextBubble>
            {d.description && (<FlexBox pd="0px" direction="column" width="85vw"><EventDescription><h3>Description:</h3><p>{d.description}</p></EventDescription></FlexBox>)}
            <TextBubble text={signUp} icon={signUpIcons} />

            <FilterDiv direction="column" gap="5px">
                {d.wheelchair_accessible === "Yes" ? <EventFilter tag={"Wheelchair Accessible"} /> : <EventFilter tag={"Wheelchair Accessible"} active={true} />}
                {d.delivery_available === "Yes" ? <EventFilter tag={"Delivery Available"} /> : <EventFilter tag={"Delivery Available"} active={true} />}
                {d.takeout_available === "Yes" ? <EventFilter tag={"Takeout Available"} /> : <EventFilter tag={"Takeout Available"} active={true} />}
                {d.provides_hampers === "True" ? <EventFilter tag={"Provides Hampers"} /> : <EventFilter tag={"Provides Hampers"} active={true} />}
                {d.provides_meals === "True" ? <EventFilter tag={"Provides Meals"} /> : <EventFilter tag={"Provides Meals"} active={true} />}
            </FilterDiv>

            <GetDirectionGreenBtn address={d.location_address} onMap={false} />
            
            <FlexBox pd="50px" />
            {/* {d.organization_name && (<h2>Organization Name: {d.organization_name}</h2>)}
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
        {d.last_updated_date && (<p>lastUpdatedDate: {d.last_updated_date}</p>)} */}

            <NavBar value={2} />
        </Wrapper>
    )
    // })
}

export async function getServerSideProps({ params }) {

    const req = await getFoodBank(params.id)

    const d = JSON.parse(JSON.stringify(req));
    // const data = [oneFoodBankObj._document.data.value.mapValue.fields]

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
