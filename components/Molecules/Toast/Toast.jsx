import styled from "styled-components";
import { Colours } from "../../../styles/globals";
import { useRouter } from "next/router";

const ToastCont = styled.div`
width: 350px;
max-width: 350px;
height: 100px;
background-color: ${props => props.bgToast || '#F9FFF6'};
display:flex;
justify-content: center;
align-items: center;
border: solid 2px ${props => props.borderToast || Colours.primary};
border-radius: 10px;
@media (min-width: 768px) {
width: 400px;
max-width: 450px;
height: 150px;
`

const ToastImgCont = styled.div`
// align-self: flex-end;
width: 60px;
height: 2em;
margin-right: 15px;
`

const ToastImg = styled.img`
width: 60px;
height: 60px;
@media (min-width: 768px) {
width: 80px;
height: 80px;
}
`
const ToastTxt = styled.div`
color:${props => props.txtcolor || Colours.primary};
font-size: 16px;
margin: 0px;

text-align: center;
span{
    padding-top: 10px;
    font-weight: 900;
    text-decoration: underline;
}

span:hover{
    font-weight: 900;
    cursor: pointer;

}
`

const Btn = styled.button`
display: flex;
background-color: ${Colours.primary};
color: white;
border: none;
border-radius: 5px;
padding: 5px 10px;
margin: 10px auto 0 auto;

`

export default function Toast({ message = 'Your post has been uploaded!', imgsrc = "/Mascot/Chou_Hype.svg", borderToast, bgToast, txtcolor, onViewPost }) {

    const handleViewPost = () => {
        onViewPost();
    }

    return <ToastCont borderToast={borderToast} bgToast={bgToast}>
        <ToastImgCont>
            <ToastImg src={imgsrc} />
        </ToastImgCont>
        <div>
            <ToastTxt txtcolor={txtcolor}>
                {message}
            </ToastTxt>
            <Btn onClick={handleViewPost}>View Post</Btn>
        </div>
    </ToastCont>

}