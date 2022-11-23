import styled from "styled-components";
import { useRouter } from "next/router";

const PostCreationHeader = styled.h2`
font-size: 30px;
@media (max-width:767px) {
    font-size: 20px;
    }
`
const Cont = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 22vh 0 0 0;

`

const AddPost = styled.div`
overflow: hidden;
@media (min-width: 768px) {
    position: relative;
    height: 100vh;
    width: 100vw;
`

const CreateBttn = styled.div`
background-color: ${props => props.inactive || '#108928'};
width: 360px;
height: 55px;
color: white;
border-radius: 10px;
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
top: 4%;
right: 4%;
@media (min-width: 768px) {
    top: 4%;
    right: 5%;
}
`

export default function CreationSection() {

    const r = useRouter();

    return <AddPost>
        <Close src="/close.svg" onClick={() => r.back()}></Close>
        <Cont>
            <PostCreationHeader>What do you want to create today?</PostCreationHeader>
            <CreateBttn onClick={() => r.push('../events/add')}>Create an Event</CreateBttn>
            <CreateBttn onClick={() => r.push('../news/add')}>Create a News</CreateBttn>
        </Cont>
    </AddPost>
}