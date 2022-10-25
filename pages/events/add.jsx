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
import axios from "axios";

export default function NewEvent({ eventList, eventCategories }) {
  const [eventImage, setEventImage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("00:00");

  const [eventName, setEventName] = useState("");
  const [eventCreator, setEventCreator] = useState(1);
  const [eventLocation, setEventLocation] = useState(
    "555 Seymour St, Vancouver, BC V6B 3H6"
  );
  const [eventDescription, setEventDescription] = useState("");
  const [eventCategory, setEventCategory] = useState(0);
  const [coordinates, setCoordinates] = useState({ lat: 49.25, lon: -123 });
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState("00:00");
  const [navValue, setNavValue] = useState(1);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, file.name);
    // await fileRef.put(file);
    await uploadBytes(fileRef, file);
    setEventImage(await getDownloadURL(fileRef));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const [startHour, startMinute] = startTime.split(":");
    startDate.setHours(startHour, startMinute);

    const [endHour, endMinute] = endTime.split(":");
    endDate.setHours(endHour, endMinute);

    // this needs changing
    const event = {
      eventName,
      eventImage,
      eventContent: eventDescription,
      eventCreatorId: 1,
      eventDate: startDate,
      latitude: coordinates.lat,
      longitude: coordinates.lon,
    };

    axios.post("/api/events", event).then((res) => {
      console.log("posted successfully", res.data);
    });
  };

  function handleChangeEventName(name) {
    setEventName(name);
  }

  function handleChangeEventCreator() {
    // setEventCreator()
    return;
  }

  function handleChangeEventDescription(e) {
    setEventDescription(e.target.value);
  }
  function handleChangeStartDate(date) {
    setStartDate(date);
  }

  function handleChangeEndDate(date) {
    setEndDate(date);
  }

  function handleChangeStartTime(time) {
    setStartTime(time);
  }

  function handleChangeEndTime(time) {
    setEndTime(time);
  }

  function handleChangeEventCategory(e) {
    setEventCategory(e.target.id);
  }

  return (
    <div>
      <EventForm />
      <NavBar value={navValue} onChange={(event, newValue) => {
        setNavValue(newValue);
      }} />
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
