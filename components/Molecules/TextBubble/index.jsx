import styled from "styled-components";
import { Colours } from "../../../styles/globals";
import Icon from "@mui/material/Icon";

const BubbleCont = styled.div`
   background:${Colours.background};
   display:flex;
   padding:12px 20px;
   border-radius:15px;
   align-items:left;
   box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
   max-width: 85vw;
   // min-width:85vw;
   flex-direction:column;
   margin: 15px auto;
   @media (min-width: 768px) {
      max-width: 55vw;
   }
`

const BubbleDiv = styled.div`
   display:flex;
   align-items:center;
   gap:10px;
`
const BubbleIcon = styled(Icon)`
   color:${Colours.primary}
`
export default function Bubble({
   text = [],
   icon = []
}) {
   return <BubbleCont>
      {text.map((text, index) => {
         const icons = icon[index]
         return <BubbleDiv key={index}>
            <BubbleIcon>{icons}</BubbleIcon>
            <p>{text}</p>
         </BubbleDiv>
      }
      )}
   </BubbleCont>
}