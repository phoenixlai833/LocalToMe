import { useEffect, useState } from "react";
import Event from "./Event";
import { getEvents } from '../server/database';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const eventList = await getEvents();
      setEvents(eventList);
    };
    fetchEvent();
  }, []);

  return (
    <ul>
      {events.map((e) => (
        <li key={e.eventName}>
          <Event
            eventId={e.id}
            eventName={e.eventName}
            eventImage={e.eventImage}
          />
        </li>
      ))}
    </ul>
  );
}
