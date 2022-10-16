import React, { useState, useEffect, useRef, Component } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl, ScaleControl, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getFoodBanks } from "../../server/database";
import MapSlideUp from '../../components/MapSlideUp';
import Link from 'next/link';
import Image from 'next/image';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
// import 'react-map-gl-directions/dist/mapbox-gl-directions.css';
// import Directions from 'react-map-gl-directions';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

export default function FoodBankMap() {


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

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/phoenixlai833/cl8xvkhyh001i16o78o71s4k5',
        center: [-123.1207, 49.2827], // starting position
        zoom: 12
    });

    const bounds = [
        [-123.069003, 45.395273],
        [-122.303707, 45.612333]
    ];
    map.setMaxBounds(bounds);

    const start = [userLocation.longitude, userLocation.latitude];
    const end = [selectedFoodbank.longitude, selectedFoodbank.latitude];
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const route = data.routes[0];
            const geojson = {
                type: 'Feature',
                properties: {},
                geometry: route.geometry
            };
            if (map.getSource('route')) { // if the route already exists on the map, reset it using setData
                map.getSource('route').setData(geojson);
            } else { // if the route doesn't exist, make a new request
                map.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            properties: {},
                            geometry: geojson
                        }
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#3887be',
                        'line-width': 5,
                        'line-opacity': 0.75
                    }
                });
            }
            // add turn instructions here at the end
        });


    map.on('load', () => {
        // make an initial directions request that
        // starts and ends at the same location
        getRoute(start);

        // Add starting point to the map
        map.addLayer({
            id: 'point',
            type: 'circle',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'Point',
                                coordinates: start
                            }
                        }
                    ]
                }
            },
            paint: {
                'circle-radius': 10,
                'circle-color': '#3887be'
            }
        });
        // this is where the code from the next step will go
    });



    map.on('click', (event) => {
        const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
        const end = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: coords
                    }
                }
            ]
        };
        if (map.getLayer('end')) {
            map.getSource('end').setData(end);
        } else {
            map.addLayer({
                id: 'end',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'Point',
                                    coordinates: coords
                                }
                            }
                        ]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#f30'
                }
            });
        }
        getRoute(coords);
    });

    const instructions = document.getElementById('instructions');
    const steps = data.legs[0].steps;

    let tripInstructions = '';
    for (const step of steps) {
        tripInstructions += `<li>${step.maneuver.instruction}</li>`;
    }
    instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
        data.duration / 60
    )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;



    return (
        <div>
            <div id='map'></div>
            <div id="instructions"></div>




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




