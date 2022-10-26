import React, { useState, useRef } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl, ScaleControl, Source, Layer, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getFoodBanks } from "../server/database";
import MapSlideUp from '../components/MapSlideUp';
import EventMapPin from "../components/EventMapPin";
import FoodBankMapPin from "../components/FoodBankMapPin";
import { getEvents } from "../server/database";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import Geocoder from "react-map-gl-geocoder";
// import 'react-map-gl-directions/dist/mapbox-gl-directions.css';
// import Directions from 'react-map-gl-directions';
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, useHits } from "react-instantsearch-hooks-web";
import Filters from '../components/Filters';
import NavBar from '../components/NavBar';
import styled from "styled-components";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

const SearchArea = styled.div`
position: absolute;
top: 0;
right: 0;
padding: 3%;
width: 40vw;
@media (max-width: 767px) {
    width: 100vw;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const SearchBar = styled.div`
height: 5vh;
width: 30vw;
background-color: lightgray;
border-radius: 10px;
display: flex;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 767px) {
    width: 85vw;
}
`

const StyledSearchBox = styled(SearchBox)`
form{
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
 position: relative;
  background-color:#E4E4E4;
  width:90%;
  height:45px;
  margin:20px;
  border-radius:13px;
  border: none;
  font-size: 20px;
}
button {
  position: absolute;
  right: 10%;
  height:45px;
  width:45px;
  border-color:transparent;
  background-color:transparent;
}
.ais-SearchBox-submitIcon{
width:20px;
height:20px;
}
.ais-SearchBox-submitIcon path{

fill:#108928;
}
.ais-SearchBox-resetIcon{
display:none;
}
`

// const FilterbtnSection = styled.div`
// display: flex;
// justify-content: flex-start;
// overflow: hidden;
// @media (max-width: 767px) {
//     justify-content: flex-end;
//     width: 100vw;
// }
// `

const FilterbtnSection = styled.div`
width: 30vw;
display: flex;
justify-content: flex-start;
overflow: hidden;
@media (max-width: 767px) {
    justify-content: flex-end;
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
`

function EventMapPinHits() {
    
}

export default function FoodBankMap({ foodBanksList, eventList }) {

    const [navValue, setNavValue] = useState(2);

    const [viewport, setViewport] = useState({
        latitude: 49.2827,
        longitude: -123.1207,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    });

    const [userLocation, setUserLocation] = useState({});
    const mapRef = useRef();

    const filterFoodBanks = () => { }

    return (
        <div>
            <div className="mapboxgl-canvas">
                <ReactMapGL
                    ref={mapRef}
                    key="map"
                    initialViewState={viewport}
                    mapboxAccessToken={MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/phoenixlai833/cl8xvkhyh001i16o78o71s4k5"
                    onViewportChange={(viewport) => {
                        setViewport(viewport);
                    }}
                >
                    <ScaleControl position="bottom-right" />
                    <NavigationControl position="bottom-right" />
                    <GeolocateControl
                        position="bottom-right"
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

                    <EventMapPin events={eventList} />
                    <FoodBankMapPin foodBanksList={foodBanksList} />

                    {/* <Geocoder
            mapRef={mapRef}
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
          /> */}
                </ReactMapGL >
            </div>
            <div className="animate__slideInLeft"><MapSlideUp foodBanks={foodBanksList} /></div>
            <SearchArea >
                <SearchBar>Search</SearchBar>
                {/* <InstantSearch indexName={"prod_EVENTS"} searchClient={searchClient}>
                    <StyledSearchBox />
                </InstantSearch> */}
                <FilterListContainer>
                    <FilterbtnSection>
                        <ul style={{ display: "flex", listStyle: "none", padding: "0" }}>
                            <li><Filters tag={"Food Banks"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                            <li><Filters tag={"Food Banks"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                            <li><Filters tag={"Events"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                            <li><Filters tag={"Open Now"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                            <li><Filters tag={"Less than 1km"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                        </ul>
                    </FilterbtnSection>
                </FilterListContainer>
            </SearchArea>
            <NavBar value={navValue} onChange={(event, newValue) => {
                setNavValue(newValue);
            }} />
        </div >
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




