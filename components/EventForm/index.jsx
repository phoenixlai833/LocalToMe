import ShortTextInput from "../ShortTextInput";
import LongTextInput from "../LongTextInput";
import DateInput from "../DateInput";
import DateCalendar from "../DateCalendar";
import TimeInput from "../TimeInput";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 80vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    // margin: 0;
  }

  * {
    width: 100%;
  }
`;

export default function EventForm({ onSubmit, defaultEvent = {} }) {
  const [event, setEvent] = useState(defaultEvent);

  function handleSubmit() {
    onSubmit(eventDetails);
  }

  function handleChangeEventName(eventName) {
    setEvent({ ...event, eventName });
  }

  function handleChangeEventCreator(eventCreator) {
    setEvent({ ...event, eventCreator });
  }

  function handleChangeEventStartDate(eventStartDate) {
    setEvent({ ...event, eventStartDate });
  }

  function handleChangeEventStartTime(eventStartTime) {
    setEvent({ ...event, eventStartTime });
  }

  function handleChangeEventEndDate(eventEndDate) {
    setEvent({ ...event, eventEndDate });
  }

  function handleChangeEventEndTime(eventEndTime) {
    setEvent({ ...event, eventEndTime });
  }

  function handleChangeEventDescription(eventDescription) {
    setEvent({ ...event, eventDescription });
  }

  function handleChangeEventImage(eventImage) {
    setEvent({ ...event, eventImage });
  }

  function handleChangeEventTags(eventTags) {
    setEvent({ ...event, eventTags });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p>Basic Information</p>
      <ShortTextInput
        label="Event Name"
        defaultValue={defaultEvent.eventName}
        onChange={handleChangeEventName}
        required={true}
      />
      <ShortTextInput
        label="Event Host"
        defaultValue={defaultEvent.eventCreator}
        onChange={handleChangeEventCreator}
        required={true}
      />
      <p>Location of your Event</p>
      <ShortTextInput />
      <p>Date & Time of your Event</p>
      <DateInput label="Start Date" required={true} />
      <TimeInput label="Start Time" required={true} />
      <DateInput label="End Date" />
      <TimeInput label="End Time" />
      <DateCalendar />
      <p>Describe your Event</p>
      <LongTextInput></LongTextInput>
      <p>Select Event Tags</p>
    </Form>
  );
}
