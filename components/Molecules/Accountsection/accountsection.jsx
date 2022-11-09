import styled from "styled-components";

const Cont = styled.div`
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
`

export const Settingheader = styled.p`
font-size: 16px;
margin: 0;
`

export default function AccountSection({onRoute=()=>{}}) {


    return <Cont>
       <Settingheader>Account</Settingheader>
       <NextArrow src="/chevron.svg" onClick={()=>onRoute()}></NextArrow>
    </Cont>
}