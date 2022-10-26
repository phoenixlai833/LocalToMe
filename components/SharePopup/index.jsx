
import React, { useState, useEffect } from 'react';
import styles from './SharePopup.module.css'
import Link from 'next/link'
import { getEvent, deleteEvent } from '../../server/database';

import styled from 'styled-components';
import { useRouter } from 'next/router';

const ShareCont = styled.div`
background-color: color: #FFFFFF;;
width: 60vw;
height: 50vh;
padding: 2%;
margin: auto;
font-family: 'Rubik', sans-serif;
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
background: ${props => props.inactive || '#E24949'};
border-radius: 13px;
height: 30px;
width: 137px;

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

font-size: 14px;
line-height: 17px;
text-align: center;

color: #535353;
margin: 2%
`


export default function SharePopup() {

    return (
        <ShareCont>
            <h2 className={styles.h2}>Are you sure you want to delete this posting? This cannot be undone.</h2>
            {singleEventComponent}
            <BtnCont>
                <CancelBtn onClick={()=>r.back()}>Cancel</CancelBtn>
                <DeleteBtn onClick={handleDelete(singleEvent.id)}>Confirm</DeleteBtn>
            </BtnCont>
        </ShareCont>
    )
}

