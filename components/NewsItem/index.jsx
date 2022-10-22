import styled from "styled-components";
import { Colours } from "../../styles/globals";
import Icon from "@mui/material/Icon";
import Filter from "../Filters";
import { Avatar } from "@mui/material";

const NewsCont = styled.div`
   background:${Colours.background};
   display:flex;
   width:90vw;
   gap:10px;
`

const Filters = styled.div`
   display:flex;
   gap:5px;
`
const TextDiv = styled.div`
   display:flex;
   flex-direction:column;
   line-height:0;
   width:100%;
`
// Placeholder text 
const Text = styled.p`
   line-height:normal;

`
const ImageContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background-image: url(${props => props.src});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   border-radius: 15px;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   min-height:25vh;
`;
const LeftCont = styled.div`
   display:flex;
   flex-direction:column;
   gap:10px;
`
const InfoDiv = styled.div`
   display:flex;
   flex-direction:column;
   width:100%;
`
const Divider = styled.div`
   width:2px;
   background-color:${Colours.primary};
   display:flex;
   height:90%;
   align-self:center;
`
const ReadMore = styled.div`
   display:flex;
   justify-content:flex-end;
   align-items:center;
   color:${Colours.primary}
`
export default function News({
   tag = "event",
   organizer = "Organizer",
   avatar = "",
   date = "Today, 3:00PM",
   info = "Lorem ipsum dolor sit amet, conse ctetur adi piscing elit. Fringilla risus est sociis bibendum. Nunc...",
   src = "http://placekitten.com/500/500",
   expanded = false,
   onExpand = () => { },
   onClose = () => { },

}) {
   return <NewsCont>
      <LeftCont>
         <Avatar src={avatar} />
         <Divider />
      </LeftCont>
      <TextDiv>
         <InfoDiv>
            <h2>{organizer}</h2>
            <p>{date}</p>
         </InfoDiv>
         <Filters>
            <Filter tag={tag} active={true} icon={false}></Filter>
            <Filter tag={tag} active={true} icon={false}></Filter>
            <Filter tag={tag} active={true} icon={false}></Filter>
         </Filters>
         {expanded === false && <InfoDiv>
            <Text expanded={expanded}>{info.substring(0, 100) + "..."}</Text> <ReadMore expanded={expanded} onClick={onExpand}>Read More <Icon>expand_more</Icon></ReadMore></InfoDiv>}
         {expanded === true && <InfoDiv>
            <Text expanded={expanded}>{info}</Text>
            <ReadMore expanded={expanded} onClick={onClose}>Read Less <Icon>expand_less</Icon></ReadMore>
         </InfoDiv>}

         <ImageContainer src={src}></ImageContainer>
      </TextDiv>
   </NewsCont>
}