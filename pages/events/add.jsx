import React, { useEffect, useState } from "react";
import { db, app, storage } from "../../firebase/clientApp";
import { getAllCategories } from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
// import Event from "../../components/Event";
// import Image from `next/image`;
import DeletePopup from "../../components/Organisms/DeletePopup";
import TimeInput from "../../components/Molecules/TimeInput";
import NavBar from "../../components/Organisms/NavBar";
import EventForm from "../../components/Templates/EventForm";
import EventPreview from "../../components/Templates/EventPreview";
import { useSession } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import axios from "axios";

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
    setEvent({ ...event, eventLocation });
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

  function handleChangeEventCategory(tags) {
    console.log(...tags)
    setEvent({ ...event, eventTags: [...tags] });
  }

  function handleCancel() { }

  function handleConfirm() {
    // console.log(event)
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
      eventUpdateDate: new Date()
    }

    console.log('lul', typeof event.start)

    axios.post("/api/events", postEvent).then((res) => {
      window.location = `/events/${res.data}`
      console.log("posted successfully", res.data);
    });
  }

  return (
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
          onChangeEventTags={handleChangeEventCategory}
          categoriesList={categoriesList}
        />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  // const eventData = await getEvents();
  // const eventList = JSON.parse(JSON.stringify(eventData));

  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  const categoriesData = await getAllCategories();
  const categoriesList = JSON.parse(JSON.stringify(categoriesData));

  return {
    props: { categoriesList } // will be passed to the page component as props
  };
}
