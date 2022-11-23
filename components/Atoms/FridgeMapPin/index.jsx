import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import GetDirectionGreenBtn from "../GetDirectionGreenBtn";
import styled from "styled-components";

const FridgeName = styled.p`
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

export default function FridgeMapPin({ fridges }) {

    const [selectedFridge, setSelectedFridge] = useState(null);

    useEffect(() => {
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedFridge(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);



    return (
        <div>

            {fridges.map((fridge) => {
                if (fridge.latitude && fridge.longitude) {
                    return (
                        <Marker
                            key={fridge.id}
                            latitude={fridge.latitude}
                            longitude={fridge.longitude}
                        >
                            <MarkerBtn
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedFridge(fridge);
                                }}
                            >
                                <img src="./FridgeMapPin.png" alt="fridge Pin" />
                            </MarkerBtn>

                        </Marker>
                    )
                }
            }
            )}


            {selectedFridge && (

                <Popup
                    latitude={selectedFridge.latitude}
                    longitude={selectedFridge.longitude}
                    anchor="top"
                    closeOnClick={false}
                    onClose={() => {
                        setSelectedFridge(null);
                    }}

                >
                    <PopupCont>
                        <TopSec></TopSec>
                        <FridgeName>
                            <h2>{selectedFridge.name}</h2>
                        </FridgeName>
                        {selectedFridge.location &&
                            <p >
                                <b>Location:</b>
                                {selectedFridge.location}
                            </p>}
                        {selectedFridge.description &&
                            <p>
                                <b>Description:</b>
                                {selectedFridge.description}
                            </p>}

                        <GetDirectionGreenBtn address={selectedFridge.location} onMap={true} />
                    </PopupCont>

                </Popup>

            )
            }

        </div >
    )
}

