import styled from "styled-components"

// const BannerCont = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// ;
// `

const BannerText = styled.h1`
font-weight: 500;
font-size: ${props => props.txtsize}
`

export default function AppText({ txt = 'hi', txtsize = '24px' }) {
    return <div>
        <BannerText txtsize={txtsize}>{txt}</BannerText>
    </div>
}