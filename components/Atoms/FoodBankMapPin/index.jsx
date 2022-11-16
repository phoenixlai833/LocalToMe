import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import Link from "next/link";
import GetDirectionGreenBtn from "../../Atoms/GetDirectionGreenBtn";
import styled from "styled-components";

const FoodBankNameLink = styled.p`
:hover {
    color: rgb(49, 143, 237);
    text - decoration: underline;
}
`;

const Readmore = styled.span`
    color: rgb(49, 143, 237);
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

export default function FoodBankMapPin({ foodBanksList }) {

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedFoodbank, setSelectedFoodbank] = useState(null);

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
                                setSelectedFoodbank(item);
                            }}
                        >
                            <img src="./Food_Bank_Map_Pin.svg" alt="foodbank pin" />
                        </MarkerBtn>
                    </Marker>
<<<<<<< HEAD:components/FoodBankMapPin/index.jsx
                )
=======
                )}
>>>>>>> f7ea2923f861a4c7acbf34050d59daba9d53aa61:components/Atoms/FoodBankMapPin/index.jsx
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
                    <div>
                        <FoodBankNameLink>
                            <Link href={`/foodBank/${selectedFoodbank.objectID}`}>
                                <h2>{selectedFoodbank.program_name}</h2>

                            </Link>
                        </FoodBankNameLink>
                        <p>
                            <b>Location:</b>
                            {selectedFoodbank.location_address && selectedFoodbank.location_address}
                        </p>

                        <p>
                            <b>Organization Name:</b>
                            {selectedFoodbank.organization_name && selectedFoodbank.organization_name}
                        </p>
                        <p>
                            <b>Email:</b>
                            {selectedFoodbank.signup_email && selectedFoodbank.signup_email}
                        </p>
                        <p>
                            <b>Population served:</b>
                            {selectedFoodbank.program_population_served && selectedFoodbank.program_population_served}
                        </p>
                        <p>
                            <b>Description:</b>
                            {selectedFoodbank.description && selectedFoodbank.description.slice(0, 45)}
                            <Readmore>
                                <Link href={`/foodBank/${selectedFoodbank.id}`}>
                                    ...Read More
                                </Link>
                            </Readmore>
                        </p>
                        <GetDirectionGreenBtn address={selectedFoodbank.location_address} onMap={true} />

                    </div>

                </Popup>
            )}

        </div>
    )
}

