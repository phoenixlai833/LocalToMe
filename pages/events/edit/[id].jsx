import React, { useEffect, useState } from "react";
import { db, app, storage } from "../../../firebase/clientApp";
import {
  getEvents,
  getEvent,
  addEvent,
  getAllCategories,
} from "../../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
import EventForm from "../../../components/Templates/EventForm";
import EventPreview from "../../../components/Templates/EventPreview";
import axios from "axios";
import styled from "styled-components";
import Toast from "../../../components/Molecules/Toast/Toast";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import TopNavigation from "../../../components/Organisms/NavBarTop";
import NavBar from "../../../components/Organisms/NavBar";

const ToastPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const TopBar = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const DesktopBox = styled.div`
  @media (min-width: 768px) {
    margin-top: 8vh;
    margin-left: 18vw;
    margin-right: 18vw;
    // min-height: 92vh;
    box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
  }
`;

export default function EditEvent({ defaultEvent, categoriesList }) {
  // const [event, setEvent] = useState(defaultEvent);
  const [event, setEvent] = useState({
    ...defaultEvent,
    start: new Date(defaultEvent.start),
    end: new Date(defaultEvent.end),
  });
  const [imageURL, setImageURL] = useState(defaultEvent.fileName);

  const [isPreview, setIsPreview] = useState(false);
  const [eventId, setEventId] = useState(null);
  const handleTogglePreview = () => {
    setIsPreview(!isPreview);
  };

  function handleChangeEventName(eventName) {
    setEvent({ ...event, eventName });
  }

  function handleChangeEventCreator() {
    // setEventCreator()
    return;
  }
  function handleChangeEventPhoneNumber(eventContactPhone) {
    setEvent({ ...event, eventContactPhone });
    return;
  }

  function handleChangeEventLocation(eventLocation) {
    setEvent({ ...event, eventLocation: eventLocation?.label });
    return;
  }

  function handleChangeEventContent(eventContent) {
    setEvent({ ...event, eventContent });
  }

  async function handleChangeEventImage(img) {
    const imgRef = ref(storage, img.name);
    await uploadBytes(imgRef, img);
    const eventImgRef = await getDownloadURL(imgRef);
    setEvent({ ...event, eventImage: eventImgRef });
    // console.log(img.name);
    setImageURL(img.name);
  }

  function handleChangeEventStartDate(date) {
    const [hour, minute] = event.start
      .toLocaleString("default", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .split(":");
    setEvent({ ...event, start: new Date(date.setHours(hour, minute)) });
  }

  function handleChangeEventStartTime(time) {
    const [hour, minute] = time.split(":");
    setEvent({ ...event, start: new Date(event.start.setHours(hour, minute)) });
  }

  function handleChangeEventEndDate(date) {
    const [hour, minute] = event.end
      .toLocaleString("default", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .split(":");
    setEvent({ ...event, end: new Date(date.setHours(hour, minute)) });
  }

  function handleChangeEventEndTime(time) {
    const [hour, minute] = time.split(":");
    setEvent({ ...event, end: new Date(event.end.setHours(hour, minute)) });
  }

  function handleChangeEventCategory(tags) {
    setEvent({ ...event, eventTags: [...tags] });
  }

  function handleCancel() { }

  function handleConfirm() {
    const putEvent = {
      id: defaultEvent.id,
      eventContent: event.eventDescription,
      // eventCreatorId: defaultEvent.eventCreatorId,
      start: event.start,
      end: event.end,
      eventImage: event.eventImage,
      eventLocation: event.eventLocation,
      eventName: event.eventName,
      eventContactPhone: event.eventContactPhone,
      eventTags: event.eventTags,
      eventUpdateDate: new Date(),
    };
    geocodeByAddress(putEvent.eventLocation)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        putEvent.latitude = lat;
        putEvent.longitude = lng;
      })
      .then(() => {
        axios.put("/api/events", putEvent).then((res) => {
          window.location = `/events/${res.data}`;
          setEventId(res.data);
          console.log("edited successfully", res.data);
        });
      });
  }

  const handleViewPost = () => {
    console.log("viewid", eventId);
    window.location = `/events/${eventId}`;
  };

  return (
    <>
      <TopBar>
        <TopNavigation value={1} />
      </TopBar>
      <DesktopBox>
        {isPreview ? (
          <EventPreview
            event={event}
            onTogglePreview={handleTogglePreview}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        ) : (
          <EventForm
            mode={"edit"}
            onTogglePreview={handleTogglePreview}
            event={event}
            onChangeEventName={handleChangeEventName}
            onChangeEventCreator={handleChangeEventCreator}
            onChangeEventPhoneNumber={handleChangeEventPhoneNumber}
            onChangeEventLocation={handleChangeEventLocation}
            onChangeEventDescription={handleChangeEventContent}
            image={imageURL}
            onChangeEventImage={handleChangeEventImage}
            onChangeEventStartDate={handleChangeEventStartDate}
            onChangeEventStartTime={handleChangeEventStartTime}
            onChangeEventEndDate={handleChangeEventEndDate}
            onChangeEventEndTime={handleChangeEventEndTime}
            onChangeEventTags={handleChangeEventCategory}
            categoriesList={categoriesList}
          />
        )}
        <div style={{ paddingBottom: "10vh" }}></div>
      </DesktopBox>
      {eventId && (
        <ToastPopup>
          <Toast
            onViewPost={handleViewPost}
            message="Your changes has been saved!"
          />
        </ToastPopup>


      )}
      <div className="TEMPMEDIA">
        <NavBar value={1} />
      </div>


    </>
  );
}

export async function getServerSideProps(context) {
  const eventData = await getEvent(context.params.id);
  const defaultEvent = JSON.parse(JSON.stringify(eventData));
  console.log(defaultEvent);

  const categoriesData = await getAllCategories();
  const categoriesList = JSON.parse(JSON.stringify(categoriesData));

  return {
    props: { defaultEvent, categoriesList }, // will be passed to the page component as props
  };
}
