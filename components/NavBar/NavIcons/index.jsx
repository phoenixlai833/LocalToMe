import { Icon } from "@mui/material";
import styled from 'styled-components';

const NavIcon = styled.img`
width:18px; 
height:18px;
`
// exporting new icons because they are custom icons not from MUI.
export default function NavbarIcons({
   icon = "",
   active = false,
}){

   return <div>
      
         <Icon>
         {!active && <NavIcon src={"/NavbarIcons/" + icon + ".svg"}  />}
         {active && <NavIcon src={"/NavbarIcons/" + icon + "Active.svg"}  />}
      </Icon>
   </div>
}