import * as React from 'react';
import styled from 'styled-components'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Colours, Theme } from '../../styles/globals';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
// Placeholder Icons
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

const NavBar = styled(BottomNavigation)`
width:100vw;
position:fixed;
bottom:0;
color:#535353;

`
const NavBarAction = styled(BottomNavigationAction)`
font-family:'Rubik', sans-serif;
max-width:none;
&:hover{
  color:${Colours.primary};
}

`
export default function LabelBottomNavigation({
  value = [value, setState] = useState(0),
  // onHome=()=>{},
  // onCommunity=()=>{},
  // onMap=()=>{},
  // onFavourites=()=>{},
  // onProfile=()=>{}
}) {
  const r = useRouter();
  // var [value, setState] = useState(0);
  const onHome=()=>{
    r.push("/");
  }
  const onCommunity=()=>{
    r.push("/");
  }
  const onMap=()=>{
    r.push("/map");
  }
  const onFavourites=()=>{
    r.push("/favourites");
  }
  const onProfile=()=>{
    r.push('/profile')
  }
  return (
    <ThemeProvider theme={Theme}>
      <NavBar
        showLabels
        value={value}
        onChange={(event, newValue) => {
          // console.log(value)
          value = newValue;
        }}
      >
        <NavBarAction label="Home" icon={<HomeIcon />} onClick={onHome}/>
        <NavBarAction label="Community" icon={<FavoriteIcon />} onClick={onCommunity}/>
        <NavBarAction label="Map" icon={<LocationOnIcon />} onClick={onMap}/>
        <NavBarAction label="Favourites" icon={<FavoriteIcon />} onClick={onFavourites}/>
        <NavBarAction label="Profile" icon={<PersonIcon />} onClick={onProfile}/>
      </NavBar>
    </ThemeProvider>
  );
}         