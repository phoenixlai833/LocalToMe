
import styled from 'styled-components'


const FourOhFourPage = styled.div`
display: grid;
    background: #CDECC2;
    height: 100vh;
    width: 100%;
@media (max-width: 900px) {
    display: 'block',
}


`
const Btn = styled.button`
position: absolute;
top: 75%;
left: 13%;
width: 200px;
height: 50px;
    background: #108928;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 10px 20px;
    font-size: 1.2rem;
    margin: 20px;
    cursor: pointer;
    &:hover {
        background: #0f7a1f;
    }
       @media (max-width: 900px) {
left: 18%;
top: 50%;
   }


    `

const FourNum = styled.img`
    position: absolute;
    top: 15%;
    left: 13%;

    @media (max-width: 900px) {
        // display: flex;
        // justify-content: center;
        // align-item: center;
        // margin: 0 auto;
        width: 50%;
        left:26%;
        top: 10%;
    }
    
        
    `

const BearImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 5%;
    width:60%;
      @media (max-width: 900px) {
      width:70%;
      bottom:10%;
    }
    `

const Text = styled.div`

    position: absolute;
    top: 50%;
    left: 14%;
    width:25vw;
   @media (max-width: 900px) {
width:60vw;
top: 30%;
left: 20%;
   }
    `


export default function FourOhFour() {

    const handleFourOFour = () => {
        window.location.href = "/"
    }
    return (
        <FourOhFourPage>
            <FourNum src='500.png' alt="500 Img" />
            <BearImage src='404bear.png' alt="404 Img" />
            <Text>
                <h1>
                    Hmm... we seem to have lost our way!
                </h1>
                <h3>Let's go home. It's dangerous to wander around! Your dad is probably worriedly waiting in the kitchen...</h3>
            </Text>
            <Btn onClick={handleFourOFour}>Take Me Home</Btn>
        </FourOhFourPage>
    )
}