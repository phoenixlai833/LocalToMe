
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
            <FourNum src='404img.png' alt="404 Img" />
            <BearImage src='404bear.png' alt="404 Img" />
            <Text>
                <h1>
                    Hmm... you seem to have lost your way!
                </h1>
                <h3>
                    Let's get you home. It's dangerous wandering around alone! Your mom is probably worriedly waiting at the door...
                </h3>
            </Text>
            <Btn onClick={handleFourOFour}>Take Me Home</Btn>
        </FourOhFourPage>
    )
}