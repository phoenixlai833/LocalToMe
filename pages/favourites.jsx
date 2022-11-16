import styled from "styled-components";
import NavBar from '../components/Organisms/NavBar';
import { useState } from "react";
import Search from '../components/Molecules/Search';
import Tabs from '../components/Organisms/Tabs';
import FavCard from '../components/Templates/FavCard';
import { getUser, getUsers } from "../server/database";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from './api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import postFavorite from "../utils/postFavorite";

const FavorPage = styled.div`
    display: flex;
    flex-direction: column;
background-color: #CDECC2;
height: 100vh;
width: 100vw;
margin-bottom: 5%;
`

const Text = styled.h1`

margin: auto;
color: #108928;
justify-content: center;
align-self: center;

`


export default function Favorites({ user }) {

    if (user.favorite.event.length > 0 || user.favorite.location.length > 0) {
        const [userFavorites, setUserFavorites] = useState(user.favorite);

        const handleUnfavorite = (type, itemId) => {
            postFavorite(true, type, user.id, itemId).then(() => {
                // const newUserFavorites = userFavorites;
                const newUserFavorites = { ...userFavorites };
                newUserFavorites[type] = userFavorites[type].filter((item) => item.id !== itemId)
                console.log('here', userFavorites, '||', newUserFavorites)
                setUserFavorites(newUserFavorites);
            })
        }
        const eventList = userFavorites.event.map((singleEvent) => (
            <FavCard key={singleEvent.id} id={singleEvent.id} type="event" href={`/events/${singleEvent.id}`} img={singleEvent.eventImage} txt="Event" title={singleEvent.eventName} location={singleEvent.eventLocation} onUnfavorite={handleUnfavorite} backgroundColor="#FFB800" txtColor="#000000" />
        ))

        const locationList = userFavorites.location.map((singleLocation) => (
            <FavCard key={singleLocation.id} id={singleLocation.id} type="location" href={`/foodBank/${singleLocation.id}`} img={singleLocation.foodBank_Image} txt="Food Bank" title={singleLocation.program_name} location={singleLocation.location_address} onUnfavorite={handleUnfavorite} backgroundColor="#108928" txtColor="#FFFFFF" />
        ))

        const allList = locationList.concat(eventList);



        const [tab, setTab] = useState(0);

        const tabContents = {
            0: { component: allList },
            1: { component: locationList },
            2: { component: eventList },
        };
        const tabList = ["All", "Locations", "Events"];
        const handleChangeTab = (tabId) => {
            setTab(tabId)
        };

        return (
            <>
                <Search />
                <Tabs tabId={tab} onChangeTab={handleChangeTab} tabList={tabList} />
                <FavorPage>

                    {tabContents[tab].component}
                    <NavBar value={3} />
                </FavorPage>

            </>
        )
    } else {
        return (
            <>

                <FavorPage>
                    <Text>There are no favorites yet</Text>
                    <NavBar value={3} />
                </FavorPage>
            </>
        )

    }
}
export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false,
            },
        }
    } else {

        const users = await getUsers();
        const userId = users.filter((user) => user.email === session.user.email)[0].id;
        const userData = await getUser(userId);
        const user = JSON.parse(JSON.stringify(userData));

        return {
            props: {
                session, user
            },
        }
    }
}