import styled from "styled-components";
import { Colours } from "../../../styles/globals";
import { useRouter } from "next/router";
import { Icon } from "@mui/material";
import AppText from "../../Atoms/AppText";

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
   @media (min-width: 767px) {
    padding-left: 25px;
    height: 100px;
   }
`

const Back = styled(Icon)`
padding-left:8px;
   width:40px;
   @media (min-width: 767px) {
      display:none;
   }
  
`
export default function TopBanner({
   text = "Top Banner",
   back = true,

}) {
   const r = useRouter();

   return <Banner>
      {back === true ? <Back fontSize={'large'} onClick={() => r.back()}>arrow_back</Back> : <div></div>}
      <AppText txt={text}></AppText>
      {<div></div>}
   </Banner>
}