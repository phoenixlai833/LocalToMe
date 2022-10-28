import styled from "styled-components";
import { Colours } from "../../../styles/globals";
import { useRouter } from "next/router";
import { Icon } from "@mui/material";
import AppText from "../../Atoms/Apptext";

const Banner = styled.div`
   width:100%;
   max-width:100%;
   // background:${Colours.background};
   // color:${Colours.primary};
   background:#CDECC2;
   display: flex;
   justify-content: space-between;
   align-items:center;
   text-align:center;
   position:sticky;
   font-Size:12px;
`

const Back = styled(Icon)`
padding-left:8px;
   width:40px;
  
`
export default function TopBanner({
   text = "Top Banner",
   back = true,

}) {
   const r = useRouter();

   return <Banner>
      {back === true && <Back fontSize={'large'} onClick={() => r.back()}>arrow_back</Back>}
      <AppText txt={text}></AppText>
      {back === true && <div></div>}
   </Banner>
}