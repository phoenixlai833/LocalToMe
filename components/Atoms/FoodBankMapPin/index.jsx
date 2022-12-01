import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import Link from "next/link";
import GetDirectionGreenBtn from "../../Atoms/GetDirectionGreenBtn";
import styled from "styled-components";
import FavoriteBtn from "../FavoriteBtn";

const FoodBankNameLink = styled.p`
color: #108928;
:hover {
    color: black;
    text - decoration: underline;
}
`;

const Readmore = styled.span`
    color: #108928;
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


export default function FoodBankMapPin({ foodBanksList, hideSlider }) {

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedFoodbank, setSelectedFoodbank] = useState(null);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedEvent(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);


    return (
        <div>

            {foodBanksList.map((item) => {
                if (item.latitude && item.longitude) {
                    return (
                        <Marker
                            key={item.id}
                            latitude={item.latitude}
                            longitude={item.longitude}
                            color="red"
                        >
                            <MarkerBtn
                                onClick={(e) => {
                                    e.preventDefault();
                                    hideSlider();
                                    setSelectedFoodbank(item);
                                }}
                            >
                                <img src="./Food_Bank_Map_Pin.svg" alt="foodbank pin" />
                            </MarkerBtn>
                        </Marker>
                    )
                }
            }
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
                    <PopupCont >
                        <ImageSection>
                            {/* <FavouriteButton>
                                <FavoriteBtn favorite={favorite} onClick={() => setFavorite(!favorite)} />
                            </FavouriteButton> */}
                            <TopSec></TopSec>
                        </ImageSection>
                        <FoodBankNameLink style={{ cursor: "pointer" }}>
                            <Link href={`/foodBank/${selectedFoodbank.objectID}`} >
                                <h2>{selectedFoodbank.program_name}</h2>
                            </Link>
                        </FoodBankNameLink>
                        {selectedFoodbank.location_address &&
                            <p>
                                <b>Location</b>
                                <br></br>
                                {selectedFoodbank.location_address}
                            </p>}
                        {selectedFoodbank.program_population_served &&
                            <p>
                                <b>Population served</b>
                                <br></br>
                                {selectedFoodbank.program_population_served}
                            </p>}
                        {selectedFoodbank.description &&
                            <p>
                                <b>Description</b>
                                <br></br>
                                {selectedFoodbank.description.slice(0, 45)}
                                <Readmore>
                                    <Link href={`/foodBank/${selectedFoodbank.objectID}`}>
                                        ...Read More
                                    </Link>
                                </Readmore>
                            </p>}
                        <GetDirectionGreenBtn address={selectedFoodbank.location_address} onMap={true} />
                    </PopupCont>

                </Popup>
            )}

        </div>
    )
}

