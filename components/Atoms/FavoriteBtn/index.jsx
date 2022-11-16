import styled from "styled-components"
import { useState } from "react"

const Img = styled.img`
    height: 22px;
    width: 22px;
`
const FavBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 0;
    padding-left: 1px;
    `

const SolidFavBtn = styled.img`
    height: 20px;
    width: 20px;
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