import styled from "styled-components";
import { Colours } from "../../../styles/globals";

const ToastCont = styled.div`
width: 350px;
max-width: 350px;
height: 60px;
background-color: ${props => props.bgToast || '#F9FFF6'};
display:flex;
justify-content: center;
align-items: center;
border: solid 2px ${props=> props.borderToast || Colours.primary};
border-radius: 10px;
`

const ToastImgCont = styled.div`
align-self: flex-end;
width: 60px;
height: 3.55em;
margin-right: 5px;
`

const ToastImg = styled.img`
width: 50px;
height: 50px;
`
const ToastTxt = styled.div`
color:${props=> props.txtcolor || Colours.primary};
font-size: 16px;
margin: 0px;
padding-right: 20px;
`

export default function Toast({ message = 'Your post has been uploaded!', imgsrc = "/Mascot/Chou_Hype.svg", borderToast, bgToast, txtcolor}) {
    return <ToastCont borderToast={borderToast} bgToast={bgToast}>
            <ToastImgCont>
                <ToastImg src={imgsrc} />
            </ToastImgCont>
            <ToastTxt txtcolor={txtcolor}>{message}</ToastTxt>
        </ToastCont>

}