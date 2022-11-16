import styled from "styled-components"

// const BannerCont = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// ;
// `

// const BannerText = styled.h1`
// font-weight: ${props => props.fontweight};
// font-size: ${props => props.txtsize}
// `

const Tab = styled.div`
width:8rem;
height:1.5rem;
border-radius: 2em;
background-color: ${props => props.backgroundColor};
justify-content: center;
align-items: center;
display: flex;
color: ${props => props.txtColor};
font-weight: ${props => props.fontWeight};

`

export default function FavoriteTab({ txt, backgroundColor, txtColor, fontWeight }) {
    return <div>

        <Tab backgroundColor={backgroundColor} txtColor={txtColor} fontWeight={fontWeight}>{txt}</Tab>
    </div>
}