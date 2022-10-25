import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import Link from "next/link";
import styles from "./EventMapPin.module.css";


export default function EventMapPin({ events }) {

    const [selectedEvent, setSelectedEvent] = useState(null);
    console.log(selectedEvent)

    let eventTime;
    let eventDate;

    if (selectedEvent) {
        const time = selectedEvent.eventDate.seconds
        const date = new Date(time * 1000)
        eventTime = date.toLocaleString().split(',')[1]
        const mothString = date.toLocaleString("default", { month: "long" })
        const day = date.toLocaleString().split(',')[0].split('/')[1]
        const year = date.toLocaleString().split(',')[0].split('/')[2]
        eventDate = `${mothString} ${day}, ${year}`
    }


    useEffect(() => {
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedEvent(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    console.log(selectedEvent)

    return (
        <div>

            {events.map((event) => (
                <Marker
                    key={event.id}
                    latitude={event.latitude}
                    longitude={event.longitude}
                >
                    <button
                        className={styles.markerBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedEvent(event);
                        }}
                    >
                        <img src="./eventPin.svg" alt="Event Pin" />
                    </button>

                </Marker>
            )
            )}

            {selectedEvent && (
                <Popup
                    latitude={selectedEvent.latitude}
                    longitude={selectedEvent.longitude}
                    anchor="top"
                    closeOnClick={false}
                    onClose={() => {
                        setSelectedEvent(null);
                    }}
                >
                    <div>
                        <p className={styles.eventNameLink}>
                            <Link href={`/events/${selectedEvent.id}`} >
                                <h2>{selectedEvent.eventName}</h2>
                            </Link>
                        </p>
                        <p>
                            <b>Location:</b>
                            {selectedEvent.eventLocation}
                        </p>
                        {eventDate && eventTime && (
                            <p>
                                <b>Date:</b>
                                {eventDate}, {eventTime}
                            </p>
                        )}
                        <p>
                            <b>Contact:</b>
                            {selectedEvent.eventContactPhone}
                        </p>
                        <p>
                            <b>Email:</b>
                            {selectedEvent.eventContactEmail}
                        </p>
                        <p>
                            <b>Description:</b>
                            {selectedEvent.eventContent.slice(0, 50)}
                            <span className={styles.readmore}>
                                <Link href={`/events/${selectedEvent.id}`}>
                                    ...Read More
                                </Link>
                            </span>
                        </p>
                        <button onClick={() => { }}>Get Direction</button>

                    </div>

                </Popup>
            )}

        </div>
    )
}

