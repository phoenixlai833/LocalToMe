
import React, { useState, useEffect } from 'react';
import styles from './DeletePopup.module.css'
import Link from 'next/link'
import { getEvent, deleteEvent } from '../../server/database';

export default function DeletePopup({ singleEvent }) {
    const [event, setEvent] = useState();
    console.log(singleEvent);

    // async function deleteTheEvent(eventId) {
    //     deleteEvent(eventId);
    // }

    const handleDelete = (singleEventId) => async (e) => {
        {
            e.preventDefault();
            console.log(singleEventId);
            deleteEvent(singleEventId);
        }
    };


    // useEffect(() => {
    //     const fetchEvent = async (eventId) => {
    //         const eventInfo = await getEvent(eventId)
    //         // console.log(eventInfo);
    //         setEvent(eventInfo);
    //     };
    //     fetchEvent();
    // }, []);

    const singleEventComponent = (
        <div>
            <img width="100" height="100" src={singleEvent.eventImage} alt={singleEvent.eventName} />
            <p>{singleEvent.eventName}</p>
        </div>
    )

    return (
        <div>
            <div className={styles.background}>
                <h2>Confirm delete?</h2>
                {singleEventComponent}
                <button onClick={handleDelete(singleEvent.id)}>Confirm</button>
            </div>
        </div>
    )
}

