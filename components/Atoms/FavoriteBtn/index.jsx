import styled from "styled-components"
import { useState } from "react"

const Img = styled.img`
    height: 20px;
    width: 20px;
    align-self:center;
    
`
const FavBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 0;
    // padding-left: 1px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    `

const SolidFavBtn = styled.img`
    height: 20px;
    width: 20px;
    align-self:center;
    `


export default function FavoriteBtn({ favorite,onClick}) {
    // const [isFav, setIsFav] = useState(favorite)

    return (
        <div>
            <FavBtn onClick={onClick}>
                {favorite ? <SolidFavBtn src="../../filledHeart.png" /> : <Img src="../../unfilledHeart.png" />}
            </FavBtn>
        </div>
    )
}