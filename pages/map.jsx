import React, { useState, useRef } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl, ScaleControl, Source, Layer, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getFoodBanks } from "../server/database";
import MapSlideUp from '../components/MapSlideUp';
import EventMapPin from "../components/EventMapPin";
import FoodBankMapPin from "../components/FoodBankMapPin";
import { getEvents } from "../server/database";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, useHits, useSearchBox } from "react-instantsearch-hooks-web";
import Filters from '../components/Filters';
import NavBar from '../components/NavBar';
import styled from "styled-components";
import Search from "../components/Search";

const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

const StyledSearch = styled(Search)`
    * { border: 1px solid red; }
`;

function CustomSearch() {
    const { query, refine, clear, isSearchStalled } = useSearchBox();

    function handleSearch(input) {
        refine(input);
    }
    return <StyledSearch onSearch={handleSearch} />
}

function FoodBankPinHits() {
    const { hits } = useHits();

    return <FoodBankMapPin foodBanksList={hits} />
}
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here



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
// overflow-x: scroll;
// @media (max-width: 767px) {
//     width: 85vw;
// }
// `

const FilterbtnSection = styled.div`
width: 30vw;
display: flex;
justify-content: flex-start;
overflow: hidden;
position: relative;
@media(max-width: 767px) {
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
        <InstantSearch indexName="prod_FOODBANKS" searchClient={searchClient}>


            <div className="mapboxgl-canvas">
                <ReactMapGL
                    ref={mapRef}
                    key="map"
                    initialViewState={viewport}
                    mapboxAccessToken={MAPBOX_TOKEN}
                    // mapStyle="mapbox://styles/phoenixlai833/cl8xvkhyh001i16o78o71s4k5"
                    mapStyle="mapbox://styles/phoenixlai833/cl9nimfgi001b15l8dgfkvx1t"
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
                    <FoodBankPinHits />
                    {/* <FoodBankMapPin foodBanksList={foodBanksList} /> */}
                </ReactMapGL >
            </div>
            <div className="animate__slideInLeft"><MapSlideUp foodBanks={foodBanksList} /></div>
            {/* <SearchArea > */}
            <CustomSearch />

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
            {/* </SearchArea> */}
            <NavBar value={navValue} onChange={(event, newValue) => {
                setNavValue(newValue);
            }} />
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




