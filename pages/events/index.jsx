import EventsList from "../../components/Organisms/EventsList";
import { getEvents } from "../../server/database";
import { FlexBox, Container, Wrapper, Colour } from '../../styles/globals'
import { useState } from "react";
import NavBar from '../../components/Organisms/NavBar'
import FloatingActionButton from "../../components/Atoms/FloatButton";

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

