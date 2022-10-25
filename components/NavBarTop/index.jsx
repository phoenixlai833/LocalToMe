import * as React from 'react';
import styled from 'styled-components'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


import { Colours, Theme } from '../../styles/globals';
// import { Colours } from '../../styles/globals';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@mui/material';
// Placeholder Icons
import NavbarIcons from './NavIcons';

const NavBar = styled(BottomNavigation)`
  width:100vw;
  position:fixed;
  bottom:0;
  color:#535353;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  z-index:1;
`
const NavBarAction = styled(BottomNavigationAction)`
  font-family:'Rubik', sans-serif;
  // border:1px black solid;
  max-width:none;
  &:hover{
    color:${Colours.primary};
}
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
      <AppBar>
      <Container maxWidth="xl">
        
      </Container>

      </AppBar>
    </ThemeProvider>
  );
}         