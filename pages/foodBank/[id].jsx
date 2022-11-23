import Head from 'next/head';
import Link from 'next/link'
import { useState } from "react";
import { getFoodBank, addFoodBank } from '../../server/database';
import NavBar from '../../components/Organisms/NavBar';
import TopBanner from '../../components/Molecules/TopBanner';
import TextBubble from '../../components/Molecules/TextBubble';
import { Wrapper, Container, FlexBox } from '../../styles/globals';
import { Filter, EventFilter } from '../../components/Atoms/Filters';
import GetDirectionGreenBtn from '../../components/Atoms/GetDirectionGreenBtn';
import styled from 'styled-components';
import { FunctionsBox } from '../events/[id]';
import SharePost from "../../components/Molecules/SharePost";
import FavoriteBtn from "../../components/Atoms/FavoriteBtn";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import { getUsers, getUser } from "../../server/database";
import { useRouter } from 'next/router';
import TopNavigation from '../../components/Organisms/NavBarTop';



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
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    margin:0 7.5%;
    width: 85%;
    @media (max-width: 768px) {
        display:grid;
        grid-auto-flow: column dense;
        grid-template-rows:1fr 1fr 1fr;
    }
`
const Sharebox = styled.div`
position: fixed;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
`

const TopBar = styled.div`
  @media (max-width: 767px) {
    display:none;
}
`

export const DesktopBox = styled.div`
@media (min-width: 768px) {
margin-top:8vh;
margin-left: 18vw;
margin-right: 18vw;
// min-height: 92vh;
box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
}
`

export default function FoodBank({ d, user }) {
    const { data: session } = useSession()
    const [shareUrl, setShareUrl] = useState('');
    const [share, setShare] = useState(false);
    const [navValue, setNavValue] = useState(2);
    const router = useRouter()

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

    function onShare() {
        setShareUrl(window.location);
        setShare(true);
    }

    const handleOnCopy = () => {
        setCopied(true);
    };

    const handleCloseShare = () => {
        setShare(false);
        setCopied(false);
    }

    const ifFavorite = user?.favorite?.location.filter((singleLocation) => singleLocation.id === d.id).length > 0 ? true : false;
    const [favorite, setFavorite] = useState(ifFavorite);


    function handleOnClick() {
        if (!session) {
            router.push('/auth/signin');
        } else {
            axios.put('/api/favorite', {
                favorite: favorite,
                type: "location",
                userId: user.id,
                itemId: d.id
            }).then((res) => {
                console.log("addFav?", res)
                setFavorite(!favorite)

            })
        }

    }


    return (
        <Wrapper direction="column" gap="10px" sx={{ alignItems: "normal" }}>
            <TopBar>
                <TopNavigation />
            </TopBar>
            <DesktopBox>
                {/* can place d.program_name with d.organization_name */}
                {d.program_name && <TopBanner text={d.program_name} ></TopBanner>}
                <EventImageBlock >
                    <EventImage src={d.foodBank_Image} alt={d.program_name} />
                    <FunctionsBox>
                        <img src="../calenderIcon.png" alt="calendar icon" />
                        <img src="../shareLinkIcons.png" alt="calendar icon" onClick={onShare} />
                        <FavoriteBtn favorite={favorite} onClick={handleOnClick} />
                    </FunctionsBox>
                </EventImageBlock>

                <TextBubble text={locationInfo} icon={locationIcons}></TextBubble>
                {d.description && (<FlexBox pd="0px" direction="column" ><EventDescription style={{ width: "85%" }}><h3>Description:</h3><p>{d.description}</p></EventDescription></FlexBox>)}
                <TextBubble text={signUp} icon={signUpIcons} />
                <br />
                <FilterDiv direction="column" gap="5px">
                    {d.wheelchair_accessible === "Yes" ? <EventFilter tag={"Wheelchair Accessible"} /> : <EventFilter tag={"Wheelchair Accessible"} active={true} />}
                    {d.delivery_available === "Yes" ? <EventFilter tag={"Delivery Available"} /> : <EventFilter tag={"Delivery Available"} active={true} />}
                    {d.takeout_available === "Yes" ? <EventFilter tag={"Takeout Available"} /> : <EventFilter tag={"Takeout Available"} active={true} />}
                    {d.provides_hampers === "True" ? <EventFilter tag={"Provides Hampers"} /> : <EventFilter tag={"Provides Hampers"} active={true} />}
                    {d.provides_meals === "True" ? <EventFilter tag={"Provides Meals"} /> : <EventFilter tag={"Provides Meals"} active={true} />}
                </FilterDiv>

                <GetDirectionGreenBtn address={d.location_address} onMap={false} />

                <FlexBox pd="50px" />
            </DesktopBox>
            <Sharebox>
                {/* <SharePost shareUrl={shareUrl} share={share} closeShare={() => { setShare(false) }} /> */}
                <SharePost shareUrl={shareUrl} share={share} closeShare={handleCloseShare} copied={copied} changeOnCopy={handleOnCopy} />
            </Sharebox>
            <div className="TEMPMEDIA">
                <NavBar value={2} />
            </div>
        </Wrapper >
    )
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    const req = await getFoodBank(context.params.id)
    const d = JSON.parse(JSON.stringify(req));

    if (session) {
        const users = await getUsers();
        const userId = users.filter((user) => user.email === session.user.email)[0].id;
        const userData = await getUser(userId);
        const user = JSON.parse(JSON.stringify(userData));


        return {
            props: { d, session, user },
        }
    } else {
        return {
            props: { d },
        };
    }
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


}
