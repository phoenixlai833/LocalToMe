// import SingleEvent from "../../components/SingleEvent";
import { getEvent, deleteEvent, getUser, getUsers } from "../../server/database";
import { useState } from "react";
import { useRouter } from 'next/router';
import React from "react";
import styled from "styled-components";
import NavBar from '../../components/Organisms/NavBar';
import GetDirectionGreenBtn from '../../components/Atoms/GetDirectionGreenBtn';
import TextBubble from '../../components/Molecules/TextBubble';
import TopBanner from '../../components/Molecules/TopBanner';
import UserOfPost from '../../components/Molecules/UserOfPost';
import EventCategoryTag from "../../components/Atoms/EventCategoryTag";
import Link from "next/link";
import SharePost from "../../components/Molecules/SharePost";
import { collection, query, where } from "firebase/firestore";
import { Colours } from "../../styles/globals";
// import { Colours } from "../../../styles/globals";
import FavoriteBtn from "../../components/Atoms/FavoriteBtn";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";



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
`;

export const FunctionsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  background-color: RGBA(255, 255, 255, 0.9);
  width: 40px;
  height: 110px;
  position: absolute;
  right: 3%;
  bottom: 10%;
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const EventDescription = styled.div`

  background:${Colours.background};
   display:flex;
   padding:12px 20px;
   border-radius:15px;
   align-items:left;
   box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
   max-width:85vw;
   min-width:85vw;
   flex-direction:column;
   margin: 15px auto;

`;

const ExtraSpace = styled.div`
  height: 50px;
`;

const AbsPos = styled.div`
position: absolute;
top: 25vh;
left: 20vw;
`

const Sharebox = styled.div`
position: fixed;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
`
const DeleteCont = styled.div`
  background-color: #ffffff;
  width: 60vw;
  height: 30vh;
  padding: 2%;
  margin: auto;
  font-family: "Rubik", sans-serif;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 210px;
  min-width: 320px;
`;
const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5%%;
`;

const DeleteBtn = styled.button`
  background: #e24949;
  border-radius: 13px;
  height: 30px;
  width: 137px;
  left: 170px;
  top: 138px;

  font-size: 14px;
  line-height: 17px;
  text-align: center;
  border: 0px;

  color: #ffffff;
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
  margin: 2%;
`;



export default function Event({ event, user }) {
  const { data: session } = useSession()

  const [navValue, setNavValue] = useState(1);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [share, setShare] = useState(false);
  const router = useRouter()

  const startDay = new Date(event.start).toLocaleString("default", { dateStyle: "long" })
  const startTime = new Date(event.start).toLocaleString("default", { timeStyle: "short" })
  const endDay = new Date(event.end).toLocaleString("default", { dateStyle: "long" })
  const endTime = new Date(event.end).toLocaleString("default", { timeStyle: "short" })
  let eventTime;
  if (startDay == endDay) {
    startTime == endTime ? eventTime = `${startDay} at ${startTime}` : eventTime = `${startDay} at ${startTime} - ${endTime}`;
  } else {
    eventTime = `${startDay} at ${startTime} - ${endDay} at ${endTime}`
  }



  const dateAndTime = eventTime;
  // const dateAndTime = new Date(event.start).toLocaleString("default", {
  //   dateStyle: "long",
  //   timeStyle: "short",
  // })

  const handleDelete = (singleEventId) => async (e) => {
    {
      e.preventDefault();
      deleteEvent(singleEventId);
      router.push("/community");
    }
  };

  function onDelete() {
    setConfirmDelete(true);
  }

  function hidePopup() {
    setConfirmDelete(false);
  }

  function onShare() {
    setShareUrl(window.location);
    setShare(true);
  }

  const ifFavorite = user?.favorite.event.filter((singleEvent) => singleEvent.id === event.id).length > 0 ? true : false;
  const [favorite, setFavorite] = useState(ifFavorite);


  function handleOnClick() {
    if (!session) {
      router.push('/auth/signin');
    } else {
      axios.put('/api/favorite', {
        favorite: favorite,
        type: "event",
        userId: user.id,
        itemId: event.id
      }).then((res) => {
        console.log("addFav?", res)
        setFavorite(!favorite)

      })
    }

  }

  return (
    <div>
      <TopBanner text={event.eventName} back={true} />

      <EventImageBlock >
        <EventImage src={event.eventImage} alt={event.eventName} />
        <FunctionsBox>
          <img src="../calenderIcon.png" alt="calendar icon" />
          <img src="../shareLinkIcons.png" alt="calendar icon" onClick={onShare} />
          <FavoriteBtn favorite={favorite} onClick={handleOnClick} />
        </FunctionsBox>
      </EventImageBlock>

      <TextBubble
        text={[event.eventLocation, event.eventContactPhone, dateAndTime]}
        icon={["location_on", "call", "access_time"]}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 5%",
        }}
      >
        <UserOfPost userImg={event.eventCreatorId.image} name={event.eventCreatorId.name} />
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
            <p style={{ color: "red" }} onClick={onDelete}>
              Delete Event
            </p>
          </div>
        </div>
      </div>


      <EventDescription>
        <b>About:</b>
        <p style={{ fontSize: '14px' }}>{event.eventContent}</p>
      </EventDescription>

      <EventCategoryTag eventCategories={event.eventTags} selected={true} />

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


      <Sharebox>
        <SharePost shareUrl={shareUrl} share={share} closeShare={() => { setShare(false) }} />
      </Sharebox>


      <NavBar value={navValue} onChange={(event, newValue) => {
        setNavValue(newValue);
      }} />
    </div >
  )
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  const req = await getEvent(context.params.id);
  const event = JSON.parse(JSON.stringify(req));

  if (!session) {
    return {
      props: { event },
    }
  } else {

    const users = await getUsers();
    const userId = users.filter((user) => user.email === session.user.email)[0].id;
    const userData = await getUser(userId);
    const user = JSON.parse(JSON.stringify(userData));

    return {
      props: { event, session, user },
    };

  }
}
