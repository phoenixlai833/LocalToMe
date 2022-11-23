import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import GetDirectionGreenBtn from "../GetDirectionGreenBtn";
import styled from "styled-components";

const PantryName = styled.p`
color: black;
`

const MarkerBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
 img {
    width: 20px;
    height: 28px;
}
`

const PopupCont = styled.div`
padding: 2%;
`

const TopSec = styled.div`
background-color: #CDECC2;
background-image: url("../../Mascot/MascotFallen.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
// width: 100%;
height: 100px;
display: flex; 
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
                    <PopupCont>
                        <TopSec></TopSec>
                        <PantryName>
                            <h2>{selectedPantry.name}</h2>
                        </PantryName>
                        {selectedPantry.location &&
                            <p>
                                <b>Location:</b>
                                {selectedPantry.location}
                            </p>}
                        {selectedPantry.description &&
                            <p>
                                <b>Description:</b>
                                {selectedPantry.description}
                            </p>}
                        <GetDirectionGreenBtn address={selectedPantry.location} onMap={true} />
                    </PopupCont>

                </Popup>

            )
            }

        </div >
    )
}

