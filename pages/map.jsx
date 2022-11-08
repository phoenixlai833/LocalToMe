import React, { useState, useRef } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl, ScaleControl, Source, Layer, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getFoodBanks } from "../server/database";
import { getEvents } from "../server/database";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, useHits, useSearchBox, Index } from "react-instantsearch-hooks-web";
import styled from "styled-components";
import MapSlideUp from '../components/Organisms/MapSlideUp';
import EventMapPin from "../components/Atoms/EventMapPin";
import FoodBankMapPin from "../components/Atoms/FoodBankMapPin";
import Filters from '../components/Atoms/Filters';
import NavBar from '../components/Organisms/NavBar';
import Search from "../components/Molecules/Search";

const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);



function CustomSearch() {
    const { query, refine, clear, isSearchStalled } = useSearchBox();

    function handleSearch(input) {
        refine(input);
    }
    return <Search onSearch={handleSearch} />
}

function FoodBankPinHits() {
    const { hits } = useHits();

    return <FoodBankMapPin foodBanksList={hits} />
}

function FoodBankSlideUpHits() {
    const { hits } = useHits();

    return <MapSlideUp foodBanks={hits} />
}

function EventMapPinHits() {
    const { hits } = useHits();
    return <EventMapPin events={hits} />
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here



const SearchArea = styled.div`
position: absolute;
top: 0;
right: 3%;
padding:2%;
width: 30vw;
@media (max-width: 767px) {
    width: 90vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const FilterbtnSection = styled.div`
margin:0 5%;
width: 30vw;
display: flex;
justify-content: flex-start;
overflow: hidden;
@media (max-width: 767px) {
    // margin:0;
    justify-content: flex-start;
    width: 85vw;
    overflow: hidden;
}
`

const FilterListContainer = styled.div`
white-space: nowrap;
overflow-x: scroll;
overflow-y: hidden;
-webkit-overflow-scrolling: touch;
&::-webkit-scrollbar {
  display: none;
}

li{
    margin-right: 10px;
}
`


export default function FoodBankMap({ foodBanksList, eventList }) {


    const [viewport, setViewport] = useState({
        // latitude: 49.2827,
        // longitude: -123.1207,
        latitude: 49.24357,
        longitude: -123.08943,
        width: "100vw",
        height: "100vh",
        zoom: 11,
    });

    const [userLocation, setUserLocation] = useState({});
    const mapRef = useRef();

    const filterFoodBanks = () => { }

    return (
        <InstantSearch indexName="prod_FOODBANKS" searchClient={searchClient}>
            <div className="mapboxgl-canvas">


                <ReactMapGL
                    ref={mapRef}
                    key="map"
                    initialViewState={viewport}
                    mapboxAccessToken={MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/phoenixlai833/cl8xvkhyh001i16o78o71s4k5"
                    // mapStyle="mapbox://styles/phoenixlai833/cl9nimfgi001b15l8dgfkvx1t"
                    onViewportChange={(viewport) => {
                        setViewport(viewport);
                    }}
                >

                    <GeolocateControl
                        position="top-right"
                        positionOptions={{ enableHighAccuracy: true }}// This will enable the high accuracy of the location
                        showUserLocation={true}
                        trackUserLocation={true}
                        onGeolocate={(PositionOptions) => {// This will set the user's location to the state
                            setUserLocation({
                                ...userLocation,
                                latitude: PositionOptions["coords"].latitude,
                                longitude: PositionOptions["coords"].longitude,
                            });
                        }}
                    />
                    <NavigationControl position="top-right" />
                    {/* <ScaleControl position="top-right" /> */}

                    <Index indexName="prod_EVENTS">
                        <EventMapPinHits />
                    </Index>

                    <Index indexName="prod_FOODBANKS">
                        <FoodBankPinHits />
                    </Index>

                    {/* <EventMapPin events={eventList} /> */}
                    {/* <FoodBankMapPin foodBanksList={foodBanksList} /> */}

                </ReactMapGL >

                {/* <div className="animate__slideInLeft"><MapSlideUp foodBanks={hits} /></div> */}
                <div className="animate__slideInLeft">
                    <FoodBankSlideUpHits />
                </div>

                <SearchArea >
                    <CustomSearch />
                    <FilterListContainer>
                        <FilterbtnSection>
                            <ul style={{ display: "flex", listStyle: "none", padding: "0" }}>
                                <li><Filters tag={"Food Banks"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                                <li><Filters tag={"Events"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                                {/* <li><Filters tag={"Open Now"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                            <li><Filters tag={"Less than 1km"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li> */}
                            </ul>
                        </FilterbtnSection>
                    </FilterListContainer>
                </SearchArea>
                <NavBar value={2} />
            </div>
        </InstantSearch>
    );
}

export async function getServerSideProps(context) {
    // Everything in this function happens on the server
    const foodBanksData = await getFoodBanks();
    const foodBanksList = JSON.parse(JSON.stringify(foodBanksData));
    // const findMissingLingLat = foodBanksList.map((i) => [i.longitude, i.id]);
    // console.log(findMissingLingLat)

    //get events from database
    const req = await getEvents();
    const eventList = JSON.parse(JSON.stringify(req));

    return {
        props: { foodBanksList, eventList }, // will be passed to the page component as props
    };
}



