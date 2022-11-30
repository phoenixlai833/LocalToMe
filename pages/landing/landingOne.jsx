import styled from 'styled-components';
import Link from 'next/link';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';

export default function LandingPageOne() {

    const Container = styled.div`
    @media(min-width: 768px) {
        // background-color: #CDECC2;
        height: 100vh;
        width: 100vw;
    }
    `

    //     const LandOne = styled.div`
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     background-color: white;
    //     height: 50vh;
    //     width: 50vw;
    //     padding:5% 5% 3% 5%;
    //     text-align: center;
    //     h1{
    //   @media(max-width: 768px) {
    //         margin:0 10%
    //     }
    //     @media(max-width: 768px) {
    //         height: 100vh;
    //         width: 100vw;

    //         }
    //     `

    const LandOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding:5% 5% 3% 5%;
    text-align: center;
  @media(max-width: 768px) {
    h1{
        margin:0 10%
    }
}
    `

    const Skip = styled.div`
    position: absolute;
    top: 6vh;
    right: 8vw;
    font-size: 16px;
    font-weight: 600;
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
    margin-top:2%;

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

    const BtnCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media(min-width: 768px) {
        width: 30em; 
    }
`

    // const Button = styled.button`
    // background-color: #108928;
    // border: none;
    // border-radius: 10px;
    // height: 60px;
    // width: 85vw;
    // color: white;
    // font-size: 20px;
    // &:hover {
    //     background-color: #085617;
    //   }
    // `


    return (
        <>
            <Container>
                <LandOne>
                    <Skip>
                        <Link href="/auth/signin">
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
                    <BtnCont>
                        <Dot>
                            <div></div>
                            <Link href="/landing/landingTwo">
                                <div></div>
                            </Link>
                            <Link href="/landing/landingThree">
                                <div></div>
                            </Link>

                        </Dot>

                        <Link href="/landing/landingTwo">

                            <GeneralGreenBtn text={"Continue"} h={"4.5em"} />

                        </Link>

                    </BtnCont>
                </LandOne>
            </Container>
        </>
    )
}