
import React from "react";
import styles from './SingleEvent.module.css';
import GetDirectionGreenBtn from '../GetDirectionGreenBtn';
import TextBubble from '../TextBubble';
import TopBanner from '../TopBanner';
import UserOfPost from '../UserOfPost';
import EventCategoryTag from "../EventCategoryTag";
import styled from "styled-components";

const EventImage = styled.img` 
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const EventImageBlock = styled.div`
    width: 100%;
    height: 200px;
`
const EventDescription = styled.div`
        margin: 30px;
`

const ExtraSpace = styled.div`
    height: 50px;
`

export default function SingleEvent({ event }) {

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
        </div>



    )



}