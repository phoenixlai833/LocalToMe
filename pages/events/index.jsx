import EventsList from "../../components/EventsList";
import { getEventsList } from "../../server/database";

export default function Events({eventsListData}) {

    return (
        <div>
            <EventsList eventsListData={eventsListData}/>
        </div>
    )
}

export async function getServerSideProps() {
    const eventsListData = await getEventsList();
    return {
        props: { eventsListData },
    }
}

