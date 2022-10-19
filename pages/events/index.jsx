import EventsList from "../../components/EventsList";
import { getEvents } from "../../server/database";

export default function Events({ eventList }) {

    return (
        <div>
            <EventsList eventList={eventList} />
        </div>
    )
}

export async function getServerSideProps() {
    const req = await getEvents();
    const eventList = JSON.parse(JSON.stringify(req));
    console.log("ssss",eventList);
    return {
        props: { eventList },
    }
}

