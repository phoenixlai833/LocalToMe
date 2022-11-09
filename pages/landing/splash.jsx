import styled from 'styled-components';
import React from 'react';


const SplashLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    `

export default function Splash() {


    setTimeout(function () {
        window.location.replace('/splashAndLanding/landingPageOne');
    }, 3000);

    return (
        <SplashLogo>
            <img src="../../Splash.png" />
        </SplashLogo>
    )
}