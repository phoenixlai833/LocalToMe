import styled from "styled-components";
import { useRouter } from "next/router";

const PostCreationHeader = styled.h2`
`

const Cont = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

const CreateBttn = styled.div`
background-color: ${props => props.inactive || '#108928'};
width: 268px;
height: 50px;
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
`
const Close = styled.img`

width: 50px;
height: 50px;
padding: 10px;
margin: 10px;
position: absolute;
top: 4%;
left: 4%;
`

export default function CreationSection() {

    const r = useRouter();

    return <div>
        <Close src="/close.svg" onClick={() => r.back()}></Close>
        <Cont>
            <PostCreationHeader>What do you want to create today?</PostCreationHeader>
            <CreateBttn onClick={() => r.push('../events/add')}>Create an Event</CreateBttn>
            <CreateBttn onClick={() => r.push('../news/add')}>Create a News</CreateBttn>
        </Cont>
    </div>
}