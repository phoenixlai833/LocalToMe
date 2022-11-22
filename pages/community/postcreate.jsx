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
@media (min-width: 768px) {
    position:relative;

`
const Image = styled.img`

margin-right: 3rem;
margin-top: 20px;
width: 300px;
height: 300px;
transition: all 1s ease-in-out;
@media (min-width: 768px) {
    position:absolute;
height: 700px;
width: 700px;
object-position: 0px 430px;
bottom: 0;
margin-right: 6rem;

}
`

const Btn = styled.div`
@media (min-width: 768px) {
position: absolute;
}
`

export default function PostCreation() {


    return <AddNewPost>
        <Btn>
            <CreationSection />
        </Btn>
        <Image src="../../Mascot/chouNeutral-post.png" alt="chouchou" />
    </AddNewPost>
}