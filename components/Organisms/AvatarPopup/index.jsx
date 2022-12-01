import styled from "styled-components";
import GeneralGreenBtn from "../../Atoms/GeneralGreenBtn";
import { storage } from "../../../firebase/clientApp";
import { getStorage, ref, deleteObject, getDownloadURL, uploadBytes } from "firebase/storage";

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
@media (min-width: 768px) {
    width: 350px;
    border-radius: 15px;
}
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

const ImgCont = styled.div`
marginLeft: 5%;
width: 5vw;
@media (min-width: 768px) {
    width: 25px;
}
&:hover{
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.3));
}
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
@media (min-width: 768px) {
    width: 100px;
    height: 100px;
}
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

const UploadImg = styled.label`
border-radius: 50%;
background-image: url("AvatarChoices/importAvatar.png");
background-position: center; 
background-repeat: no-repeat; 
background-size: 8vw; 
background-color: ${props => props.uploadSelected ? "#FFB800" : "white"};
border: 3px solid ${Colours.primary};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 12vw;
height: 12vw; 
cursor:pointer; 
margin: 0 6% 10% 3%;
@media (min-width: 768px) {
    background-size: 50px; 
    width: 70px;
    height: 70px;
}
`

const MascotItem = styled.div`
border-radius: 50%;
background-image: ${(props) => `url(${props.mascot})`};
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
background-color: ${props => props.selected ? "#FFB800" : "#D9D9D9"};
cursor:pointer; 
// background-color: #D9D9D9;
width: 12vw;
height: 12vw; 
margin: 0 6% 10% 3%;
@media (min-width: 768px) {
    width: 70px;
    height: 70px;
}
`

const Input = styled.input``;

export default function AvatarPopup({ currentUrl, submitAvatar, imgPath = "/AvatarChoices/Chou_Hype.png", name = "Slayerina", handleClick }) {
    const [testAvatar, setTestAvatar] = useState(imgPath)
    const [upSelected, setUpSelected] = useState(false);

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

    const [mascots, setMascots] = useState(
        mascotList.map((m) => <MascotItem key={m} mascot={m} selected={false} onClick={() => selectMascot(m)}></MascotItem>)
    )

    function selectMascot(clickedMascot) {
        // console.log(clickedMascot)
        setUpSelected(false);
        setTestAvatar(clickedMascot);
        setMascots(
            mascotList.map((m) => {
                if (clickedMascot == m) {
                    console.log("this is clicked", clickedMascot)
                    return <MascotItem key={m} mascot={m} selected={true} onClick={() => selectMascot(m)}></MascotItem>
                } else {
                    console.log("not the ones")
                    return <MascotItem key={m} mascot={m} selected={false} onClick={() => selectMascot(m)}></MascotItem>
                }
            })
        )
        return;
    }

    function handleClickUpload() {
        setUpSelected(true);
        setMascots(mascotList.map((m) => <MascotItem key={m} mascot={m} selected={false} onClick={() => selectMascot(m)}></MascotItem>))
    }

    async function handleChangeImage(e) {
        console.log(e)
        if (e.target.files.length !== 0) {
            const img = e.target.files[0];
            const imgRef = ref(storage, img.name);
            await uploadBytes(imgRef, img);
            const newImgRef = await getDownloadURL(imgRef);
            console.log(newImgRef);
            setTestAvatar(newImgRef)
        }

        // const storage = getStorage();
        // const img = e.target.files[0];
        // const imgRef = ref(storage, img.name);
        // const newImgRef = await getDownloadURL(imgRef).then(() => {
        //     console.log("dont do anything")
        //     // setTestAvatar(newImgRef);
        // }
        // ).catch(async () => {
        //     console.log("delete current and add new image")
        //     const oldImgRef = ref(storage, testAvatar);
        //     deleteObject(oldImgRef);
        //     await uploadBytes(imgRef, img);
        // })
        // setTestAvatar(newImgRef);
    }

    return (
        <>
            <SelectionCont>
                <div style={{ display: "flex", width: "95%", flexDirection: "row-reverse" }}>
                    <ImgCont onClick={handleClick}>
                        <Image src={"/close.svg"} width={"100%"} height={"100%"} style={{cursor:"pointer"}}></Image>
                    </ImgCont>
                </div>

                <TopSec>
                    <YourAvatar currentAvatar={testAvatar} ></YourAvatar>
                    <h3>{name}</h3>
                </TopSec>
                <Divider></Divider>
                <BottomSec>
                    <MascotSec>
                        <input type="file" onChange={handleChangeImage} id="actual-btn" hidden />
                        <UploadImg htmlFor="actual-btn" uploadSelected={upSelected} onClick={handleClickUpload}>
                        </UploadImg>

                        {mascots}
                    </MascotSec>
                    <GeneralGreenBtn onClick={() => submitAvatar(testAvatar)} text={"Save Profile Picture"} />
                </BottomSec>
            </SelectionCont>
        </>
    )
}