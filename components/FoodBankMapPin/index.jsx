import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import Link from "next/link";
import styles from "./FoodBankMapPin.module.css";


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

    console.log(selectedEvent)

    return (
        <div>

            {foodBanksList.map((item) => (
                <Marker
                    key={item.id}
                    latitude={item.latitude}
                    longitude={item.longitude}
                    color="red"
                >
                    <button
                        className={styles.markerBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedFoodbank(item);
                        }}
                    >
                        <img src="./foodBankPin.png" alt="foodbank" />
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
                        <p className={styles.foodBankNameLink}>
                            <Link href={`/foodBank/${selectedFoodbank.id}`}>
                                <h2>{selectedFoodbank.program_name}</h2>

                            </Link>
                        </p>
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
                            {selectedFoodbank.description.slice(0, 45)}
                            <span className={styles.readmore}>
                                <Link href={`/foodBank/${selectedFoodbank.id}`}>
                                    ...Read More
                                </Link>
                            </span>
                        </p>
                        <button>
                            <Link href={`https://google.com/maps/dir/?api=1&destination=${selectedFoodbank.location_address}`}>
                                <a >Get Direction</a>
                            </Link>
                        </button>

                    </div>

                </Popup>
            )}

        </div>
    )
}

