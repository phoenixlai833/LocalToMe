import ShortTextInput from "../ShortTextInput";
import LongTextInput from "../LongTextInput";
import DateInput from "../DateInput";
import DateCalendar from "../DateCalendar";
import TimeInput from "../TimeInput";
import { useState } from "react";
import styled from "styled-components";
import TopBanner from "../TopBanner";
import GeneralGreenBtn from "../GeneralGreenBtn";

const Form = styled.form`
  width: 80vw;
  margin: 5vw 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    width: 100%;
  }
`;

const LayoutTime = styled.div`
display: flex;
margin-bottom: 5%;
`;

const To = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 15%;
margin-left: 5%;
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
    <>
      <TopBanner text={"Plan your Event"} />
      <Form onSubmit={handleSubmit}>
        <b>Basic Information</b>
        <br></br>
        <ShortTextInput
          label="Event Name"
          defaultValue={defaultEvent.eventName}
          onChange={handleChangeEventName}
          required={true}
        />
        <br></br>
        <ShortTextInput
          label="Event Host"
          defaultValue={defaultEvent.eventCreator}
          onChange={handleChangeEventCreator}
          required={true}
        />
        <b style={{ marginTop: "5%" }}>Location of your Event</b>
        <ShortTextInput />
        <b style={{ marginTop: "5%" }}>Date & Time of your Event</b>
        <br></br>
        <LayoutTime>
          <div>
            <DateInput label="Start Date" required={true} />
            <br></br>
            <TimeInput label="Start Time" required={true} />
          </div>
          <To><b>to</b></To>
          <div>
            <DateInput label="End Date" />
            <br></br>
            <TimeInput label="End Time" />
          </div>
        </LayoutTime>
        <DateCalendar />
        <b style={{ marginTop: "5%" }}>Describe your Event</b>
        <br></br>
        <LongTextInput></LongTextInput>
        <b style={{ marginTop: "5%" }}>Select Event Tags</b>
      </Form>
      <div style={{ margin: "0 10%" }} onClick={handleTogglePreview} >
        <GeneralGreenBtn text={"Continue"} />
      </div>
    </>
  );
}
