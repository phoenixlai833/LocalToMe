import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getEvents } from "../server/database";
// import { useAuthState } from "react-firebase-hooks/auth"; // to check if user is signed in
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import NavbarIcons from "../components/NavBar/NavIcons";
import FloatingActionButton from "../components/FloatButton";
import { Container, FlexBox, Wrapper } from "../styles/globals";
import CarouselCard from "../components/CarouselCard";
import NewsCard from "../components/NewsCard";
import styled from "styled-components";

const SearchBar = styled.div`
height: 5vh;
width: 30vw;
background-color: lightgray;
border-radius: 10px;
display: flex;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 767px) {
    width: 90vw;
}
`

const ImageContainer = styled.div`
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
width: 35vw;
height: 25vh;
// margin-right: 5%;
@media (max-width: 767px) {
    width: 90vw;
    height: 25vh;
}
`;

const FlexWords = styled.div`
display; flex;
width: 90vw;
// justfiy-content: space-between;
`;

const UpcomingEventsContainer = styled.div`
width: 95vw;
overflow: hidden;
`

const EventListContainer = styled.div`
white-space: nowrap;
overflow-x: scroll;
overflow-y: hidden;
-webkit-overflow-scrolling: touch;
&::-webkit-scrollbar {
  display: none;
}
`

const FirstSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 767px) {
  flex-direction: column;
}
`

// this should be homepage, just using for testing right now
// maybe move some of this to map
export default function Home({ events }) {
  // const [navValue, setNavValue] = useState(0);

  // const foodBanksComponent = foodBanksList.map((foodbank) => (
  //   // <li key={fb.id}>
  //   <li key="test">
  //     <p>{foodbank.programName}</p>
  //   </li>
  // ));

  const UpcomingEventCards = events.map((e) => {
    const time = e.eventDate.seconds
    const date = new Date(time * 1000)
    const eventTime = date.toLocaleString().split(',')[1]
    const dateOfEvent = date.toLocaleString("default", { month: "long", day: "2-digit", year: "numeric" })
    const dateAndTime = dateOfEvent + "," + eventTime
    const day = dateOfEvent.split(" ")[1].split("").splice(0, 2).join("");
    const month = dateOfEvent.split(" ")[0].split("").splice(0, 3).join("").toUpperCase();
    return (
      <li key={e.id} style={{ marginRight: "5%" }}>
        <a href={`/events/${e.id}`}>
          <CarouselCard event={e.eventName} time={eventTime} src={e.eventImage} month={month} day={day} />
        </a>
      </li>
    )
  })

  return (
    <div >
      <Head>
        <title>LocalToMe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ padding: "10% 5% 10% 5%" }}>
        <FirstSection>
          <div>
            <h1>Goodmorning,</h1>
            <h1 style={{ color: "green", lineHeight: "0", marginBottom: "5%" }}>Slayerina</h1>
            <SearchBar>Search</SearchBar>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5%" }}>
              <p>Find help near you</p>
              <Link href={`/map`}>
                <p style={{ color: "green" }}>view all</p>
              </Link>
            </div>
            <Link key="link-to-map" href="/map">
              <ImageContainer src={"/FoodBankMap.png"} ></ImageContainer>
            </Link>
          </div>
        </FirstSection>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5%" }}>
          <p>Upcoming Events</p>
          <Link href={`/community`}>
            <p style={{ color: "green" }}>view all</p>
          </Link>
        </div>

        <UpcomingEventsContainer>
          <EventListContainer>
            <ul style={{ display: "flex", listStyle: "none", padding: "0" }}>
              {UpcomingEventCards}
            </ul>
          </EventListContainer>
        </UpcomingEventsContainer>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5%" }}>
          <p>Community News</p>
          <Link href={`/community`}>
            <p style={{ color: "green" }}>view all</p>
          </Link>
        </div>
        <NewsCard />
      </div>

      <FloatingActionButton />
      <NavBar value={0}/>
    </div >
  );
}

export async function getServerSideProps(context) {
  const req = await getEvents();
  const events = JSON.parse(JSON.stringify(req));
  // console.log(events);
  return {
    props: { events },
  }
}
