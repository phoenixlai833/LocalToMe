import React, { useState, useEffect } from 'react';
import styles from './MapSlideUp.module.css'
import Link from 'next/link'
import styled from 'styled-components';
import MapSlideItem from '../../Molecules/MapSlideItem';

const ElementsPos = styled.div`
position: absolute;
top: 0;
left: 0;
`;

const SlideBtn = styled.button`
background-color: gray;
width: 10px;
height: 20vh;
border: none;
border-radius: 12px;
@media (max-width: 767px) {
    width: 20vw;
    height: 13px;
}
`;

const ButtonArea = styled.div`
background-color: white;
width: 10vw;
height: 100vh; 
display: flex;
justify-content: flex-end;
align-items: center;
@media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    width: 100vw;
}
`

const Divider = styled.div`
width: 100vw;
height: 0.5vh;
background-color: gray;
opacity: 20%;
@media (max-width: 767px) {
    width: 100vw;
}
`

export default function MapSlideUp({ foodBanks }) {
    let [showing, setShowing] = useState(true);

    function toggleShowing() {
        return showing ? setShowing(false) : setShowing(true)
    }

    const foodBankComponent = foodBanks.map((foodBank) => {
        const fb = { foodBank }.foodBank;
        console.log(fb);
        return (
            < li key={fb.id} className={styles.card} >
                <MapSlideItem fb={fb} />
                <Divider></Divider>
            </ li>
        )
    })

    const fb = {
        opbjecID: 'test1',
        wheelchair_accessible: 'Yes',
        organization_name: "DTES Women's Centre",
        program_name: "DTES Women's Centre - Drop In - Takeout Meals",
        last_update_date: '2022-08-22T11:44:15+00:00',
        local_areas: 'Downtown',
        signup_required: 'Unknown',
        provides_hampers: 'False',
        delivery_available: 'No',
        latitude: 49.281867,
        location_address: '302 Columbia St, Vancouver, BC',
        geom: [49.281867, -123.102196],
        foodBank_Image: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0',
        takeout_available: 'Yes',
        longitude: -123.102196,
        requires_referral: 'No',
        program_population_served: 'women',
        meal_cost: 'Free',
        description: 'Daily (except Wed) 10-11am, 12-2pm. Coffee and snacks until 4pm.',
        provides_meals: 'True',
        program_status: 'Open'
    }

    return (
        <>
            <ElementsPos>
                <div className={`${styles.background} + ${showing ? styles.slidein : styles.slideout}`}>
                    <ul className={styles.noSpace}>
                        {foodBankComponent}
                    </ul>
                    <ButtonArea>
                        <SlideBtn onClick={toggleShowing}></SlideBtn>
                    </ButtonArea>
                </div>
            </ElementsPos>
            {/* <button onClick={toggleShowing} className={styles.pos}>SLIDE</button> */}
        </>
    )
}