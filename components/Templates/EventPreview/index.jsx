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
  margin: 30px;
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

export default function EventPreview({
  event,
  onTogglePreview,
  onCancel,
  onConfirm,
}) {
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
          event.start.toString(),
        ]}
        icon={["location_on", "call", "access_time"]}
      />
      <UserOfPost />
      <EventDescription>
        <b>About:</b>
        <p style={{ fontSize: "14px" }}>{event.eventDescription}</p>
      </EventDescription>

      <EventCategoryTag eventCategories={["Food", "Fundraiser"]} />

      <EditBtn onClick={handleTogglePreview}>Edit</EditBtn>
      <ConfirmBtn onClick={handleConfirm}>Confirm</ConfirmBtn>
    </div>
  );
}
