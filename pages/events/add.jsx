import React, { useEffect, useState } from "react";
import { db, app, storage } from '../../firebase/clientApp';
import { getEvents, addEvent } from '../../server/database';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import Event from '../../components/Event';
// import Image from `next/image`;
// import { DeletePopup } from '../../components/DeletePopup'
// import { LoginForm } from '../../components/LoginForm'



export default function AddEvent() {
    const [fileUrl, setFileUrl] = useState(null);
    const [events, setEvents] = useState([]);

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const fileRef = ref(storage, file.name);
        // await fileRef.put(file);
        console.log(fileRef)
        await uploadBytes(fileRef, file)
        setFileUrl(await getDownloadURL(fileRef));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const eventname = e.target.eventname.value; //test name
        if (!eventname || !fileUrl) {
            return;
        }
        console.log(fileUrl)
        const event = {
            eventName: eventname,
            eventImage: fileUrl,
        }
        await addEvent(event)
    };

    function handleDelete(e) {
        {
            e.preventDefault();
            console.log(e)
        }
    };

    useEffect(() => {
        const fetchEvent = async () => {
            const eventList = await getEvents()
            // console.log(eventList);
            setEvents(eventList);
        };
        fetchEvent();
    }, []);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange} />
                <input type="text" name="eventname" placeholder="NAME" />
                <button>Submit</button>
            </form>
            <ul>
                {events.map((e) => (
                        <li key={e.eventName}>
                            <Event eventId={e.id} eventName={e.eventName} eventImage={e.eventImage} onDelete={handleDelete} />
                        </li>
                    )
                )}
            </ul>
            {/* <div>< DeletePopup /></div> */}
            {/* <div><LoginForm /></div> */}
            <div>HELLO</div>
        </>
    );
}