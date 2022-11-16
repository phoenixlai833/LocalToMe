import styled from "styled-components";
import { Colours } from "../../../styles/globals";
import { useState } from "react";
import Link from "next/link";

const ProfileBlock = styled.div`
  display: grid;
  grid-template-columns: 35% 55%;
  gap: 10%;
  align-items: center;
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


export default function ProfileCard({
  past,
  eventId = "8sahmToVxgeRbkqaMIq5",
  src = "https://placekitten.com/500/500",
  lastEdit = new Date(),
  title = "The HangOut",
  bodyText = "Come to The HangOut where you can hang out and enjoy various games. We are giving away hot meals",
}) {
  const [expanded, setExpanded] = useState(false);

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
    </ProfileBlock>
  </div>
}