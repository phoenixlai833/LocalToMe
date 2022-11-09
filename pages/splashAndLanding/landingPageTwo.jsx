import styled from 'styled-components';
import Link from 'next/link';

export default function LandingPageTwo() {


    const LandOne = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    margin: 5% 5%;
    text-align: center;

    `
    const Skip = styled.div`
    position: absolute;
    top: 6vh;
    right: 8vw;
    font-size: 16px;
    font-weight: 600;
    `

    const MascotImg = styled.img`
    height: 400px;
    width: 400px;
    `
    const Dot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 40vw;
    margin-top:10%;

div{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #D9D9D9;
    margin: 0 10px;
    
}
div:nth-child(2){
    background-color: #108928;
}
    `

    const Button = styled.button`
    background-color: #108928;
    border: none;
    border-radius: 10px;
    height: 60px;
    width: 85vw;
    color: white;
    font-size: 20px;
    `


    return (
        <LandOne>
            <Skip>
                <Link href="/">
                    Skip
                </Link>
            </Skip>

            <MascotImg src="../../Mascot/mascotEvent.png" />

            <h1>
                Host & Join Events
            </h1>
            <p>
                Spread the joy by hosting events or joining an event hosted by those who want to help the  community.
            </p>

            <Dot>
                <div></div>
                <div></div>
                <div></div>
            </Dot>
            <Button>
                <Link href="/splashAndLanding/landingPageThree">
                    Continue
                </Link>
            </Button>
        </LandOne>
    )
}