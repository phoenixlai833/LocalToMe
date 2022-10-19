import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link'
import { getFoodBank } from '../../../server/database';
import TopBanner from '../../../components/TopBanner';
import Bubble from '../../../components/TextBubble';
import Image from 'next/image';
import { Icon } from '@mui/material';
import { FlexBox, Container, Wrapper, Colour } from '../../../styles/globals'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Filter from '../../../components/Filters';
import { useState } from 'react';
import CarouselCard from '../../../components/CarouselCard';
import News from '../../../components/News';
import NavBar from '../../../components/NavBar'
import FloatButton from '../../../components/FloatButton'
export default function FoodBank({ data }) {

    const [onActive, setActiveState] = useState(false);
    const [onExpand, setExpand] = useState(false);
    const [value, setValue] = useState(2);
    // boolean no shopping up yet oops
    const singleFBComponent = data.map((d) => {
        console.log(data);
        var test = [];
        var icons = []
        return (
            <>
                < TopBanner text={d.organization_name.stringValue} />
                <img src="http://placekitten.com/666/666" width="100%;" height="300px;"></img>

                <Bubble text={[d.location_address.stringValue, `${d.program_population_served.stringValue}`]} icon={["location_on", "people"]} />
                {/* {test.push(d.location_address.stringValue) && icons.push("location_on")} */}
                {d.program_population_served && test.push(d.program_population_served.stringValue) && icons.push("people")}
                {test && <Bubble text={test} icon={icons}></Bubble>}

                <Filter tag={"bank"} active={onActive} onPress={() => setActiveState(true)} />
                <Filter tag={"pantry"} active={onActive} onPress={() => setActiveState(true)} />
                <Filter tag={"fridge"} active={onActive} onPress={() => setActiveState(true)} />
                <Filter tag={"event"} active={onActive} onPress={() => setActiveState(true)} />
                <Filter tag={"open"} active={onActive} onPress={() => setActiveState(true)} />
                <Filter tag={"1km"} active={onActive} onPress={() => setActiveState(true)} />

                {d.description && (<div><h2>Info:</h2>
                    <p>{d.description.stringValue}</p></div>)}

                {/* {d.organization_name.stringValue && (<h2>Organization Name: {d.organization_name.stringValue}</h2>)}
                {d.program_population_served && (<h3>Population Served: {d.program_population_served.stringValue}</h3>)}
                {d.wheelchair_accessible && (<p>Wheelchair Acessible: {d.wheelchair_accessible.stringValue}</p>)}
                {d.signup_required && (<h3>Signup Required: {d.signup_required.stringValue}</h3>)}
                {d.requires_referral && (<p>requiresReferral: {d.requires_referral.stringValue}</p>)}
                {d.signup_email && (<p>signupEmail: {d.signup_email.stringValue}</p>)}
                {d.location_address && (<h3>locationAddress: {d.location_address.stringValue}</h3>)}
                {d.local_areas && (<p>localAreas: {d.local_areas.stringValue}</p>)}
                {d.delivery_available && (<p>deliveryAvailable: {d.delivery_available.stringValue}</p>)}
                {d.takeout_available && (<p>takeoutAvailable: {d.takeout_available.stringValue}</p>)}
                {d.hamper_cost && (<p>hamperCost: {d.hamper_cost.stringValue}</p>)}
                {d.provides_hampers && (<p>providesHampers: {d.provides_hampers.stringValue}</p>)}
                {d.provides_meals && (<p>providesMeals: {d.provides_meals.stringValue}</p>)}
                {d.description && (<><h3>Description:</h3><p>{d.description.stringValue}</p></>)}
                {d.last_updated_date && (<p>lastUpdatedDate: {d.last_updated_date.stringValue}</p>)} */}
            </>
        )
    })

    return (
        <div>
            <Head>
                <title>LocalToMe</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper direction="column">
                {singleFBComponent}
                <CarouselCard />
                <FloatButton />
                <News info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis fringilla in eget enim pretium egestas consequat. Euismod convallis consectetur lobortis tristique aliquet. Pulvinar a tristique a vitae ipsum lorem suscipit. Egestas quis ut egestas et morbi donec varius. Venenatis ornare ut nisl cras molestie."} onExpand={() => setExpand(true)} onClose={() => setExpand(false)} expanded={onExpand} />
                {/* <h1>{data.program_name}</h1>
                <h2>organizationName:{data.organizationName}</h2>
                <h3>populationServed:{data.populationServed}</h3>
                <p>wheelchairAcessible:{data.wheelchairAcessible}</p>
                <h3>signupRequired:{data.signupRequired}</h3>
                <p>requiresReferral:{data.requiresReferral}</p>
                <p>signupEmail:{data.signupEmail}</p>
                <h3>locationAddress:{data.locationAddress}</h3>
                <p>localAreas:{data.localAreas}</p>
                <p>deliveryAvailable:{data.deliveryAvailable}</p>
                <p>takeoutAvailable:{data.takeoutAvailable}</p>
                <p>hamperCost: {data.hamperCost}</p>
                <p>providesHampers:{data.providesHampers}</p>
                <p>providesMeals:{data.providesMeals}</p>
                <h3>Description:</h3>
                <p>{data.description}</p>
                <p>lastUpdatedDate:{data.lastUpdatedDate}</p> */}

                <NavBar value={value} onChange={(event, newValue) => {
                    setValue(newValue);
                }} />
            </Wrapper>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    // console.log(params.id)
    const req = await getFoodBank(params.id)
    // console.log(req)
    const oneFoodBankObj = JSON.parse(JSON.stringify(req));
    const data = [oneFoodBankObj._document.data.value.mapValue.fields]
    console.log(data)

    // set all foodbank data in firestore
    // const fbDataAPI = await fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=free-and-low-cost-food-programs&q=&rows=200&facet=program_name&facet=local_areas&facet=provides_meals&facet=provides_hampers&facet=takeout_available&facet=wheelchair_accessible&facet=signup_required&facet=requires_referral");
    // console.log(`this one: ${fbDataAPI}`);
    // const fbDataToJson = await fbDataAPI.json()
    // console.log(fbDataToJson.records);
    // let formattedFbData = fbDataToJson.records.map((fb) => fb.fields)
    // formattedFbData.map(async (fb) => {
    //     await addFoodBank(fb)
    // })

    return {
        props: { data },
    }
}

// export async function getServerSideProps(context) {
//     const data = await fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=free-and-low-cost-food-programs&q=&rows=200&facet=program_name&facet=local_areas&facet=provides_meals&facet=provides_hampers&facet=takeout_available&facet=wheelchair_accessible&facet=signup_required&facet=requires_referral");
//     console.log(data);
//     // const runAddFoodBanks = await addFoodBank(foodBanks);

// }