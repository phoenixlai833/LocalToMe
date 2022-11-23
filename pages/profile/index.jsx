import ProfileSection from "../../components/Organisms/ProfileBanner"
import NavBar from '../../components/Organisms/NavBar';
import styled from "styled-components";
import { useState } from "react";
import FloatingActionButton from '../../components/Atoms/FloatButton';
import AvatarPopup from "../../components/Organisms/AvatarPopup";
import ProfileCard from "../../components/Organisms/ProfileCard/ProfileCard";
import SharePost from "../../components/Molecules/SharePost";
import DeletePopup from "../../components/Organisms/DeletePopup";
import { getEventsWithUser } from "../../server/database";
import { useSession } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import axios from "axios";
import TopNavigation from "../../components/Organisms/NavBarTop";

export const MainCont = styled.div`
@media (min-width: 767px) {
display:flex;
justify-content: center;
// align-items: flex-start;
flex-direction: column;
// width: 100vw;
// height: 100vh;
}
`

// export const WhiteCont = styled.div`
// @media (min-width: 768px) {
//     width: 1000px;
//    margin-top: 64px;
//     height: 150vh;
//    box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
// }
// `
const ProfileTab = styled.div`
display:flex;
height: 170px;
width: 100%;
justify-content: flex-end;
align-items: flex-end;
@media (min-width: 768px) {
    height: 130px;
}
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
  @media (min-width: 768px) {
    font-size: 20px;
}
`;

const TopBar = styled.div`
  @media (max-width: 768px) {
    display:none;
}
`

const NewTab = styled.p`
  cursor: pointer;
  text-decoration: underline
    ${(props) => (props.tabId == props.id ? "#FFB800" : "transparent")};
  text-decoration-thickness: 4px;
  text-underline-offset: 12px;
  font-size: 18px;
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 20px;
}
`;

const PosAbs = styled.div`
display:${(props) => props.show};
position: absolute;
left: 20%;
top: 7%;
z-index: 2;
@media (min-width: 768px) {
left: 30vw;
top: 15%;
}
`

const PosDeleteConfirm = styled.div`
position: absolute;
left: 20vw;
top: 40vh;
z-index: 4;
`

const ShareBox = styled.div`
position: absolute;
left: 20vw;
top: 30vh;
z-index: 3;
@media (min-width: 768px) {
    left: 35vw;
}
`

const DesktopBox = styled.div`
@media (min-width: 768px) {
margin-top:8vh;
margin-left: 18vw;
margin-right: 18vw;
min-height: 92vh;
box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
}
`

export default function Profile({ sortedEvents }) {
    const { data: session } = useSession();
    const [tab, setTab] = useState(0);
    const [display, setDisplay] = useState("none");
    const [eventId, setEventId] = useState("");
    const [showDelete, setShowDelete] = useState(false);
    const [shareUrl, setShareUrl] = useState('');
    const [share, setShare] = useState(false);
    const [copied, setCopied] = useState(false);
    const [avatar, setAvatar] = useState(session.user.image)

    const handleChangeTab = (e) => {
        if (e.target.id) {
            setTab(+e.target.id);
        }
    };

    function handleDelete(eventId) {
        console.log("delete", eventId)
        setEventId(eventId)
        setShowDelete(true)
        return;
    }

    const handleOnCopy = () => {
        setCopied(true);
    };

    const handleCloseShare = () => {
        setShare(false);
        setCopied(false);
    }

    function handleShare(eventId) {
        // console.log("share", eventId)
        setShareUrl(`${window.location.origin}/events/${eventId}`);
        setShare(true);
    }

    function handleSubmitAvatar(avatarImgPath) {
        console.log("this is the image path", avatarImgPath);
        setAvatar(avatarImgPath);
        setDisplay("none");
        const putUser = {
            image: avatarImgPath
        }
        console.log(putUser)
        axios.put(`/api/users/${session.user.id}`, putUser).then((res) => {
            console.log("edited successfully", res.data);
        });
    }

    const recentEvents = sortedEvents.filter((e) => new Date(e.end) >= new Date())
        .map((e) => {
            return < ProfileCard key={e.id} eventId={e.id} src={e.eventImage} lastEdit={e.eventUpdateDate} title={e.eventName} bodyText={e.eventContent} onDelete={handleDelete} onShare={handleShare} />
        })

    const pastEvents = sortedEvents.filter((e) => new Date(e.end) < new Date())
        .map((e) => {
            return < ProfileCard key={e.id} past={true} eventId={e.id} src={e.eventImage} lastEdit={e.eventUpdateDate} title={e.eventName} bodyText={e.eventContent} onDelete={handleDelete} onShare={handleShare} />
        })

    const tabContents = {
        0: { component: recentEvents },
        1: { component: pastEvents },
    };

    if (session) {
        return (
            <>
                <TopBar>
                    <TopNavigation value={4} />
                </TopBar>
                < PosAbs show={display}>
                    <AvatarPopup currentUrl={avatar} submitAvatar={handleSubmitAvatar} handleClick={() => setDisplay("none")} imgPath={session.user.image} name={session.user.name}></AvatarPopup>
                </PosAbs>
                <PosDeleteConfirm >
                    <DeletePopup showDelete={showDelete} eventId={eventId} hidePopup={() => setShowDelete(false)}></DeletePopup>
                </PosDeleteConfirm>
                <ShareBox>
                    <SharePost shareUrl={shareUrl} share={share} closeShare={handleCloseShare} copied={copied} changeOnCopy={handleOnCopy} />
                </ShareBox>
                <DesktopBox>
                    <MainCont>
                        <ProfileSection src={avatar} name={session.user.name} email={session.user.email} handleClick={() => setDisplay("static")} />
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
                        <div style={{ marginBottom: "10vh" }}></div>
                    </MainCont>
                </DesktopBox>
                <div class="smallDisplayNone">
                    <NavBar value={4} />
                </div>
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

    const eventsData = await getEventsWithUser(session.user.email);
    const events = JSON.parse(JSON.stringify(eventsData));
    const sortedEvents = events.sort((a, b) => new Date(a.start) - new Date(b.start));

    // console.log(events)

    return {
        props: {
            session, sortedEvents
        },
    }
}


{/* <Tabs tabId={tab} tabList={tabList} onChangeTab={handleChangeTab} /> */ }