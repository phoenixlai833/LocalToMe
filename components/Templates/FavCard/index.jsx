import { useEffect, useState } from "react";
import { Colours } from "../../../styles/globals";
import styled from 'styled-components';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";

import FavoriteImage from "../../Atoms/FavoriteImage";
import FavoriteTxt from "../../Atoms/FavoriteTxt";
import FavoriteTab from "../../Atoms/FavoriteTab";
import FavoriteBtn from "../../Atoms/FavoriteBtn";

const FavoriteBox = styled.div`
position: relative;
display: grid;
grid-template-columns: 40% 50%;
gap: 10px;
margin: 1rem;
width:85vw;
height: 150px;
box-sizing: border-box;
margin:1rem auto;
@media (min-width: 768px) {
    width: 50vw;

}
`

const FavImg = styled.div`
width:150px;
height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
@media (min-width: 768px) {
  width:200px;


`

const InfoBox = styled.div`

padding-left: 1rem;
display: flex;
flex-direction: column;
margin-left: 2rem;

div:nth-child(2){
  margin-top: 1rem;
}
div:nth-child(3){
position: absolute;
  bottom: 0%;
  right: 0%;
}

`

export default function FavCard({ img, type, id, txt, title, location, href, onUnfavorite, backgroundColor, txtColor }) {

  function handleUnfavorite(e) {
    e.preventDefault();
    onUnfavorite(type, id);
  }

  return (
    <>
      <FavoriteBox>
        <FavImg>
          <FavoriteImage img={img ? img : "http://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png"} />
        </FavImg>
        <InfoBox>
          <FavoriteTab txt={txt} backgroundColor={backgroundColor} txtColor={txtColor} fontWeight="semi-bold" />

          <FavoriteTxt title={title} location={location} href={href} />

          <FavoriteBtn favorite={true} onClick={handleUnfavorite} />
        </InfoBox>
      </FavoriteBox>
    </>
  );
}
