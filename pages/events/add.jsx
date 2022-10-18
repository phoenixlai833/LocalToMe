import React, { useEffect, useState } from "react";
import { db, app, storage } from "../../firebase/clientApp";
import { getEvents, getEvent, addEvent } from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Event from "../../components/Event";
// import Image from `next/image`;
import DeletePopup from "../../components/DeletePopup";

export default function NewEvent({ eventList }) {
  const [fileUrl, setFileUrl] = useState(null);
  const [eventL, setEvents] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, file.name);
    // await fileRef.put(file);
    console.log(fileRef);
    await uploadBytes(fileRef, file);
    setFileUrl(await getDownloadURL(fileRef));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const eventname = e.target.eventname.value; //test name
    if (!eventname || !fileUrl) {
      return;
    }
    console.log(fileUrl);
    const event = {
      eventName: eventname,
      eventImage: fileUrl,
    };
    await addEvent(event);
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

  // useEffect(() => {
  //     const fetchEvent = async () => {
  //         const eventL = await getEvents()
  //         // console.log(eventList);
  //         setEvents(eventList);
  //     };
  //     fetchEvent();
  // }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="eventname" placeholder="NAME" />
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
  // console.log(eventList)

  // const findMissingLingLat = foodBanksList.map((i) => [i.longitude, i.id]);
  // console.log(findMissingLingLat)

  return {
    props: { eventList }, // will be passed to the page component as props
  };
}
