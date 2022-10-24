import styled from "styled-components";
import { Colours } from "../../styles/globals";
import Icon from "@mui/material/Icon";
import { filterOpt } from './data'

const FilterCont = styled.div`
background:${props => props.color || Colours.background};
color:${props => props.txtcolor || Colours.foreground};
display:flex;
padding:0px 8px;
border-radius:20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
align-items:center;
gap:3px;
font-weight:600;
font-size:12px;
margin: 2%;
`


export default function Filter({
   tag = "",
   // tagline = filterOpt[tag].tag,
   onPress = () => { },
   active = false,
   icon = filterOpt[tag].icon,
   color = active ? filterOpt[tag].color : 'white',
   txtcolor = active ? Colours.background : Colours.foreground
}) {

   return <FilterCont txtcolor={txtcolor} active={false} onClick={onPress} color={color}>
      {icon && <Icon>{icon}</Icon>}
      {/* <p>{tagline}</p> */}
      <p>{tag}</p>
   </FilterCont>
}