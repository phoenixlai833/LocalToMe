import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { getEvent, deleteEvent } from '../../../server/database';
import styled from 'styled-components';

const DeleteCont = styled.div`
  position:fixed;
  top:40%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 35vw;
  height: 25vh;
  padding: 2%;
  margin: auto;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 210px;
  min-width: 320px;
`;
const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5%;
`;

const DeleteBtn = styled.button`
  background: #e24949;
  border-radius: 15px;
  height: 44px;
  width: 137px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  border: 0px;
  color: #ffffff;
  margin: 2%;
`
const CancelBtn = styled.button`
  background-color: #FFFFFF;
  border: 2px solid #535353;
  border-radius: 15px;
  height: 44px;
  width: 137px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #535353;
  margin: 2%;
`;


export default function DeletePopup({
    showDelete,
    eventId,
    hidePopup
}) {
    const [display, setDisplay] = useState("flex");
    console.log(eventId);

    const handleDelete = (eventId) => async (e) => {
        {
            e.preventDefault();
            console.log("ACUALLY DELETING", eventId);
            await deleteEvent(eventId);
            window.location.reload();
        }
    };

    return (
        <>
            {showDelete &&
                <DeleteCont show={display}>
                    <h2 style={{ paddingLeft: "10%", paddingRight: "10%" }}>Are you sure you want to delete this posting? This cannot be undone.</h2>
                    <BtnCont>
                        <CancelBtn onClick={hidePopup}>Cancel</CancelBtn>
                        <DeleteBtn onClick={handleDelete(eventId)}>Confirm</DeleteBtn>
                    </BtnCont>
                </DeleteCont>}
        </>
    )
}