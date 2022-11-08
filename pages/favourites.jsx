import styled from "styled-components";
import NavBar from '../components/Organisms/NavBar';
import { useState } from "react";

const FavorPage = styled.div`
    display: flex;
background-color: #CDECC2;
height: 100vh;
width: 100vw;
`

const Text = styled.h1`

margin: 0 auto;
color: #108928;
justify-content: center;
align-self: center;

`


export default function Favorites() {
    return (
        <FavorPage>
            <Text>oops, You have no favourites yet !</Text>
            <NavBar value={3}/>
        </FavorPage>
    )


}