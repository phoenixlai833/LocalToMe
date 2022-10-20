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
// import 'react-map-gl-directions/dist/mapbox-gl-directions.css';s
// import Directions from 'react-map-gl-directions';

// const MAPBOX_TOKEN ="pk.eyJ1IjoicGhvZW5peGxhaTgzMyIsImEiOiJjbDh2eWpjY2EwOHI5M3Zxb2J1a2Fnb2VkIn0.24SJ2r53reCu3akmdTHUXA"  ; // Set your mapbox token here

export default function FoodBankMap({ foodBanksList, eventList }) {


    const [viewport, setViewport] = useState({
        latitude: 49.2827,
        longitude: -123.1207,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    });

    const [userLocation, setUserLocation] = useState({});
    const mapRef = useRef();

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
        </div>
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




