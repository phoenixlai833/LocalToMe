// import { getEvent, deleteEvent } from "../../server/database";
// import { useState } from "react";
// import { useRouter } from 'next/router';
// import NavBar from '../../components/NavBar';
// import React from "react";
// import GetDirectionGreenBtn from '../../components/GetDirectionGreenBtn';
import TextBubble from "/components/Molecules/TextBubble";
import TopBanner from "/components/Molecules/TopBanner";
import UserOfPost from "/components/Molecules/UserOfPost";
import EventCategoryTag from "/components/Atoms/EventCategoryTag";
import styled from "styled-components";
import { useSession } from "next-auth/react";

const EventImageBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
`;

const EventImage = styled.img`
  position: relative;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const EventDescription = styled.div`
  margin-left: 8%;
`;

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
`;

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
`;

const EventUser = styled.div`
margin-left: 5%;
`

const EventCat = styled.div`
margin-left:8%;
`

export default function EventPreview({
  event,
  onTogglePreview,
  onCancel,
  onConfirm,

}) {
  const { data: session } = useSession();

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

  function handleTogglePreview() {
    onTogglePreview();
  }

  function handleConfirm() {
    onConfirm(event);
  }



  return (
    <div>
      <TopBanner back={false} text={"Preview"} />
      <EventImageBlock>
        <EventImage src={event.eventImage} alt={event.eventName} />
      </EventImageBlock>
      <TextBubble
        text={[
          event.eventLocation,
          event.eventContactPhone,
          dateAndTime,
        ]}
        icon={["location_on", "call", "access_time"]}
      />
      <EventUser>
        <UserOfPost userImg={session.user.image} name={session.user.name} />
      </EventUser>
      <EventDescription>

        <b>About:</b>
        <p style={{ fontSize: "14px" }}>{event.eventContent}</p>
      </EventDescription>
      <EventCat>
        <EventCategoryTag eventCategories={event.eventTags} selected={true} />
      </EventCat>
      <EditBtn onClick={handleTogglePreview}>Edit</EditBtn>
      <ConfirmBtn onClick={handleConfirm}>Confirm</ConfirmBtn>
    </div>
  );
}
