import * as React from 'react';
import styled from 'styled-components'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Colours, Theme } from '../../styles/globals';
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
  max-width:none;
  &:hover{
    color:${Colours.primary};
}
`
export default function LabelBottomNavigation({
  value = 0,
  // onHome=()=>{},
  // onCommunity=()=>{},
  // onMap=()=>{},
  // onFavourites=()=>{},
  // onProfile=()=>{}
}) {
  const r = useRouter();
  // var [value, setState] = useState(0);
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
      <NavBar
        showLabels
        value={value}
        active={value}
        onChange={(event, newValue) => {
          value = newValue;
        }}
      >
        {value === 0 ? (<NavBarAction label="Home" icon={<NavbarIcons icon="Home" active={true} />} onClick={onHome}/>) : (<NavBarAction label="Home" icon={<NavbarIcons icon="Home" />} onClick={onHome} />)}
        {value === 1 ? (<NavBarAction label="Community" icon={<NavbarIcons icon="Community" active={true} />} onClick={onCommunity} />) : (<NavBarAction label="Community" icon={<NavbarIcons icon="Community" />} onClick={onCommunity} />)}
        {value === 2 ? (<NavBarAction label="Map" icon={<NavbarIcons icon="Map" active={true} />} onClick={onMap} />) : (<NavBarAction label="Map" icon={<NavbarIcons icon="Map" />} onClick={onMap} />)}
        {value === 3 ? (<NavBarAction label="Favourites" icon={<NavbarIcons icon="Favourite" active={true} />} onClick={onFavourites} />) : (<NavBarAction label="Favourites" icon={<NavbarIcons icon="Favourite" />} onClick={onFavourites} />)}
        {value === 4 ? (<NavBarAction label="Profile" icon={<NavbarIcons icon="Profile" active={true} />} onClick={onProfile} />) : (<NavBarAction label="Profile" icon={<NavbarIcons icon="Profile" />} onClick={onProfile} />)}

      </NavBar>
    </ThemeProvider>
  );
}         