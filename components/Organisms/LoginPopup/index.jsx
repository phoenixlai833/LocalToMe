import styled from "styled-components";
import GeneralGreenBtn from "../../Atoms/GeneralGreenBtn";
import Image from "next/image";
import { Colours } from "../../../styles/globals";

const Container = styled.div`
background-color: #FFFFFF;
width: 60vw;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3vw;
padding-top: 5%;
display: flex;
flex-direction: column;
@media (min-width: 768px) {
    width: 350px;
    border-radius: 15px;
}
`

export default function LoginPopup() {

    return (
        <>
            <h1>Okay</h1>
        </>
    )
}