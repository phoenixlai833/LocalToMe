import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import Link from "next/link";
import GetDirectionGreenBtn from "../GetDirectionGreenBtn";
import styled from "styled-components";

const EventNameLink = styled.p`
color: #108928;
:hover {
    color: black;
    text - decoration: underline;
}
`

const Readmore = styled.span`
color: #108928;
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

const PopupCont = styled.div`
padding: 2%;
`

const TopSec = styled.div`
background-color: #CDECC2;
background-image: url("../../Mascot/mascotEvent.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
// width: 100%;
height: 100px;
display: flex; 
`

export default function EventMapPin({ events }) {
    const [selectedEvent, setSelectedEvent] = useState(null);

    let eventDateTime;

    if (selectedEvent) {
        const dtStart = new Date(selectedEvent.start)
        const dtEnd = new Date(selectedEvent.start)
        const startDay = dtStart.toLocaleString("default", { dateStyle: "long" })
        const startTime = dtStart.toLocaleString("default", { timeStyle: "short" })
        const endDay = dtEnd.toLocaleString("default", { dateStyle: "long" })
        const endTime = dtEnd.toLocaleString("default", { timeStyle: "short" })
        const sDay = startDay.split(" ")[1].split("").splice(0, 2).join("");
        const sMonth = startDay.split(" ")[0];
        const eDay = endDay.split(" ")[1].split("").splice(0, 2).join("");
        const eMonth = endDay.split(" ")[0];
        // let eventDateTime;
        if (startDay == endDay) {
            startTime == endTime ? eventDateTime = `${sMonth} ${sDay}, ${startTime}` : eventTime = `${sMonth} ${sDay}, ${startTime} - ${endTime}`;
        } else {
            eventDateTime = `${sMonth} ${sDay}, ${startTime} - ${eMonth} ${eDay}, ${endTime}`
        }
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

    console.log(eventDateTime)

    return (
        <div>

            {events.map((event) => {
                if (event.latitude && event.longitude) {
                    return (
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
                }
            }
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
                    <PopupCont >
                        <TopSec></TopSec>
                        <EventNameLink>
                            <Link href={`/events/${selectedEvent.id}`} >
                                <h2>{selectedEvent.eventName}</h2>
                            </Link>
                        </EventNameLink>
                        {selectedEvent.eventLocation &&
                            <p>
                                <b>Location</b>
                                <br />
                                {selectedEvent.eventLocation}
                            </p>}
                        {eventDateTime &&
                            <p>
                                <b>Date</b>
                                <br />
                                {eventDateTime}
                            </p>
                        }
                        {selectedEvent.eventContent &&
                            <p>
                                <b>Description:</b>
                                {selectedEvent.eventContent.slice(0, 50)}
                                <Readmore>
                                    <Link href={`/events/${selectedEvent.id}`}>
                                        ...Read More
                                    </Link>
                                </Readmore>
                            </p>}

                        <GetDirectionGreenBtn address={selectedEvent.eventLocation} onMap={true} />
                    </PopupCont>

                </Popup>

            )
            }

        </div >
    )
}

