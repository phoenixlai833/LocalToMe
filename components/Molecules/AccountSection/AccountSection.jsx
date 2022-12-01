import styled from "styled-components";
import { SettingHeader } from "../../Atoms/AppText/AppText.stories";

export const Cont = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:100%;
max-width:100%;
height: 50px;
padding-top: 75px;
padding-bottom: 60px;
`

const NextArrow = styled.img`
width: 400;
height: 400;
cursor: pointer;
`

export default function AccountSection({onRoute=()=>{}}) {


    return <Cont>
       <SettingHeader txt='Account' txtsize='16px'></SettingHeader>
       <NextArrow src="/chevron.svg" onClick={()=>onRoute()}></NextArrow>
    </Cont>
}