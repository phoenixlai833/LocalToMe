import styled from "styled-components";
import { Colours } from "../../styles/globals";
import Icon from "@mui/material/Icon";

const BubbleCont = styled.div`
background:${Colours.primary};
display:flex;
padding:10px;
border-radius:15px;
align-items:center;
`
export default function Bubble({
   text = "Bubble Text"
}) {
   return <BubbleCont>
      <Icon>schedule</Icon>
      <p>{text}</p>
   </BubbleCont>
}