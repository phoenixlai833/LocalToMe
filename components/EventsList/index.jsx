import React from "react";
import styles from "./EventsList.module.css";
import Link from "next/link";

export default function EventsList({ eventList }) {
    // console.log(eventList.map(e => e.id));

    const eventsList = eventList.map((event) => (
        <div key={event.id} className={styles.eventBlock}>
            <div className={styles.eventDateAndIamge}>
                <img src={event.eventImage} alt={event.eventName} className={styles.eventImage} />
                {/* <p className={styles.eventDate}>{event.eventDate}</p> */}
            </div>
            <div className={styles.eventInfo}>
                <p className={styles.eventTime}>{event.eventTime}</p>
                <Link href={`/events/${event.id}`}>
                    <a className={styles.eventTitle}><h2>{event.eventName}</h2></a>
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

    return (
        <div>
            {eventsList}
        </div>
    )
}