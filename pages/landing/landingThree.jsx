import styled from 'styled-components';
import Link from 'next/link';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';

export default function LandingPageThree() {


    const LandOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
 padding:5% 5% 3% 5%;
    text-align: center;
    h1{
  @media(max-width: 768px) {
        margin:0 10%
    }
    `

    const MascotImg = styled.img`
    height: 300px;
    width: 300px;
    `
    const Dot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 40vw;
    margin-top: 2%;

div{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #D9D9D9;
    margin: 0 10px;
    
}
div:nth-child(3){
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
    &:hover {
        background-color: #085617;
      }
    `


    return (
        <LandOne>

            <MascotImg src="../../Mascot/mascotNews.png" />

            <h1>
                Keep Track of Food Banks’ News
            </h1>
            <p>
                Be updated on News & Resources from different Food Banks and stay informed.
            </p>

            <Dot>
                <Link href="/landing/landingOne">
                    <div></div>
                </Link>
                <Link href="/landing/landingTwo">
                    <div></div>
                </Link>
                <div></div>


            </Dot>

            <Link href="/auth/signin">
                <GeneralGreenBtn text={"Get Started"} h={"4.5em"} />
            </Link>

        </LandOne>
    )
}