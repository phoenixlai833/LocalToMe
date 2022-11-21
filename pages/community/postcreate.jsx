import CreationSection from "../../components/Templates/PostCreationButtons"
import styled from "styled-components"

const AddNewPost = styled.div`
background-color: #CDECC2;
width: 100vw;
height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Image = styled.img`
margin-top: 10px;
@media (min-width: 768px) {
width: 400px;
height: 400px;
`

export default function PostCreation() {


    return <AddNewPost>
        <CreationSection />
        <Image src="../../Mascot/chouchou.png" alt="chouchou" />
    </AddNewPost>
}