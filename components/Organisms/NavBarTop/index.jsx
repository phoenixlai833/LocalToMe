import styled from 'styled-components'
import * as React from 'react';
import { AppBar, Container, Box, Toolbar, IconButton, Button, Delete, Icon, ThemeProvider, Typography } from '@mui/material'
import NavBarIcons from '../../Atoms/NavIcons';
import { Colours, Theme } from '../../../styles/globals';
import { useState } from 'react';
import { useRouter } from 'next/router';

const AppDiv = styled(AppBar)`
//   background-color:white;
//   color:${Colours.primary};
//   z-index:100;
//   max-width:100vw;
//   @media (max-width: 767px) {
//     display:none;
// }
`

const NavButton = styled(IconButton)`
  // display:flex;
  // flex-direction:column;
  // color:${Colours.primary};
  // font-size:12px;
  // border-radius:0;
  // padding:18px 30px;
  // max-width:90px;
`

const NavIcons = styled(NavBarIcons)`
  // width:50px;
  // height:50px;
`

const Logo = styled.img`
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
    <ThemeProvider theme={Theme}>
    <AppDiv position="fixed">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Logo src="/localtomelogo.svg" alt="Local To Me logo" aria/>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 900,
                display:"flex",
                alignItems:"center"
              }}
            >
              LOCALTOME
            </Typography>
          </Container>
          {/* </Box> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: "flex-end" } }}>
            <NavButton onClick={onHome}>
              <NavIcons icon="Home" />
              Home
            </NavButton>
            <NavButton onClick={onCommunity}>
              <NavIcons icon="Community" />
              Community
            </NavButton>
            <NavButton onClick={onMap}>
              <NavIcons icon="Map" />
              Map
            </NavButton>
            <NavButton onClick={onFavourites}>
              <NavIcons icon="Favourite" />
              Favourites
            </NavButton>
            <NavButton onClick={onProfile}>
              <NavIcons icon="Profile" />
              Profile
            </NavButton>

          </Box>
        </Toolbar>
      </Container>
    </AppDiv>
    </ThemeProvider>
  );
}         