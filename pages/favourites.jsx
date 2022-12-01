import styled from "styled-components";
import NavBar from "../components/Organisms/NavBar";
import { useEffect, useState } from "react";
import Search from "../components/Molecules/Search";
import Tabs from "../components/Organisms/Tabs";
import FavCard from "../components/Templates/FavCard";
import { getUser, getUsers } from "../server/database";
import { authOptions } from "./api/auth/[...nextauth].js";
import { unstable_getServerSession } from "next-auth/next";
import postFavorite from "../utils/postFavorite";
import TopNavigation from "../components/Organisms/NavBarTop";


const TopBar = styled.div`
  @media (max-width: 767px) {
    display:none;
}

`
const Btmbar = styled.div`
margin-top: 5rem;
    @media (min-width: 768px) {
        display:none;
    }
    `

const FavorPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;


`;

const Text = styled.h1`
  margin: 0 20%;
  color: #108928;
  text-align: center;
`;


const FavBox = styled.div`

@media (min-width: 768px) {
border: 1px solid #ffffff;
margin-top: 9vh;
margin-left: 18vw;
margin-right: 18vw;
min-height: 91vh;
box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
}
`

const SadChou = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 70vh;
`

export default function Favorites({ user }) {
  const [userFavorites, setUserFavorites] = useState();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (!user.favorite) {
      user.favorite = {};
    }
    user.favorite.event = user.favorite.event || [];
    user.favorite.location = user.favorite.location || [];
    setUserFavorites(user.favorite);
    document.body.style.overflow = 'auto';

  }, [user]);

  if (userFavorites) {
    const handleUnfavorite = (type, itemId) => {
      postFavorite(true, type, user.id, itemId).then(() => {
        const newUserFavorites = { ...userFavorites };
        newUserFavorites[type] = userFavorites[type].filter(
          (item) => item.id !== itemId
        );
        setUserFavorites(newUserFavorites);
      });
    };

    const eventList = userFavorites.event.map((singleEvent) => (
      <FavCard
        key={singleEvent.id}
        id={singleEvent.id}
        type="event"
        href={`/events/${singleEvent.id}`}
        img={singleEvent.eventImage}
        txt="Event"
        title={singleEvent.eventName}
        location={singleEvent.eventLocation}
        onUnfavorite={handleUnfavorite}
        backgroundColor="#FFB800"
        txtColor="#000000"
      />
    ));

    const locationList = userFavorites.location.map((singleLocation) => (
      <FavCard
        key={singleLocation.id}
        id={singleLocation.id}
        type="location"
        href={`/foodBank/${singleLocation.id}`}
        img={singleLocation.foodBank_Image}
        txt="Food Bank"
        title={singleLocation.program_name}
        location={singleLocation.location_address}
        onUnfavorite={handleUnfavorite}
        backgroundColor="#108928"
        txtColor="#FFFFFF"
      />
    ));

    const allList = locationList.concat(eventList);

    const tabContents = {
      0: {
        component: allList,
        // alt: <>You have no favorite events or locations.</>,
        alt: <SadChou><img src="../../Mascot/MascotBroken.png" style={{ width: "200px" }} /><br /><Text>Sad... no favorite events or locations.</Text></SadChou>,

      },
      1: { component: locationList, alt: <SadChou><img src="../../Mascot/MascotBroken.png" style={{ width: "200px" }} /><br /><Text>Sad... please like some locations.</Text></SadChou> },
      2: { component: eventList, alt: <SadChou><img src="../../Mascot/MascotBroken.png" style={{ width: "200px" }} /><br /><Text>Sad... please like some events.</Text></SadChou> },
    };
    const tabList = ["All", "Locations", "Events"];
    const handleChangeTab = (tabId) => {
      setTab(tabId);
    };

    return (
      <>
        <TopBar>
          <TopNavigation value={3} />
        </TopBar>
        <FavBox>
          <Search onSearch={() => console.log("nothing")} />
          <Tabs tabId={tab} onChangeTab={handleChangeTab} tabList={tabList} />
          <FavorPage>
            {console.log("hi", tab, tabContents[tab].component)}
            {tabContents[tab].component.length > 0
              ? tabContents[tab].component
              : tabContents[tab].alt}

          </FavorPage>
        </FavBox>
        <Btmbar>
          <NavBar value={3} />
        </Btmbar>

      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  } else {
    const users = await getUsers();
    const userId = users.find((user) => user.email === session.user.email).id;
    const userData = await getUser(userId);
    const user = JSON.parse(JSON.stringify(userData));

    return {
      props: {
        session,
        user,
      },
    };
  }
}
