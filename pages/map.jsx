import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { getFoodBanks } from "../server/database";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicGhvZW5peGxhaTgzMyIsImEiOiJjbDh2eWpjY2EwOHI5M3Zxb2J1a2Fnb2VkIn0.24SJ2r53reCu3akmdTHUXA"; // Set your mapbox token here

export default function FoodBankMap({ foodBanksList }) {
  const [viewport, setViewport] = useState({
    latitude: 49.2827,
    longitude: -123.1207,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  const [selectedFoodbank, setSelectedFoodbank] = useState(null);
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

  return (
    <div>
      <div className="mapboxgl-canvas">
        <ReactMapGL
          ref={mapRef}
          key="map"
          initialViewState={viewport}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/phoenixlai833/cl8xvkhyh001i16o78o71s4k5"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {foodBanksList.map((item) => (
            <Marker
              key={item.id}
              latitude={item.latitude}
              longitude={item.longitude}
              color="red"
            >
              <button
                className="marker-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedFoodbank(item);
                }}
              >
                <img src="./FoodB.png" alt="foodbank" />
              </button>
            </Marker>
          ))}

          {selectedFoodbank && console.log("hola", selectedFoodbank)}
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
                <h2>
                  <a
                    href="https://foodbank.bc.ca/"
                    rel="programName"
                    className="programNameLink"
                  >
                    {selectedFoodbank.programName}
                  </a>
                </h2>
                <p>
                  <b>Location:</b>
                  {selectedFoodbank.locationAddress}
                </p>

                <p>
                  <b>Contact:</b>
                  {selectedFoodbank.signupPhoneNumber}
                </p>
                <p>
                  <b>Email:</b>
                  {selectedFoodbank.signupEmail}
                </p>
                <p>
                  <b>Population_served:</b>
                  {selectedFoodbank.populationServed}
                </p>
                <p>
                  <b>Description:</b>
                  {selectedFoodbank.description}
                </p>
              </div>
            </Popup>
          )}
          <Geocoder
            mapRef={mapRef}
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
          />
        </ReactMapGL>
      </div>
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
