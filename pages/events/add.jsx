import React, { useEffect, useState } from "react";
import { db, app, storage } from "../../firebase/clientApp";
import {
  getEvents,
  getEvent,
  addEvent,
  getEventCategories,
} from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
// import Event from "../../components/Event";
// import Image from `next/image`;
import DeletePopup from "../../components/DeletePopup";
import TimeInput from "../../components/TimeInput";
import NavBar from '../../components/NavBar';
import EventForm from "../../components/EventForm";
import EventPreview from "../../components/EventPreview";
import axios from "axios";

export default function NewEvent({ eventList, eventCategories }) {
  const [event, setEvent] = useState({
    eventName: "",
    eventImage: "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0",
    eventContent: "",
    eventCreatorId: 1,
    start: new Date,
    end: new Date,
    eventLocation: "555 Seymour St, Vancouver, BC V6B 3H6",
    latitude: 49.25,
    longitude: -123,
    eventTags: [],
  })
  const [isPreview, setIsPreview] = useState(false);
  const [navValue, setNavValue] = useState(1);

  const handleTogglePreview = () => {
    setIsPreview(!isPreview);
  }

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, file.name);
    // await fileRef.put(file);
    await uploadBytes(fileRef, file);
    setEventImage(await getDownloadURL(fileRef));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    axios.post("/api/events", event).then((res) => {
      console.log("posted successfully", res.data);
    });
  };

  function handleChangeEventName(e) {
    setEvent({ ...event, eventName: e.target.value });
  }

  function handleChangeEventCreator() {
    // setEventCreator()
    return;
  }

  function handleChangeEventDescription(e) {
    setEvent({ ...event, eventContent: e.target.value });
  }
  function handleChangeStartDate(date) {
    setEvent({ ...event, start: date });
  }

  function handleChangeStartTime(time) {
    const [hour, minute] = time.split(":");
    setEvent({ ...event, start: event.start.setHours(hour, minute) });
  }

  function handleChangeEndDate(date) {
    setEvent({ ...event, end: date });
  }


  function handleChangeEndTime(time) {
    const [hour, minute] = time.split(":");
    setEvent({ ...event, end: event.end.setHours(hour, minute) });
  }

  function handleChangeEventCategory(e) {
    setEvent({ ...event, eventTags: [...eventTags, e.target.id] });
  }

  return (
    <div>
      {isPreview ? <EventPreview onTogglePreview={handleTogglePreview} /> : <EventForm onTogglePreview={handleTogglePreview} />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const eventData = await getEvents();
  const eventList = JSON.parse(JSON.stringify(eventData));

  const eventCategoriesData = await getEventCategories();
  const eventCategories = JSON.parse(JSON.stringify(eventCategoriesData));

  return {
    props: { eventList, eventCategories }, // will be passed to the page component as props
  };
}
