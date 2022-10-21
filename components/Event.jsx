export default function Event({ eventId, eventName, eventImage }) {

  return (
    <div>
      <img width="100" height="100" src={eventImage} alt={eventName} />
      <p>{eventName}</p>
    </div>
  );
}
