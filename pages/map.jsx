import React, { useState, useEffect, useRef} from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl, ScaleControl, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getFoodBanks } from "../server/database";
import MapSlideUp from '../components/MapSlideUp';
import Link from 'next/link';
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import Geocoder from "react-map-gl-geocoder";
// import 'react-map-gl-directions/dist/mapbox-gl-directions.css';
// import Directions from 'react-map-gl-directions';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

export default function FoodBankMap({ foodBanksList }) {


    const [viewport, setViewport] = useState({
        latitude: 49.2827,
        longitude: -123.1207,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    });

    const [selectedFoodbank, setSelectedFoodbank] = useState(null);
    const [userLocation, setUserLocation] = useState({});
    const mapRef = useRef();

    useEffect(() => {
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedFoodbank(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);



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

                    {foodBanksList.map((item) => (

                        <Marker
                            key={item.id}
                            latitude={item.latitude}
                            longitude={item.longitude}
                            color="red"
                        >
                            <button
                                className="marker-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedFoodbank(item);
                                }}
                            >
                                <img src="./FoodB.png" alt="foodbank" />
                            </button>
                        </Marker>
                    )
                    )}

                    {selectedFoodbank && (
                        <Popup
                            latitude={selectedFoodbank.latitude}
                            longitude={selectedFoodbank.longitude}
                            anchor="top"
                            closeOnClick={false}
                            onClose={() => {
                                setSelectedFoodbank(null);
                            }}
                        >
                            <div>

                                <Link href={`/foodBank/${selectedFoodbank.id}`} className="programNameLink">
                                    <h2>{selectedFoodbank.program_name}</h2>

                                </Link>

                                <p>
                                    <b>Location:</b>
                                    {selectedFoodbank.location_address}
                                </p>

                                <p>
                                    <b>Organization Name:</b>
                                    {selectedFoodbank.organization_name}
                                </p>
                                <p>
                                    <b>Email:</b>
                                    {selectedFoodbank.signup_email}
                                </p>
                                <p>
                                    <b>Population served:</b>
                                    {selectedFoodbank.program_population_served}
                                </p>
                                <p>
                                    <b>Description:</b>
                                    {selectedFoodbank.description}
                                </p>
                                <button onClick={() => { }}>Get Direction</button>

                            </div>

                        </Popup>
                    )}
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
    return {
        props: { foodBanksList }, // will be passed to the page component as props
    };
}


// export default function getRoute(end){
//     const start = [userLocation.longitude, userLocation.latitude];
//     const end = [selectedFoodbank.longitude, selectedFoodbank.latitude];
//     const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         const route = data.routes[0];
//         const geojson = {
//             type: 'Feature',
//             properties: {},
//             geometry: route.geometry
//         };
//         if (map.getSource('route')) { // if the route already exists on the map, reset it using setData
//             map.getSource('route').setData(geojson);
//         } else { // if the route doesn't exist, make a new request
//             map.addLayer({
//                 id: 'route',
//                 type: 'line',
//                 source: {
//                     type: 'geojson',
//                     data: {
//                         type: 'Feature',
//                         properties: {},
//                         geometry: geojson
//                     }
//                 },
//                 layout: {
//                     'line-join': 'round',
//                     'line-cap': 'round'
//                 },
//                 paint: {
//                     'line-color': '#3887be',
//                     'line-width': 5,
//                     'line-opacity': 0.75
//                 }
//             });
//         }
//         // add turn instructions here at the end
//     });

// }

