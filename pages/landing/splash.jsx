import styled, { keyframes } from "styled-components";
import React from "react";
import Router from  "next/router";

const fadeOut = keyframes`
    0% {opacity: 1;}
    100% {opacity: 0;}
`;

const SplashLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  animation: ${fadeOut} 2s linear 0.2s;
`;

export default function Splash() {
  setTimeout(function () {
    Router.push("/landing/landingOne");
  }, 1500);

  return (
    <SplashLogo>
      <img src="../../Splash.png" />
    </SplashLogo>
  );
}
