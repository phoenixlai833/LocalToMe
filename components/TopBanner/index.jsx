import styled from "styled-components";
import { Colours } from "../../styles/globals";
import { useRouter } from "next/router";

const Banner = styled.div`
width:100%;
max-width:100%;
// background:${Colours.background};
// color:${Colours.primary};
background:#CDECC2;

display:flex;
justify-content:space-between;
align-items:center;
text-align:center;
position:sticky;
`

const Back = styled.img`
padding-left:8px;
`
export default function TopBanner({
   text = "Top Banner",
   back = true,

}) {
   const r = useRouter();

   return <Banner>
      {back === true && <Back src="http://placekitten.com/30/30" />}
      <h1>{text}</h1>
      {back === true && <div></div>}
   </Banner>
}