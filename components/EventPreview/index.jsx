// import { getEvent, deleteEvent } from "../../server/database";
// import { useState } from "react";
// import { useRouter } from 'next/router';
// import NavBar from '../../components/NavBar';
// import React from "react";
// import GetDirectionGreenBtn from '../../components/GetDirectionGreenBtn';
import TextBubble from '/components/TextBubble';
// import TopBanner from '../../components/TopBanner';
import UserOfPost from '/components/UserOfPost';
import EventCategoryTag from "/components/EventCategoryTag";
// import AddToCalander from "../../components/AddToCalander";
// import ShareLink from "../../components/ShareLink";
// import FavoriteBtn from "../../components/FavoriteBtn";
// import Link from "next/link";
import styled from "styled-components";

const event = {
    eventName: "Some Text",
    eventImage:
        "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0",
    eventContent: "Some Text",
    eventCreatorId: 1,
    start: "Nov 12, 2022, 12:00 PM - 3:00 PM",
    end: new Date(),
    eventLocation: "2909 Grandview Hwy, Vancouver, BC V5M 2E4",
    latitude: 49.25,
    longitude: -123,
    eventTags: [],
    eventContactPhone: "778-998-3422",
}

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

const EventDescription = styled.div`
    margin: 30px;
`

const ConfirmBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #108928;
border-radius: 10px;
color: white;
background-color: #108928;
font-size: 16px;
margin: 10px auto;
width: 70%;
height: 40px;
`

const EditBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #108928;
border-radius: 10px;
color: #108928;
background-color: white;
margin: 5px auto;
width: 70%;
height: 40px;
font-size: 16px;
`

export default function EventPreview({ event }) {


    return (
        <div>

            <EventImageBlock >
                <EventImage src={event.eventImage} alt={event.eventName} />
            </EventImageBlock>
            <TextBubble text={[event.eventLocation, event.eventContactPhone, event.start]} icon={['location_on', 'call', 'access_time']} />
            <UserOfPost />
            <EventDescription>
                <b>About:</b>
                <p style={{ fontSize: '14px' }}>{event.eventContent}</p>
            </EventDescription>

            <EventCategoryTag eventCategories={["Food", "Fundraiser"]} />

            <EditBtn>Edit</EditBtn>
            <ConfirmBtn>Confirm</ConfirmBtn>


        </div >
    )
}