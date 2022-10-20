import React from "react";
import styles from "./EventsList.module.css";
import Link from "next/link";
import {EventHeader} from "../EventPost/EventPostComp";
import EventPost from "../EventPost/EventPostComp";


export default function EventsList({ eventList }) {


    return (
        <div>
            {/* <EventHeader>Recent Events</EventHeader> */}
            <EventPost/>

   <h2 className={styles.category}>Recent Events</h2>

            {eventList.map((event) => (
                < div key={event.id} className={styles.eventBlock} >
                    <div className={styles.eventDateAndIamge}>
                        <img src={event.eventImage} alt={event.eventName} className={styles.eventImage} />
                        <div className={styles.eventDate}>
                            {new Date(event.eventDate.seconds * 1000).toLocaleString("default", { month: "short" })} <br />
                            {String(new Date(event.eventDate.seconds * 1000).getDate()).padStart(2, '0')}
                        </div>
                    </div>
                    <div className={styles.eventInfo}>
                        <p className={styles.eventTime}>{new Date(event.eventDate.seconds * 1000).toLocaleString().split(',')[1]}</p>
                        <Link href={`/events/${event.id}`}>
                            <a className={styles.eventTitle}><h3>{event.eventName}</h3></a>
                        </Link>
                        <p className={styles.eventDescription}>{`${event.eventContent.slice(0, 80)}`}
                            <span className={styles.readmore}>
                                <Link href={`/events/${event.id}`}>
                                    ...Read More
                                </Link>
                            </span></p>
                    </div>
                </div >
            )
            )
            }
        </div >
    )
}