// import SingleEvent from "../../components/SingleEvent";
import { getEvent } from "../../server/database";
import { useState } from "react";
import NavBar from '../../components/NavBar';
import React from "react";
import GetDirectionGreenBtn from '../../components/GetDirectionGreenBtn';
import TextBubble from '../../components/TextBubble';
import TopBanner from '../../components/TopBanner';
import UserOfPost from '../../components/UserOfPost';
import EventCategoryTag from "../../components/EventCategoryTag";
import styled from "styled-components";
import AddToCalander from "../../components/AddToCalander";
import ShareLink from "../../components/ShareLink";
import FavoriteBtn from "../../components/FavoriteBtn";

const EventImageBlock = styled.div`

position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 250px;

`

const EventImage = styled.img` 
    position: relative;
    width: 100%;
    height: 250px;
    object-fit: cover;
`

const FunctionsBox = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    background-color: RGBA(255, 255, 255, 0.9);
    width:40px ;
    height: 110px;
    position: absolute;
    right:3%;
    bottom: 10%;
    border-radius: 20px;
    padding: 8px;

`


const EventDescription = styled.div`
        margin: 30px;
`

const ExtraSpace = styled.div`
    height: 50px;
`


export default function Event({ event }) {

    const [navValue, setNavValue] = useState(1);
    const time = event.eventDate.seconds
    const date = new Date(time * 1000)
    const eventTime = date.toLocaleString().split(',')[1]
    const dateOfEvent = date.toLocaleString("default", { month: "long", day: "2-digit", year: "numeric" })
    const dateAndTime = dateOfEvent + "," + eventTime

    return (
        <div>
            <TopBanner text={event.eventName} back={true} />

            <EventImageBlock >
                <EventImage src={event.eventImage} alt={event.eventName} />
                <FunctionsBox>
                    <AddToCalander />
                    <ShareLink />
                    <FavoriteBtn />
                </FunctionsBox>
            </EventImageBlock>

            <TextBubble text={[event.eventLocation, event.eventContactPhone, dateAndTime]} icon={['location_on', 'call', 'access_time']} />

            <UserOfPost />

            <EventDescription>
                <b>About:</b>
                <p>{event.eventContent}</p>
            </EventDescription>

            <EventCategoryTag eventCategories={["Food", "Fundraiser"]} />

            <GetDirectionGreenBtn address={event.eventLocation} onMap={false} />

            <ExtraSpace></ExtraSpace>
            <NavBar value={navValue} onChange={(event, newValue) => {
                setNavValue(newValue);
            }} />
        </div >
    )
}

export async function getServerSideProps({ params }) {
    const req = await getEvent(params.id);
    const event = JSON.parse(JSON.stringify(req));
    return {
        props: { event },
    }
}

