import React, { useEffect, useState } from "react";
import { db, app, storage } from "../../../firebase/clientApp";
import {
  getEvents,
  getEvent,
  addEvent,
  getEventCategories,
} from "../../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
import EventForm from "../../../components/Templates/EventForm";
import EventPreview from "../../../components/Templates/EventPreview";
import axios from "axios";

export default function EditEvent({ defaultEvent, eventCategories }) {
  const [event, setEvent] = useState(defaultEvent);

  const [isPreview, setIsPreview] = useState(false);

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
  }

  function handleChangeEventCreator() {
    // setEventCreator()
    return;
  }

  function handleChangeEventLocation(eventLocation) {
    setEvent({ ...event, eventLocation });
    return;
  }

  function handleChangeEventDescription(e) {
    setEvent({ ...event, eventContent: e.target.value });
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
    const newImgRef = await getDownloadURL(imgRef)
    setEvent({ ...event, eventImage: newImgRef });
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

  function handleChangeEventCategory(e) {
    setEvent({ ...event, eventTags: [...eventTags, e.target.id] });
  }

  function handleCancel() {}

  function handleConfirm() {}

  return (
    <div>
      {isPreview ? (
        <EventPreview
          onTogglePreview={handleTogglePreview}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      ) : (
        <EventForm
          onTogglePreview={handleTogglePreview}
          event={event}
          onChangeEventName={handleChangeEventName}
          onChangeEventCreator={handleChangeEventCreator}
          onChangeEventLocation={handleChangeEventLocation}
          onChangeEventDescription={handleChangeEventDescription}
          onChangeEventImage={handleChangeEventImage}
          onChangeEventStartDate={handleChangeEventStartDate}
          onChangeEventStartTime={handleChangeEventStartTime}
          onChangeEventEndDate={handleChangeEventEndDate}
          onChangeEventEndTime={handleChangeEventEndTime}
          onChangeEventCategory={handleChangeEventCategory}
        />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const eventData = await getEvent(context.params.id);
  const defaultEvent = JSON.parse(JSON.stringify(eventData));

  const eventCategoriesData = await getEventCategories();
  const eventCategories = JSON.parse(JSON.stringify(eventCategoriesData));

  return {
    props: { defaultEvent, eventCategories }, // will be passed to the page component as props
  };
}
