import styled from "styled-components"

// const BannerCont = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// ;
// `

const BannerText = styled.h1`
font-weight: 500;
font-size: 24px;
`

export default function AppText ({txt='hi'}) {
    return <div>
        <BannerText>{txt}</BannerText>
    </div>
}