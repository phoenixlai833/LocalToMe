import EventsList from "../../components/EventsList";
import { getEvents } from "../../server/database";
import NavBar from '../../components/NavBar'
import { FlexBox, Container, Wrapper, Colour } from '../../styles/globals'
import { useState } from "react";
import FloatingActionButton from "../../components/FloatButton";

export default function Events({ eventList }) {

    return (
        <div>
            <EventsList eventList={eventList} />
            <FloatingActionButton/>
            <NavBar value={1}/>
        </div>
    )
}

export async function getServerSideProps() {
    const req = await getEvents();
    const eventList = JSON.parse(JSON.stringify(req));
    return {
        props: { eventList },
    }
}

