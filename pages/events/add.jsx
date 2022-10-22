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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker/dist/entry.nostyle";
import axios from "axios";

export default function NewEvent({ eventList, eventCategories }) {
  const [eventImage, setEventImage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("00:00");

  const [eventName, setEventName] = useState("");
  const [eventCreator, setEventCreator] = useState(1);
  const [eventLocation, setEventLocation] = useState("555 Seymour St, Vancouver, BC V6B 3H6");
  const [eventDescription, setEventDescription] = useState("");
  const [eventCategory, setEventCategory] = useState(0);
  const [coordinates, setCoordinates] = useState({ lat: 49.25, lon: -123 });
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState("00:00");

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, file.name);
    // await fileRef.put(file);
    console.log(fileRef);
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
      longitude: coordinates.lon
    };

    axios.post('/api/events', event).then((res) => {
      console.log('posted successfully', res.data)
    })
  };

  const onDelete = (passedEvent) => async (e) => {
    {
      e.preventDefault();
      console.log(passedEvent);
      setEventInfo(passedEvent);
      setConfirmDelete(true);
    }
  };

  function hidePopup() {
    setConfirmDelete(false);
  }

  function handleChangeEventName(name) {
    setEventName(name);
  }

  function handleChangeEventCreator() {
    // setEventCreator()
    return;
  }

  function handleChangeEventDescription(description) {
    setEventDescription(description);
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
      <form onSubmit={onSubmit}>
        <p>Basic Information</p>
        <input type="file" onChange={onFileChange} />
        <input
          type="text"
          name="event-name"
          placeholder="Event name"
          onChange={handleChangeEventName}
        />
        <input type="text" name="event-creator" placeholder="Host/Organizer" value="Editing this does nothing, creatorId will always be 1" />
        <p>Location of your Event</p>
        <input value={eventLocation}></input>
        <p>Date & Time of your Event</p>
        <p>Start date</p>
        <DatePicker
          selected={startDate}
          onChange={handleChangeStartDate}
        ></DatePicker>
        <p>Start time</p>
        <TimePicker
          onChange={handleChangeStartTime}
          value={startTime}
        ></TimePicker>
        <p>End date</p>
        <DatePicker
          selected={endDate}
          onChange={handleChangeEndDate}
        ></DatePicker>
        <p>End time</p>
        <TimePicker onChange={handleChangeEndTime} value={endTime}></TimePicker>
        <p>Description</p>
        <textarea onChange={handleChangeEventDescription} placeholder="Tell us about your event"></textarea>
        {eventCategories.map((c) => (
          <button key={c.id} id={c.id} onClick={handleChangeEventCategory}>{c.eventCategory}</button>
        ))}
        <button>Submit</button>
      </form>
      <ul>
        {eventList.map((e) => {
          return (
            <li key={e.eventName}>
              <img
                width="100"
                height="100"
                src={e.eventImage}
                alt={e.eventName}
              />
              <p>{e.eventName}</p>
              <button onClick={onDelete(e)}>delete</button>
            </li>
          );
        })}
      </ul>
      {confirmDelete && (
        <div>
          <button onClick={hidePopup}>X</button>
          <DeletePopup singleEvent={eventInfo} />
        </div>
      )}
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
