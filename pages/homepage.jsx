import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getFoodBanks } from "../server/database";
// import { useAuthState } from "react-firebase-hooks/auth"; // to check if user is signed in
import axios from "axios";
import { useEffect, useState } from "react";
import {FlexBox, Container, Wrapper, Colour} from '../styles/globals.js'
import Search from '../components/Search'

// this should be homepage, just using for testing right now
// maybe move some of this to map
export default function Home({ foodBanksList }) {

  return (
    <div>
      <Head>
        <title>LocalToMe</title>
      </Head>

      <Container direction="column">
      <h1>Good morning, </h1>

        <h3>Find help near you</h3>

        <h3>Upcoming Events</h3>
        
        <h3>Community News</h3>

        <p className="map-link">
          Checkout <Link key="link-to-map" href="/map">the map!</Link>
        </p>
      </Container>

    </div>
  );
}

export async function getServerSideProps(context) {
  // Everything in this function happens on the server
  const foodBanksData = await getFoodBanks();
  const foodBanksList = JSON.parse(JSON.stringify(foodBanksData));
  console.log(foodBanksList);
  return {
    props: { foodBanksList }, // will be passed to the page component as props
  };
}
