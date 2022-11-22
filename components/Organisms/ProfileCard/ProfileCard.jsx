import styled from "styled-components";
import { Colours } from "../../../styles/globals";
import { useState } from "react";
import Link from "next/link";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import DeletePopup from "../DeletePopup";
// import { deleteEvent } from "../../server/database";

const ProfileBlock = styled.div`
  display: grid;
  grid-template-columns: 40% 45% 5%;
  gap: 5%;
  align-items: start;
  width: 90%;
  margin: 30px;
`

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
`

const InfoCont = styled.div`
height: 200px;
`

const TopInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgcolor || '#FFB800'};
  color: ${props => props.txtcolor || '#535353'};
  border-radius: 10px;
  width: 155px;
  height: 25px;
`

const Title = styled.a`
  :hover {
    color: rgb(49, 143, 237);
  text-decoration: underline;
}
`
const ReadMore = styled.span`
  color: ${Colours.primary}
`
const BodyInfo = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
`

const InfoDiv = styled.div`
   display:flex;
   flex-direction:column;
   width:100%;
`

const PosAbsoCard = styled.div`
display: ${(props) => props.show};
position: absolute;
right: 100%;
width: 125px;
height: 100px;
border-radius: 15px;
background-color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 30%;
flex-direction: column;
justify-content: space-around;
@media (min-width: 768px) {
  width: 150px;
  padding: 30% 0 30% 50%;
}
`

export default function ProfileCard({
  past,
  eventId = "8sahmToVxgeRbkqaMIq5",
  src = "https://placekitten.com/500/500",
  lastEdit = new Date(),
  title = "The HangOut",
  bodyText = "Come to The HangOut where you can hang out and enjoy various games. We are giving away hot meals",
  onShare,
  onDelete
}) {
  const [expanded, setExpanded] = useState(false);
  const [display, setDisplay] = useState("none");

  const onExpand = () => { setExpanded(true) };
  const onClose = () => { setExpanded(false) };
  const month = new Date(lastEdit).toLocaleString("default", { dateStyle: "long" }).split(" ")[0].split("").splice(0, 3)
  const day = new Date(lastEdit).toLocaleString("default", { dateStyle: "long" }).split(" ")[1].split("").splice(0, 2)

  return <div>
    <ProfileBlock>
      <Image src={src} />
      <InfoCont>
        {past ? <TopInfo bgcolor='#BCBCBC'>This event is over</TopInfo> : <TopInfo bgcolor='none'>Last edited on {month} {day}th</TopInfo>}
        <Link href={`/events/${eventId}`}>
          <Title>
            <h3>{title}</h3>
          </Title>
        </Link>
        {expanded === false && <InfoDiv>
          <BodyInfo expanded={expanded}><p>{bodyText.substring(0, 100) + "..."}<ReadMore expanded={expanded} onClick={onExpand}>Read More </ReadMore></p></BodyInfo></InfoDiv>}
        {expanded === true && <InfoDiv>
          <BodyInfo expanded={expanded}>{bodyText}</BodyInfo>
          <ReadMore expanded={expanded} onClick={onClose}>Read Less</ReadMore>
        </InfoDiv>}
      </InfoCont>
      <div style={{ position: "relative" }}>
        <PosAbsoCard show={display}>
          <Link href={`/events/edit/${eventId}`}>
            <div style={{ display: "flex" }}>
              <img src="/Edit-icon.svg" alt="Edit Event" />
              &nbsp;
              <p style={{ margin: 0 }}>Edit Event</p>
            </div>
          </Link>
          <div style={{ display: "flex" }} onClick={() => onShare(eventId)}>
            <img src="/Share-icon.svg" alt="Share Event" />
            &nbsp;
            <p style={{ margin: 0 }}>Share Event</p>
          </div>
          <div style={{ display: "flex" }} onClick={() => onDelete(eventId)}>
            <img src="/Delete-icon.svg" alt="Delete Event" />
            &nbsp;
            <p style={{ color: "red", margin: 0 }} >
              Delete Event
            </p>
          </div>
        </PosAbsoCard>
        <MoreVertIcon sx={{ width: 25, height: 25 }} onClick={() => display == "none" ? setDisplay("flex") : setDisplay("none")} />
      </div>
    </ProfileBlock>
  </div >
}