import styled from "styled-components";
import { Colours } from "../../../styles/globals";
import Icon from "@mui/material/Icon";
import { filterOpt } from './data'

const FilterCont = styled.div`
   background:${props => props.color || Colours.background};
   color:${props => props.txtcolor || Colours.foreground};
   display:flex;
   padding:0px 10px;
   border-radius:20px;
   // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
   box-shadow: ${props => props.contshadow};
   align-items:center;
   gap:2px;
   font-weight:600;
   font-size:12px;
   border: ${props => props.border || "0px" };
   // margin:2% auto;
`


export default function Filter({
   tag = "",
   // tagline = filterOpt[tag].tag,
   onPress = () => { },
   active = false,
   icon = filterOpt[tag].icon,
   color = active ? filterOpt[tag].color : 'white',
   txtcolor = active ? Colours.background : Colours.foregroud,
   dropshadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
}) {

   return <FilterCont contshadow={dropshadow} txtcolor={txtcolor} active={false} onClick={onPress} color={color}>
      {icon && <Icon>{icon}</Icon>}
      {/* <p>{tagline}</p> */}
      <p>{tag}</p>
   </FilterCont>
}

export function EventFilter({
   tag = "",
   active = false,
   icon = active ? "close": "check",
   color = Colours.background,
   txtcolor = active ? "#9B1C1C": Colours.primary,
   border = active ? "2px solid #9B1C1C": `2px solid ${Colours.primary}`
}) {

   return <FilterCont txtcolor={txtcolor} active={false} color={color} border={border}>
      {icon && <Icon>{icon}</Icon>}
      <p>{tag}</p>
   </FilterCont>
}