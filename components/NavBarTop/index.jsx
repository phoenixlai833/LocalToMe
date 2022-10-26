import styled from 'styled-components'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Delete from '@mui/icons-material/Delete'

import { Colours, Theme } from '../../styles/globals';
import NavbarIcons from '../Navbar/NavIcons';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@mui/material';
// Placeholder Icons

const AppDiv = styled(AppBar)`
background-color:white;
color:${Colours.primary};
@media (max-width: 767px) {
  display:none;
}
`
//sx={{ my: 1, color: 'white', display: 'flex', flexDirection: "column" }}
const NavButton = styled(IconButton)`
display:flex;
flex-direction:column;
color:${Colours.primary};
font-size:12px;
border-radius:0;
padding:18px 30px;
max-width:90px;
`

const NavIcons = styled(NavbarIcons)`
width:50px;
height:50px;
`
export default function TopNavigation({
  value = 0,
}) {
  const r = useRouter();
  // let [navValue, setNavValue] = useState(value);
  const onHome = () => {
    r.push("/");
  }
  const onCommunity = () => {
    r.push("/community");
  }
  const onMap = () => {
    r.push("/map");
  }
  const onFavourites = () => {
    r.push("/favourites");
  }
  const onProfile = () => {
    r.push('/profile')
  }
  return (
    // <ThemeProvider theme={Theme}>
      <AppDiv>
        <Container >

          <Toolbar disableGutters>
          <Container sx={{display:"flex", justifyContent:"flex-start"}}>
          <NavIcons></NavIcons>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 900,
              }}
              >
              LOCALTOME
            </Typography>
              </Container>
            {/* </Box> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent:"flex-end"} }}>
              <NavButton onClick={onHome}>
                <NavIcons icon="Home"/>
                Home
              </NavButton>
              <NavButton onClick={onCommunity}>
                <NavIcons icon="Community"/>
                Community
              </NavButton>
              <NavButton onClick={onMap}>
                <NavIcons icon="Map"/>
                Map
              </NavButton>
              <NavButton onClick={onFavourites}>
                <NavIcons icon="Favourite"/>
                Favourites
              </NavButton>
              <NavButton onClick={onProfile}>
                <NavIcons icon="Profile"/>
                Profile
              </NavButton>

            </Box>
          </Toolbar>
        </Container>
      </AppDiv>
    // </ThemeProvider>
  );
}         