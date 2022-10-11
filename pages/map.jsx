
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import * as foodbankData from "./data/foodbank.json";



// const MAPBOX_TOKEN = "pk.eyJ1IjoicGhvZW5peGxhaTgzMyIsImEiOiJjbDh2eWpjY2EwOHI5M3Zxb2J1a2Fnb2VkIn0.24SJ2r53reCu3akmdTHUXA"; // Set your mapbox token here
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


    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedFoodbank(null);
            }
        };
        window.addEventListener("keydown", listener)

        return () => {
            window.removeEventListener("keydown", listener)
        };
    }, []);

    return (
        <div className='mapboxgl-canvas'>

            <ReactMapGL
                initialViewState={viewport}
                mapboxAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/phoenixlai833/cl8xvkhyh001i16o78o71s4k5"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {foodbankData.map(item => (
                    <Marker
                        key={item.recordid}
                        latitude={item.fields.latitude}
                        longitude={item.fields.longitude}
                        color='red'
                    >
                        <button className="marker-btn" onClick={e => {
                            e.preventDefault();
                            setSelectedFoodbank(item);
                        }}
                        >
                            <img src="./FoodB.png" alt="foodbank" />
                        </button>

                    </Marker>

                ))}

                {selectedFoodbank && console.log(selectedFoodbank.recordid)}
                {selectedFoodbank && (

                    <Popup
                        latitude={selectedFoodbank.fields.latitude}
                        longitude={selectedFoodbank.fields.longitude}
                        anchor="top"
                        closeOnClick={false}
                        onClose={() => {
                            setSelectedFoodbank(null);
                        }
                        }
                    >
                        <div>

                            <h2>
                                <a href="https://foodbank.bc.ca/" rel="organizationName" className='organizationNameLink'>
                                    {selectedFoodbank.fields.organization_name}
                                </a>
                            </h2>
                            <p>
                                <b>Location:</b>{selectedFoodbank.fields.location_address}
                            </p>

                            <p>
                                <b>Contact:</b>{selectedFoodbank.fields.signup_phone_number}
                            </p>
                            <p>
                                <b>Email:</b>{selectedFoodbank.fields.signup_email}
                            </p>
                            <p>
                                <b>Population_served:</b>{selectedFoodbank.fields.program_population_served}
                            </p>
                            <p>
                                <b>Description:</b>{selectedFoodbank.fields.description}
                            </p>
                        </div>
                    </Popup>
                )}

            </ReactMapGL>
        </div>
    );


}



