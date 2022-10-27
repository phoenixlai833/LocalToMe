
import React, { useState, useEffect } from 'react';
import styles from './DeletePopup.module.css'
import Link from 'next/link'
import { getEvent, deleteEvent } from '../../server/database';

import styled from 'styled-components';

// const AbsolutePos = styled.div`
// position: absolute;
// top: 25vh;
// left: 20vw;
// `

const DeleteCont = styled.div`
background-color: #FFFFFF;
width: 60vw;
height: 50vh;
padding: 2%;
margin: auto;
text-align: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
min-height: 210px;
min-width: 320px;

`
const BtnCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 5%%;
`

const DeleteBtn = styled.button`
background: #E24949;
border-radius: 13px;
height: 30px;
width: 137px;
left: 170px;
top: 138px;

font-size: 14px;
line-height: 17px;
text-align: center;
border: 0px;

color: #FFFFFF;
margin: 2%;
`
const CancelBtn = styled.button`
background: #FFFFF;
border: 2px solid #535353;
border-radius: 13px;
height: 30px;
width: 137px;
left: 170px;
top: 138px;

font-size: 14px;
line-height: 17px;
text-align: center;

color: #535353;
margin: 2%
`


export default function DeletePopup({ singleEvent }) {
    const [event, setEvent] = useState();
    console.log(singleEvent);

    const handleDelete = (singleEventId) => async (e) => {
        {
            e.preventDefault();
            console.log(singleEventId);
            deleteEvent(singleEventId);
        }
    };

    const hidePopup = (e) => {
        e.preventDefault();
        console.log("hide")
        setPosition("static")
    }

    const singleEventComponent = (
        <div>
            {/* <img width="100" height="100" src={singleEvent.eventImage} alt={singleEvent.eventName} /> */}
            {/* <p>{singleEvent.eventName}</p> */}
        </div>
    )

    return (
        <DeleteCont>
            <h2 className={styles.h2}>Are you sure you want to delete this posting? This cannot be undone.</h2>
            {singleEventComponent}
            <BtnCont>
                <CancelBtn onClick={hidePopup}>Cancel</CancelBtn>
                <DeleteBtn onClick={handleDelete(singleEvent.id)}>Confirm</DeleteBtn>
            </BtnCont>
        </DeleteCont>
    )
}

