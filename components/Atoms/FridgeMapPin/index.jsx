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
                    <div>
                        <p>
                            <h2>{selectedFridge.name}</h2>
                        </p>
                        <p>
                            <b>Location:</b>
                            {selectedFridge.location && selectedFridge.location}
                        </p>
                        <p>
                            <b>Description:</b>
                            {selectedFridge.description && selectedFridge.description}
                        </p>

                        <GetDirectionGreenBtn address={selectedFridge.location} onMap={true} />
                    </div>

                </Popup>

            )
            }

        </div >
    )
}

