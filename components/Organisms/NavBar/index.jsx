import * as React from 'react';
import styled from 'styled-components'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Colours } from "../../../styles/globals";
import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import NavBarIcons from '../../Atoms/NavIcons';

const NavBar = styled(BottomNavigation)`
  width:100vw;
  height:80px;
  // height: 72px;
  bottom: 0px;
  left: 0px;
  position: fixed;
  right: 0px;
  display:flex;
  color:#535353;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  z-index:100;
  @media (min-width: 767px) {
    display:none;
}
`
const NavBarAction = styled(BottomNavigationAction)`
  font-family:'Rubik', sans-serif;
  max-width:none;
  &:hover{
    color:${Colours.primary};
}
`
import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    fontFamily: [
      "Rubik, sans-serif"
    ]
  },
  palette: {
    primary: {
      main: `#068906`
    },
    secondary: {
      main: `#085617`
    }
  }
});

export default function LabelBottomNavigation({
  value = 0,
}) {
  const r = useRouter();
  const onHome = () => {
    r.push("/home");
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
        {value === 0 ? (<NavBarAction label="Home" icon={<NavBarIcons icon="Home" active={true} />} onClick={onHome} />) : (<NavBarAction label="Home" icon={<NavBarIcons icon="Home" />} onClick={onHome} />)}
        {value === 1 ? (<NavBarAction label="Community" icon={<NavBarIcons icon="Community" active={true} />} onClick={onCommunity} />) : (<NavBarAction label="Community" icon={<NavBarIcons icon="Community" />} onClick={onCommunity} />)}
        {value === 2 ? (<NavBarAction label="Map" icon={<NavBarIcons icon="Map" active={true} />} onClick={onMap} />) : (<NavBarAction label="Map" icon={<NavBarIcons icon="Map" />} onClick={onMap} />)}
        {value === 3 ? (<NavBarAction label="Favourites" icon={<NavBarIcons icon="Favourite" active={true} />} onClick={onFavourites} />) : (<NavBarAction label="Favourites" icon={<NavBarIcons icon="Favourite" />} onClick={onFavourites} />)}
        {value === 4 ? (<NavBarAction label="Profile" icon={<NavBarIcons icon="Profile" active={true} />} onClick={onProfile} />) : (<NavBarAction label="Profile" icon={<NavBarIcons icon="Profile" />} onClick={onProfile} />)}

      </NavBar>
    </ThemeProvider>
  );
}         