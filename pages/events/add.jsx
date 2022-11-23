import React, { useEffect, useState } from "react";
import { db, app, storage } from "../../firebase/clientApp";
import { getAllCategories } from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
// import Event from "../../components/Event";
// import Image from `next/image`;
import EventForm from "../../components/Templates/EventForm";
import EventPreview from "../../components/Templates/EventPreview";
import { useSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth].js";
import { unstable_getServerSession } from "next-auth/next";
import axios from "axios";
import Toast from "../../components/Molecules/Toast/Toast";
import styled from "styled-components";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

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
`


export default function NewEvent({ categoriesList }) {
  const { data: session } = useSession();
  const userId = session.user.id;
  const [event, setEvent] = useState({
    eventName: "",
    eventImage:
      "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0",
    eventContent: "",
    eventCreatorId: userId,
    start: new Date(),
    end: new Date(),
    eventLocation: "",
    latitude: 49.25,
    longitude: -123,
    eventTags: [],
  });

  const [isPreview, setIsPreview] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [navValue, setNavValue] = useState(1);
  const [eventId, setEventId] = useState(null);

  const handleTogglePreview = () => {
    setIsPreview(!isPreview);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    axios.post("/api/events", event).then((res) => {
      console.log("posted successfully", res.data);
    });
  };

  function handleChangeEventName(eventName) {
    setEvent({ ...event, eventName });
    return;
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

  // const onFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   const fileRef = ref(storage, file.name);
  //   // await fileRef.put(file);
  //   await uploadBytes(fileRef, file);
  //   setEventImage(await getDownloadURL(fileRef));
  // };

  async function handleChangeEventImage(img) {
    const imgRef = ref(storage, img.name);
    await uploadBytes(imgRef, img);
    const newImgRef = await getDownloadURL(imgRef);
    setEvent({ ...event, eventImage: newImgRef });
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

  function handleChangeEventTags(tags) {
    console.log(tags);
    setEvent({ ...event, eventTags: tags });
  }

  function handleCancel() {}

  function handleConfirm() {
    const postEvent = {
      eventContent: event.eventContent,
      eventCreatorId: userId,
      start: event.start,
      end: event.end,
      eventImage: event.eventImage,
      eventLocation: event.eventLocation,
      eventName: event.eventName,
      eventContactPhone: event.eventContactPhone,
      eventTags: event.eventTags,
      eventUpdateDate: new Date(),
    };

    geocodeByAddress(postEvent.eventLocation)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        postEvent.latitude = lat;
        postEvent.longitude = lng;
      });

    axios.post("/api/events", postEvent).then((res) => {
      window.location = `/events/${res.data}`;
      setEventId(res.data)
      console.log("posted successfully", res.data);
    });
  }

  const handleViewPost = () => {
    console.log("viewid", eventId)
    window.location = `/events/${eventId}`;
  };

  return (
    <>
      <div>
        {isPreview ? (
          <EventPreview
            event={event}
            onTogglePreview={handleTogglePreview}
            onCancel={handleCancel}
            onConfirm={handleConfirm}

          />
        ) : (
          <EventForm
            event={event}
            onTogglePreview={handleTogglePreview}
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
            onChangeEventTags={handleChangeEventTags}
            categoriesList={categoriesList}
          />
        )}
      </div>
      {eventId && (
        <ToastPopup>
          <Toast onViewPost={handleViewPost} />
        </ToastPopup>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // const eventData = await getEvents();
  // const eventList = JSON.parse(JSON.stringify(eventData));

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const categoriesData = await getAllCategories();
  const categoriesList = JSON.parse(JSON.stringify(categoriesData));

  return {
    props: { categoriesList, session } // will be passed to the page component as props
  };
}
