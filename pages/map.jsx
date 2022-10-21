import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl, ScaleControl, Source, Layer, useMap } from "react-map-gl";
import Script from 'next/script'
import { getFoodBanks } from "../server/database";
import MapSlideUp from '../components/MapSlideUp';
import EventMapPin from "../components/EventMapPin";
import FoodBankMapPin from "../components/FoodBankMapPin";
import { getEvents } from "../server/database";
import { setupMapShit } from "../mapShit";
import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import Geocoder from "react-map-gl-geocoder";
// import 'react-map-gl-directions/dist/mapbox-gl-directions.css';
// import Directions from 'react-map-gl-directions';

// https://google.com/maps/dir/?api=1&origin=bcit&destination=


const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

export default function FoodBankMap({ foodBanksList, eventList }) {


    const [viewport, setViewport] = useState({
        latitude: 49.2827,
        longitude: -123.1207,
        width: "100vw",
        height: "100vh",
        zoom: 11,
    });

    const [userLocation, setUserLocation] = useState({});
    // const mapRef = useRef();
    // const mapSetup = useRef(false);

    // function setupMap() {
    //     if (mapSetup.current && mapRef) return;
    //     mapSetup.current = true;
    //     const map = mapRef.current.getMap();
    //     setupMapShit({ map })
    // map.addControl(new GeolocateControl({
    //     positionOptions: {
    //         enableHighAccuracy: true
    //     },
    //     trackUserLocation: true
    // }));
    // map.addControl(new NavigationControl());
    // map.addControl(new ScaleControl());



    // const setMap = useCallback((map) => {
    //     mapRef.current = map;
    //     if (!map) return;
    //     setupMap();

    // mapRef.current?.getMap()

    // map.getMap().addControl(
    //     new MapboxDirections({
    //         accessToken: MAPBOX_TOKEN
    //     }),
    //     'top-right'
    // );
    // }, [])

    return (
        <>
            {/* <Script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js" /> */}

            <div className="mapboxgl-canvas">
                <ReactMapGL
                    // ref={setMap}
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

                </ReactMapGL >
            </div>
            <div className="animate__slideInLeft"><MapSlideUp foodBanks={foodBanksList} /></div>

        </>
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




