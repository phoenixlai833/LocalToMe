// import SingleEvent from "../../components/SingleEvent";
import { getEvent, deleteEvent } from "../../server/database";
import { useState } from "react";
import { useRouter } from 'next/router';
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
import Link from "next/link";

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

export const FunctionsBox = styled.div`
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const EventDescription = styled.div`
    margin: 30px;
`

const ExtraSpace = styled.div`
    height: 50px;
`

const AbsPos = styled.div`
position: absolute;
top: 25vh;
left: 20vw;
`
const DeleteCont = styled.div`
background-color: #FFFFFF;
width: 60vw;
height: 30vh;
padding: 2%;
margin: auto;
font-family: 'Rubik', sans-serif;
text-align: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
min-height: 210px;
min-width: 320px;

`
const BtnCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 5%%;
`

const DeleteBtn = styled.button`
background: #E24949;
border-radius: 13px;
height: 30px;
width: 137px;
left: 170px;
top: 138px;

font-size: 14px;
line-height: 17px;
text-align: center;
border: 0px;

color: #FFFFFF;
margin: 2%;
`
const CancelBtn = styled.button`
background: #FFFFF;
border: 2px solid #535353;
border-radius: 13px;
height: 30px;
width: 137px;
left: 170px;
top: 138px;

font-size: 14px;
line-height: 17px;
text-align: center;

color: #535353;
margin: 2%
`


export default function Event({ event }) {

    const [navValue, setNavValue] = useState(1);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const router = useRouter()

    const time = event.eventDate.seconds
    const date = new Date(time * 1000)
    const eventTime = date.toLocaleString().split(',')[1]
    const dateOfEvent = date.toLocaleString("default", { month: "long", day: "2-digit", year: "numeric" })
    const dateAndTime = dateOfEvent + "," + eventTime

    const handleDelete = (singleEventId) => async (e) => {
        {
            e.preventDefault();
            console.log(singleEventId);
            deleteEvent(singleEventId);
            router.push('/community')
        }
    };

    function onDelete() {
        setConfirmDelete(true);
    };

    function hidePopup() {
        setConfirmDelete(false);
    }


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

            <div style={{ display: "flex", justifyContent: "space-between", margin: "0 5%" }}>
                <UserOfPost />
                <div>
                    <Link href={`/events/edit/${event.id}`}>
                        <div style={{ display: "flex" }}>
                            <img src="/Edit-icon.svg" alt="Edit Event" />
                            &nbsp;
                            <p>Edit Event</p>
                        </div>
                    </Link>
                    <div style={{ display: "flex" }}>
                        <img src="/Delete-icon.svg" alt="Delete Event" onClick={onDelete} />
                        &nbsp;
                        <p style={{ color: "red" }} onClick={onDelete}>Delete Event</p>
                    </div>
                </div>
            </div>


            <EventDescription>
                <b>About:</b>
                <p style={{fontSize: '14px'}}>{event.eventContent}</p>
            </EventDescription>

            <EventCategoryTag eventCategories={["Food", "Fundraiser"]} />

            <GetDirectionGreenBtn address={event.eventLocation} onMap={false} />

            <ExtraSpace></ExtraSpace>

            {confirmDelete && (
                <AbsPos>
                    <DeleteCont>
                        <h2 styles={{ paddingRight: "10%" }}>Are you sure you want to delete this posting? This cannot be undone.</h2>
                        <BtnCont>
                            <CancelBtn onClick={hidePopup}>Cancel</CancelBtn>
                            <a href={`/community`}>
                                <DeleteBtn onClick={handleDelete(event.id)}>Confirm</DeleteBtn>
                            </a>
                        </BtnCont>
                    </DeleteCont>
                </AbsPos>
            )}

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

