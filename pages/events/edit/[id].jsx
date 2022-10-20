import React, { useEffect, useState } from "react";
// import { db, app, storage } from '../../firebase/clientApp';
// import { getEvents, addEvent } from '../../server/database';
// import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import Event from '../../components/Event';



export default function EditEvent({ event }) {
    // const [title, setTitle] = useState(event.eventTitle);
    // const [creator, setCreator] = useState(event.eventCreator);
    // const [image, setImage] = useState(event.eventImage);
    
    // //
    // const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     const fetchEvent = async () => {
    //         const eventList = await getEvents()
    //         setEvents(eventList);
    //     };
    //     fetchEvent();
    // }, []);
    // //

    // const onFileChange = async (e) => {
    //     const file = e.target.files[0];
    //     const fileRef = ref(storage, file.name);
    //     await uploadBytes(fileRef, file);
    //     setFileUrl(await getDownloadURL(fileRef));
    // };

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     const eventname = e.target.eventname.value; //test name
    //     if (!eventname || !fileUrl) {
    //         return;
    //     }
    //     console.log(fileUrl)
    //     const event = {
    //         eventTitle: eventname,
    //         eventImage: fileUrl,
    //     }
    //     await addEvent(event)
    // };

    // function handleDelete(e) {
    //     {
    //         e.preventDefault();
    //         console.log(e);
    //     }
    // };

    return (
        <>
        Edit
            {/* <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange} />
                <input type="text" name="eventname" placeholder="NAME" />
                <button>Submit</button>
            </form>
            <ul>
                {events.map((e) => (
                        <li key={e.eventName}>
                            <Event eventName={e.eventName} eventImage={e.eventImage} onDelete={handleDelete} />
                        </li>
                    )
                )}
            </ul> */}
        </>
    );
}

// export async function getServerSideProps(context) {
//     const eventId = context.params.id
//     const eventData = await getEvent(eventId);
//     const event = JSON.parse(JSON.stringify(eventData));
//     return {
//       props: { event },
//     };
//   }
  