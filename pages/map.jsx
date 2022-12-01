import React, { useState, useRef, useEffect } from "react";
import ReactMapGL, {
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  Source,
  Layer,
  useMap,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  getFoodBanks,
  getEvents,
  getPantries,
  getFridges,
} from "../server/database";
import FridgeMapPin from "../components/Atoms/FridgeMapPin";
import PantryMapPin from "../components/Atoms/PantryMapPin";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  useHits,
  useSearchBox,
  Index,
} from "react-instantsearch-hooks-web";
import styled from "styled-components";
import MapSlideUp from "../components/Organisms/MapSlideUp";
import EventMapPin from "../components/Atoms/EventMapPin";
import FoodBankMapPin from "../components/Atoms/FoodBankMapPin";
import Filters from "../components/Atoms/Filters";
import NavBar from "../components/Organisms/NavBar";
import Search from "../components/Molecules/Search";
import TopNavigation from "../components/Organisms/NavBarTop";
import { motion } from "framer-motion";
import Loading from "../components/Molecules/LoadingAnimation/LoadingAnimation";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

function CustomSearch() {
  const { query, refine, clear, isSearchStalled } = useSearchBox();

  function handleSearch(input) {
    refine(input);
  }
  return <Search onSearch={handleSearch} />;
}

// function FoodBankSlideUpHits() {
//   const { hits } = useHits();

//   return <MapSlideUp foodBanks={hits} show={showing} />;
// }

// function FoodBankPinHits() {
//   const { hits } = useHits();

//   return <FoodBankMapPin foodBanksList={hits} hideSlider={setShowing(false)}/>;
// }

function EventMapPinHits() {
  const { hits } = useHits();
  return <EventMapPin events={hits} />;
}

function PantryMapPinHits() {
  const { hits } = useHits();
  return <PantryMapPin pantries={hits} />;
}

function FridgeMapPinHits() {
  const { hits } = useHits();
  return <FridgeMapPin fridges={hits} />;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

const SearchArea = styled.div`
  position: absolute;
  top: 5vh;
  right: 3%;
  padding: 2%;
  width: 40vw;
  @media (max-width: 767px) {
    width: 90vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FilterbtnSection = styled.div`
  margin: 0 5%;
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
`;

const FilterListContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  li {
    margin-right: 10px;
  }
`;

const TopBar = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export default function FoodBankMap() {
  const [viewport, setViewport] = useState({
    latitude: 49.24357,
    longitude: -123.08943,
    width: "100vw",
    height: "100vh",
    zoom: 11,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [userLocation, setUserLocation] = useState({});
  const mapRef = useRef();

  const [isFoodBankFilter, setIsFoodBankFilter] = useState(false);
  const [isEventFilter, setIsEventFilter] = useState(false);

  const filterFoodBanks = () => {
    setIsFoodBankFilter(!isFoodBankFilter);
    setIsEventFilter(false);
  };

  const filterEvents = () => {
    setIsEventFilter(!isEventFilter);
    setIsFoodBankFilter(false);
  };

  let [showing, setShowing] = useState(true);
  function FoodBankSlideUpHits() {
    const { hits } = useHits();

    return <MapSlideUp foodBanks={hits} show={showing} hideSlider={() => setShowing(false)} showSlider={() => setShowing(true)} />;
  }

  function FoodBankPinHits() {
    const { hits } = useHits();

    return <FoodBankMapPin foodBanksList={hits} hideSlider={() => setShowing(false)} />;
  }


  return (
    <InstantSearch indexName="prod_FOODBANKS" searchClient={searchClient}>
      <Loading sec={2000} />
      <TopBar>
        <TopNavigation value={2} />
      </TopBar>
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
            style={{ marginTop: "60px", }}
            position="top-right"
            positionOptions={{ enableHighAccuracy: true }} // This will enable the high accuracy of the location
            showUserLocation={true}
            trackUserLocation={true}
            onGeolocate={(PositionOptions) => {
              // This will set the user's location to the state
              setUserLocation({
                ...userLocation,
                latitude: PositionOptions["coords"].latitude,
                longitude: PositionOptions["coords"].longitude,
              });
            }}
          />

          <NavigationControl position="top-right" style={{ marginTop: "15px" }} />
          {/* <ScaleControl position="top-right" /> */}


          {!isFoodBankFilter && (
            <Index indexName="prod_EVENTS">
              <EventMapPinHits />
            </Index>
          )}

          {!isEventFilter && (
            <Index indexName="prod_FOODBANKS">
              <FoodBankPinHits />
            </Index>
          )}

          {!isFoodBankFilter && !isEventFilter && (
            <Index indexName="prod_PANTRIES">
              <PantryMapPinHits />
            </Index>
          )}

          {!isFoodBankFilter && !isEventFilter && (
            <Index indexName="prod_FRIDGES">
              <FridgeMapPinHits />
            </Index>
          )}

          {/* <EventMapPin events={eventList} /> */}
          {/* <FoodBankMapPin foodBanksList={foodBanksList} /> */}
        </ReactMapGL>

        {/* <div className="animate__slideInLeft"><MapSlideUp foodBanks={hits} /></div> */}
        <div className="animate__slideInLeft">
          <FoodBankSlideUpHits />
        </div>

        <SearchArea>
          <CustomSearch />
          <FilterListContainer>
            <FilterbtnSection>
              <ul style={{ display: "flex", listStyle: "none", padding: "0" }}>
                <li>
                  <Filters
                    isFilter={isFoodBankFilter}
                    tag={"Food Banks"}
                    color={isFoodBankFilter ? "#1CAE33" : "#FFFFFF"}
                    icon={"food_bank"}
                    txtcolor={isFoodBankFilter ? "#FFFFFF" : "#000000"}
                    onPress={filterFoodBanks}
                  />
                </li>
                <li>
                  <Filters
                    isFilter={isEventFilter}
                    tag={"Events"}
                    color={isEventFilter ? "#1CAE33" : "#FFFFFF"}
                    icon={"event"}
                    txtcolor={isEventFilter ? "#FFFFFF" : "#000000"}
                    onPress={filterEvents}
                  />
                </li>
                {/* <li><Filters tag={"Open Now"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li>
                            <li><Filters tag={"Less than 1km"} color={"white"} icon={"food_bank"} onPress={filterFoodBanks} /></li> */}
              </ul>
            </FilterbtnSection>
          </FilterListContainer>
        </SearchArea>
        <div className="smallDisplayNone">
          <NavBar value={2} />
        </div>
      </div>
    </InstantSearch>
  );
}
