import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import Link from "next/link";
import GetDirectionGreenBtn from "../GetDirectionGreenBtn";
import styled from "styled-components";

const EventNameLink = styled.p`
 :hover {
    color: rgb(49, 143, 237);
    text-decoration: underline;
}
`

const Readmore = styled.span`
    color: rgb(49, 143, 237);
`

const MarkerBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
 img {
    width: 20px;
    height: 28px;
}
`

export default function EventMapPin({ events }) {

    const [selectedEvent, setSelectedEvent] = useState(null);
    console.log(selectedEvent)

    let eventTime;
    let eventDate;

    if (selectedEvent) {
        const time = selectedEvent.eventDate.seconds
        const date = new Date(time * 1000)
        eventTime = date.toLocaleString().split(',')[1]
        eventDate = date.toLocaleString("default", { month: "long", day: "2-digit", year: "numeric" })
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
                    <MarkerBtn
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedEvent(event);
                        }}
                    >
                        <img src="./eventPin.svg" alt="Event Pin" />
                    </MarkerBtn>

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
                        <EventNameLink>
                            <Link href={`/events/${selectedEvent.id}`} >
                                <h2>{selectedEvent.eventName}</h2>
                            </Link>
                        </EventNameLink>
                        <p>
                            <b>Location:</b>
                            {selectedEvent.eventLocation && selectedEvent.eventLocation}
                        </p>
                        {eventDate && eventTime && (
                            <p>
                                <b>Date:</b>
                                {eventDate}, {eventTime}
                            </p>
                        )}
                        <p>
                            <b>Contact:</b>
                            {selectedEvent.eventContactPhone && selectedEvent.eventContactPhone}
                        </p>
                        <p>
                            <b>Email:</b>
                            {selectedEvent.eventContactEmail && selectedEvent.eventContactEmail}
                        </p>
                        <p>
                            <b>Description:</b>
                            {selectedEvent.eventContent && selectedEvent.eventContent.slice(0, 50)}
                            <Readmore>
                                <Link href={`/events/${selectedEvent.id}`}>
                                    ...Read More
                                </Link>
                            </Readmore>
                        </p>

                        <GetDirectionGreenBtn address={selectedEvent.eventLocation} onMap={true} />
                    </div>

                </Popup>

            )
            }

        </div >
    )
}

