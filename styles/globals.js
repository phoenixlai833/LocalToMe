import styled from 'styled-components';

//let the user choose column or row
export const FlexBox = styled.div`
display:flex;
flex-direction:${props => props.direction || "row"};
justify-content:center;
align-items:center;
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
text-align:center;
`


//colours for styling
export const Colours = {
   primary: "#068906",
   background:"#FFFFFF"
}
