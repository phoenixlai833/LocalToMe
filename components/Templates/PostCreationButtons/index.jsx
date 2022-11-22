import styled from "styled-components";
import { useRouter } from "next/router";
import { Colours } from "../../../styles/globals";

const PostCreationHeader = styled.h2`
font-size: 30px;
@media (max-width:767px) {
    font-size: 20px;
    }
`

const Cont = styled.div`
display:flex;
width: 100vw;
height: 100vh; 
justify-content: center;
flex-direction: column;
align-items: center;
background-color: ${Colours.tertiary};
z-index: 0;
overflow: hidden;
`

const CreateBttn = styled.div`
width: 360px;
height: 55px;
background-color: ${props => props.inactive || '#108928'};
color: white;
border-radius: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 10px;
&:hover {
background-color: ${props => props.active || '#085617'};
}
@media (max-width:767px) {
    width: 268px;
    height: 50px;
}
`
const Close = styled.img`
width: 50px;
height: 50px;
padding: 10px;
margin: 10px;
position: absolute;
right: 0px;
`

const BodyCont = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100%;
top: 60px;
position: relative;
`

const BigChouCont = styled.div`
display:flex;
justify-content: flex-end;
flex-direction: column;
align-items: center;
width: 100%;
@media (max-width:767px) {
display: none;
}
`
const BigChou = styled.img`
width: auto;
height: auto;
max-width: 700px;
max-height: 700px;
`

export default function CreationSection() {

    const r = useRouter();

    return <div>
        <Close src="/close.svg" onClick={() => r.back()}></Close>
        <Cont>
            <BodyCont>
                <PostCreationHeader>What do you want to create today?</PostCreationHeader>
                <CreateBttn onClick={() => r.push('../events/add')}>Create an Event</CreateBttn>
                <CreateBttn onClick={() => r.push('../news/add')}>Create a News</CreateBttn>
            </BodyCont>
            <BigChouCont>
                <BigChou src="/Mascot/postcreat_chou.svg" />
            </BigChouCont>
        </Cont>

    </div>
}