import styled from 'styled-components';
import Link from 'next/link';

export default function LandingPageOne() {


    const LandOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
 padding:5%;
    text-align: center;
    h1{
  @media(max-width: 768px) {
        margin:0 10%
    }
}
//     p{
//   @media(max-width: 768px) {
//         margin:5% 20%
//     }
//     }
    


    `

    const Skip = styled.div`
    position: absolute;
    top: 6vh;
    right: 8vw;
    font-size: 16px;
    font-weight: 600;
    `
    const SplashLogo = styled.div`
//     display: flex;
  
//     align-items: center;
//  height:20vh;
//  width: 20vw;
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
    margin-top:10%;

div{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #D9D9D9;
    margin: 0 10px;
}
div:nth-child(1){
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
        <>
            <LandOne>
                <Skip>
                    <Link href="/">
                        Skip
                    </Link>
                </Skip>
                <MascotImg src="../../Mascot/mascotPin.png" />

                <h1>
                    Find Food Resources Near You
                </h1>
                <p>
                    From the comfort of your phone, you can find thousands of available food assistance near you.
                </p>

                <Dot>
                    <div></div>
                    <div></div>
                    <div></div>

                </Dot>
                <Button>
                    <Link href="/splashAndLanding/landingPageTwo">
                        Continue
                    </Link>
                    </Button>
            </LandOne>
        </>
    )
}