import ProfileSection from "../../components/Organisms/ProfileBanner"
import NavBar from '../../components/Organisms/NavBar';
import styled from "styled-components";
import { useState } from "react";
import FloatingActionButton from '../../components/Atoms/FloatButton';
import AvatarPopup from "../../components/Organisms/AvatarPopup";
// import Tabs from "../../components/Organisms/Tabs/tabs";
import ProfileCard from "../../components/Organisms/ProfileCard/ProfileCard";
import { getEventsWithUser } from "../../server/database";
import { useSession } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";

const ProfileTab = styled.div`
display:flex;
height: 170px;
width: 100%
justify-content: flex-end;
align-items: flex-end;
`

const Tab = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  border-bottom: 1.5px solid #d9d9d9;
`;

const EventTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
`;

const NewTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
`;

const PosAbs = styled.div`
display:${(props) => props.show};
position: absolute;
left: 20%;
top: 7%;
z-index: 2;
`

export default function Profile({ events }) {
    const { data: session } = useSession();
    const [tab, setTab] = useState(0);
    const [display, setdisplay] = useState("none");

    const recentEvents = events.filter((e) => new Date(e.end) > new Date())
        .map((e) => {
            return < ProfileCard eventId={e.id} src={e.eventImage} lastEdit={e.eventUpdateDate} title={e.eventName} bodyText={e.eventContent} />
        })

    const pastEvents = events.filter((e) => new Date(e.end) <= new Date())
        .map((e) => {
            return < ProfileCard past={true} eventId={e.id} src={e.eventImage} lastEdit={e.eventUpdateDate} title={e.eventName} bodyText={e.eventContent} />
        })

    const tabContents = {
        0: { component: recentEvents },
        1: { component: pastEvents },
    };

    const handleChangeTab = (e) => {
        if (e.target.id) {
            setTab(+e.target.id);
        }
    };

    function showMascots() {
        setdisplay("static");
        return;
    }

    function hideMascots() {
        setdisplay("none");
    }

    if (session) {
        return (
            <>
                < PosAbs show={display}>
                    <AvatarPopup handleClick={hideMascots} imgPath={session.user.image} name={session.user.name}></AvatarPopup>
                </PosAbs>
                <ProfileSection src={session.user.image} name={session.user.name} email={session.user.email} handleClick={showMascots} />
                <ProfileTab>
                    <Tab onClick={handleChangeTab}>
                        <EventTab id="0" tabId={tab}>
                            Recent Posts
                        </EventTab>
                        <NewTab id="1" tabId={tab}>
                            Past Posts
                        </NewTab>
                    </Tab>
                </ProfileTab>
                {tabContents[tab].component}
                <NavBar value={4} />
                <FloatingActionButton />

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
    }

    const events = await getEventsWithUser(session.user.email);
    // console.log(events)

    return {
        props: {
            session, events
        },
    }
}