import React from "react";
import Link from "next/link";
// import { useHits, InstantSearch } from "react-instantsearch-hooks-web";
import styled from "styled-components";


const RecentEvent = styled.div`
  font-size:20px;
  margin: 20px;
  font-weight: 600;
`
const EventBlock = styled.div`
  display: grid;
  grid-template-columns: 35% 55%;
  gap: 10%;
  align-items: center;
  width: 90%;
  margin: 20px;
`

const EventDateAndIamge = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
`

const EventImage = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
`

const EventDate = styled.div`
  display:flex;
  position: absolute;
  background-color: white;
  width: 42px;
  height: 42px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  left: 4%;
  margin: 3%;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px) {
      width: 60px;
      height: 60px;
      font-size: 22px;
      left: 1%;
      margin: 2%;
  }
`

const EventInfo = styled.div`
height: 200px;
`

const EventTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFB800;
  border-radius: 10px;
  width: 150px;
  height: 25px;
`

const EventTitle = styled.a`
  :hover {
    color: rgb(49, 143, 237);
  text-decoration: underline;
}
`

const Readmore = styled.span`
  color: rgb(49, 143, 237);
`
const ExtraSpace = styled.div`
  height: 70px;
`

export default function EventsList({ eventList }) {
  return (
    <div>
      <RecentEvent>Recent Events</RecentEvent>

      {eventList.map((event) => (
        <EventBlock key={event.id} >
          <EventDateAndIamge>
            <EventImage
              src={event.eventImage}
              alt={event.eventName}

            />
            <EventDate>
              {new Date(event.eventDate.seconds * 1000).toLocaleString(
                "default",
                { month: "short" }
              )}{" "}
              <br />
              {String(
                new Date(event.eventDate.seconds * 1000).getDate()
              ).padStart(2, "0")}
            </EventDate>
          </EventDateAndIamge>
          <EventInfo>
            <EventTime>
              {
                new Date(event.eventDate.seconds * 1000)
                  .toLocaleString()
                  .split(",")[1]
              }
            </EventTime>
            <Link href={`/events/${event.id}`}>
              <EventTitle>
                <h3>{event.eventName}</h3>
              </EventTitle>
            </Link>
            <p>
              {`${event.eventContent.slice(0, 80)}`}
              <Readmore>
                <Link href={`/events/${event.id}`}>
                  <a style={{
                    color: '#108928',
                  }}>
                    ...Read More
                  </a>
                </Link>
              </Readmore>
            </p>
          </EventInfo>
        </EventBlock>
      ))}
      <ExtraSpace></ExtraSpace>
    </div>
  );
}
