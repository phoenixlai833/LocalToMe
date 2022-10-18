import SingleEvent from "../../components/SingleEvent";
import { getSingleEvent } from "../../server/database";

export default function Event({singleEvent}) {
    return (
        <div>
            <SingleEvent singleEvent={singleEvent} />
        </div >
    )
}

export async function getServerSideProps(context) {
    const singleEvent = await getSingleEvent(context.params.id);
    return {
        props: { singleEvent },
    }
}