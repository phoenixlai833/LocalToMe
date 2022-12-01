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
const ImageSection = styled.div`
width:100%;
height:100px;
`
const FavouriteButton = styled.div`
position:absolute;
border-radius:50%;
background: rgba(255,255,255,0.9);
display:flex;
align-items:center;
justify-content:center;
width:32px;
height:32px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-top:60px;
margin-left:175px;
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
    const [favorite, setFavorite] = useState(false);

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
                        <ImageSection>
                            {/* <FavouriteButton>
                                <FavoriteBtn favorite={favorite} onClick={() => setFavorite(!favorite)} />
                            </FavouriteButton> */}
                            <TopSec></TopSec>
                        </ImageSection>
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

