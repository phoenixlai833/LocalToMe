import styled from "styled-components";
import GeneralGreenBtn from "../../Atoms/GeneralGreenBtn";
import Image from "next/image";
import { useState } from "react";
import { Colours } from "../../../styles/globals";

const SelectionCont = styled.div`
background-color: #FFFFFF;
width: 60vw;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3vw;
padding-top: 5%;
// display: flex;
// flex-direction: column;
`
const TopSec = styled.div`
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;
`
const BottomSec = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5%;
`

const YourAvatar = styled.div`
border-radius: 50%;
background-image: ${(props) => `url(${props.currentAvatar})`};
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
background-color: #D9D9D9;
width: 18vw;
height: 18vw; 
`

const Divider = styled.div`
width: 100%;
height: 0.5vh;
background-color: gray;
opacity: 20%;
`

const MascotSec = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 5% 0 0 3%;
`

const UploadImg = styled.div`
border-radius: 50%;
background-image: url("AvatarChoices/importAvatar.png");
background-position: center; 
background-repeat: no-repeat; 
background-size: 8vw; 
background-color: white;
border: 3px solid ${Colours.primary};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 12vw;
height: 12vw; 
margin: 0 6% 10% 3%;
`

const MascotItem = styled.div`
border-radius: 50%;
background-image: ${(props) => `url(${props.mascot})`};
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
background-color: ${props => props.selected ? "#FFB800" : "#D9D9D9"};
// background-color: #D9D9D9;
width: 12vw;
height: 12vw; 
margin: 0 6% 10% 3%;
`

export default function AvatarPopup({ handleSubmit, imgPath = "Mascot/Chou_Hype.svg", name = "Slayerina", handleClick }) {
    const [selected, setSelected] = useState(false);

    const mascotList = [
        "/AvatarChoices/Chou_Confused.png",
        "/AvatarChoices/Chou_Hype.png",
        "/AvatarChoices/Chou_Neutral.png",
        "/AvatarChoices/Chou_Sad.png",
        "/AvatarChoices/Chou_Surprised.png",
        "/AvatarChoices/Chou_Mad.png",
        "/AvatarChoices/Chou_Smug.png",
        "/AvatarChoices/Chou_Sus.png"
    ]

    const mascots = mascotList.map((m) => <MascotItem key={m} mascot={m} selected={selected}></MascotItem>)

    const hidePopup = (e) => {
        e.preventDefault();
        console.log("hide")
        setPosition("static")
    }


    return (
        <>
            <SelectionCont>
                <div style={{ marginLeft: "5%", width: "5vw" }} onClick={handleClick}>
                    <Image src={"/close.svg"} width={"100%"} height={"100%"}></Image>
                </div>

                <TopSec>
                    <YourAvatar currentAvatar={imgPath} ></YourAvatar>
                    <h3>{name}</h3>
                </TopSec>
                <Divider></Divider>
                <BottomSec>
                    <MascotSec>
                        <UploadImg></UploadImg>
                        {mascots}
                    </MascotSec>
                    <GeneralGreenBtn onClick={handleSubmit} text={"Save Profile Picture"} />
                </BottomSec>
            </SelectionCont>
        </>
    )
}