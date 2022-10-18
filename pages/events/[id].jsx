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
    const data = JSON.parse(JSON.stringify(req));
    const event = data._document.data.value.mapValue.fields;
    console.log("dddddsdwdwdw", data._document.data.value.mapValue.fields);
    return {
        props: { event },
    }
}

