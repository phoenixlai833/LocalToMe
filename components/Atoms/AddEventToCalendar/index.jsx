import React from "react";
import { useEffect, useState } from "react";
import { atcb_action, atcb_init } from "add-to-calendar-button";
import 'add-to-calendar-button/assets/css/atcb.css';
import styled from 'styled-components';

const Button = styled.img`
background-color: transparent;
border: none;
cursor: pointer;
`

export default function MyComponent({ event }) {

    useEffect(() => { atcb_init() }, []);
    const startDate = new Date(event?.start).toLocaleDateString('ja-JP').replaceAll('/', '-');
    const startTime = new Date(event?.start).toLocaleTimeString('ja-JP', { hour12: false });
    const endDate = event?.end ? new Date(event?.end).toLocaleDateString('ja-JP').replaceAll('/', '-') : startDate;
    const endTime = event?.end ? new Date(event?.end).toLocaleTimeString('ja-JP', { hour12: false }) : startTime;


    const config = {
        name: event.eventName,
        startDate,
        endDate,
        startTime,
        endTime,
        location: event.eventLocation,
        options: ["Apple", "Google", "Yahoo"],
        timeZone: "America/Vancouver",
        trigger: "click",
        iCalFileName: "Reminder-Event",
    };

    const handleOnclick = () => {
        console.log('it ok')
        atcb_action(config);
    }

    return (
        <>
            {/* <Button onClick={handleOnclick}> */}
            <Button src="../calenderIcon.png" alt="calendar icon" onClick={handleOnclick} />
            {/* </Button> */}
        </>
    );
}
