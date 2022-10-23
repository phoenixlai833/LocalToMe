import SingleEvent from "../../components/SingleEvent";
import { getEvent } from "../../server/database";
import { useState } from "react";
import NavBar from '../../components/NavBar';

export default function Event({ event }) {
    const [navValue, setNavValue] = useState(1);

    return (
        <div>
            <SingleEvent event={event} />
            <NavBar value={navValue} onChange={(event, newValue) => {
                setNavValue(newValue);
            }} />
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

