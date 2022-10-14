import styled from "styled-components";
import { Colours } from "../../styles/globals";

const Banner = styled.div`
width:100vw;
background:${Colours.background};
color:${Colours.primary}
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`
export default function TopBanner({
   text = "Top Banner"
}) {
   return <Banner>
      <h1>{text}</h1>
   </Banner>
}