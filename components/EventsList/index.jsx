import React from "react";
import styles from "./EventsList.module.css";
import Link from "next/link";

export default function EventsList({ eventsListData }) {

    const eventsList = eventsListData.map((event) => (
        <div className={styles.eventBlock}>
            <div className={styles.eventDateAndIamge}>
                <img src={event.eventImage} alt={event.eventName} className={styles.eventImage} />
                <p className={styles.eventDate}>{event.eventDate.split(",")[0]}</p>
            </div>
            <div className={styles.eventInfo}>
                <p className={styles.eventTime}>{event.eventTime}</p>
                <Link href={`/events/${event.id}`}>
                    <a className={styles.eventTitle}><h2>{event.eventName}</h2></a>
                </Link>
                <p className={styles.eventDescription}>{event.eventDescription}</p>
            </div>
        </div>
    )
    )

    return (
        <div>
            {eventsList}
        </div>
    )
}