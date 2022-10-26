import { Icon } from "@mui/material";
import styled from 'styled-components';

const NavIcon = styled.img`
width:28px; 
height:28px;
`
const CustomIcon = styled(Icon)`
font-size: 28px;
`
// exporting new icons because they are custom icons and not from MUI libraries.
export default function NavbarIcons({
   icon = "",
   active = false,
}){

   return <div>
      
         <CustomIcon>
         {!active && <NavIcon src={"/NavbarIcons/" + icon + ".svg"}  />}
         {active && <NavIcon src={"/NavbarIcons/" + icon + "Active.svg"}  />}
      </CustomIcon>
   </div>
}