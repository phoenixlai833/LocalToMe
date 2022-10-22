import styled from 'styled-components';

//let the user choose column or row
export const FlexBox = styled.div`
display:flex;
flex-direction:${props => props.direction || "row"};
justify-content:center;
align-items:center;
padding-bottom:${props => props.pd || "0px"};
gap:${props => props.gap || "0px"};
`

//container for every page
export const Container = styled(FlexBox)`
width:100vw;
height:100vh;
`

//container for screens not centered
export const Wrapper = styled.div`
display:flex;
width:100vw;
height:100vh;
align-items:center;
flex-direction:${props => props.direction || "row"};
// text-align:center;
max-width:100%;
gap:${props => props.gap || "0px"};

`


//colours for styling
export const Colours = {
   primary: "#068906",
   secondary:"#085617",
   background:"#FFFFFF",
   foreground:"#000000"
}


import { createTheme } from '@mui/material';

export const Theme = createTheme({
   typography:{
      fontFamily:[
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