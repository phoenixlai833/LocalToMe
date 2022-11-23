import styled from "styled-components"

// const BannerCont = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// ;
// `

const BannerText = styled.h1`
font-weight: ${props => props.fontweight};
font-size: ${props => props.txtsize}
`

export default function AppText ({txt='hi', txtsize= '24px', fontweight=400}) {
    return <div>
        <BannerText fontweight={fontweight} txtsize={txtsize}>{txt}</BannerText>
    </div> 
}