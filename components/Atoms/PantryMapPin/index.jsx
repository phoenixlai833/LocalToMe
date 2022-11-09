import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import GetDirectionGreenBtn from "../GetDirectionGreenBtn";
import styled from "styled-components";



const MarkerBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
 img {
    width: 20px;
    height: 28px;
}
`

export default function PantryMapPin({ pantries }) {

    const [selectedPantry, setSelectedPantry] = useState(null);

    useEffect(() => {
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedPantry(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);



    return (
        <div>

            {pantries.map((pantry) => {
                if (pantry.latitude && pantry.longitude) {
                    return (
                        <Marker
                            key={pantry.id}
                            latitude={pantry.latitude}
                            longitude={pantry.longitude}
                        >
                            <MarkerBtn
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedPantry(pantry);
                                }}
                            >
                                <img src="./FoodPantryMapPin.png" alt="Pantry Pin" />
                            </MarkerBtn>

                        </Marker>
                    )
                }
            }
            )}


            {selectedPantry && (

                <Popup
                    latitude={selectedPantry.latitude}
                    longitude={selectedPantry.longitude}
                    anchor="top"
                    closeOnClick={false}
                    onClose={() => {
                        setSelectedPantry(null);
                    }}

                >
                    <div>
                        <p>
                            <h2>{selectedPantry.name}</h2>
                        </p>
                        <p>
                            <b>Location:</b>
                            {selectedPantry.location && selectedPantry.location}
                        </p>
                        <p>
                            <b>Description:</b>
                            {selectedPantry.description && selectedPantry.description}
                        </p>

                        <GetDirectionGreenBtn address={selectedPantry.location} onMap={true} />
                    </div>

                </Popup>

            )
            }

        </div >
    )
}

