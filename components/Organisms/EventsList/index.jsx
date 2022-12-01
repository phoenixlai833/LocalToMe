import React from "react";
import Link from "next/link";
// import { useHits, InstantSearch } from "react-instantsearch-hooks-web";
import styled from "styled-components";

const EventBlock = styled.div`
  display: grid;
  grid-template-columns: 35% 55%;
  gap: 10%;
  align-items: center;
  width: 90%;
  margin: 25px;
  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

const EventDateAndImage = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
`;

const EventImage = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
`;

const EventDate = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  width: 42px;
  height: 42px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  // left: 4%;
  // margin: 3%;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 22px;
    // left: 1%;
    margin: 2%;
  }
  @media (max-width: 768px) {
    left: 4%;
    margin: 3%;
  }
`;

const EventInfo = styled.div`
  height: 200px;
  padding-right: 2vw;
`;

const EventTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb800;
  border-radius: 10px;
  width: 150px;
  height: 25px;
`;

const EventTitle = styled.a`
  cursor: pointer;
  :hover {
    color: rgb(49, 143, 237);
    // text-decoration: underline;
  }
`;

const Readmore = styled.span`
  color: rgb(49, 143, 237);
  &:hover {
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.15));
  }
`;
const ExtraSpace = styled.div`
  height: 70px;
`;

export default function EventsList({ eventList }) {
  eventList = eventList
    .filter((e) => new Date(e.end) >= new Date())
    .sort((a, b) => new Date(a.start) - new Date(b.start));
  return (
    <div>
      {eventList.map((event) => (
        <EventBlock key={event.id}>
          <EventDateAndImage>
            <EventImage src={event.eventImage} alt={event.eventName} />
            <EventDate>
              {console.log(event.id, event.start)}
              {new Date(event.start).toLocaleString("default", {
                month: "short",
              })}{" "}
              <br />
              {new Date(event.start).toLocaleString("default", {
                day: "numeric",
              })}
            </EventDate>
          </EventDateAndImage>
          <EventInfo>
            <EventTime>
              {new Date(event.start).toLocaleString("default", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
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
                  <a
                    style={{
                      color: "#108928",
                    }}
                  >
                    ...Read More
                  </a>
                </Link>
              </Readmore>
            </p>
          </EventInfo>
        </EventBlock>
      ))}
      {/* <ExtraSpace></ExtraSpace> */}
    </div>
  );
}
