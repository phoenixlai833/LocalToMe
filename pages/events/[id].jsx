import SingleEvent from "../../components/SingleEvent";
import { getEvent } from "../../server/database";

export default function Event({ event }) {
    return (
        <div>
            <SingleEvent event={event} />
        </div >
    )
}

export async function getServerSideProps({ params }) {
    const req = await getEvent(params.id);
    const event = JSON.parse(JSON.stringify(req));
    // console.log(event)
    return {
        props: { event },
    }
}

