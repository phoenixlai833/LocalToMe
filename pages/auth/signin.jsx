import { getProviders, signIn, getSession, csrfToken } from "next-auth/react";
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
display: flex;
`

const LayoutLeft = styled.div`
@media(min-width: 768px) {
    background: #CDECC2;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const LeftChou = styled.img`
display: none;
@media(min-width: 768px) {
    display: flex;
    width: 100%;
}
`

const LayoutRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100vh;
width: 100vw;
padding:5% 5% 3% 5%;
margin:0 10%
h1{s
@media(min-width: 768px) {
    width: 50vw;
}
`
const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
@media(min-width: 768px) {
    width: 30em;
}
`

const SplashLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 25vh;
width: auto;
`
const LoginText = styled.span`
font-size: 1.5rem;
font-weight: 600;
margin: 5% 0;
`

export default function Signin({ providers }) {

    return (
        <>
            <Container>
                <LayoutLeft>
                    {/* <LeftChou> */}
                    <LeftChou src="../../Mascot/MascotSignin.png" />
                    {/* </LeftChou> */}
                </LayoutLeft>
                <LayoutRight>
                    <SplashLogo>
                        <img src="../../Splash.png" />
                    </SplashLogo>
                    <Center>

                        < LoginText>Login with</LoginText>
                        {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <GeneralGreenBtn text={provider.name} h={"4.5em"} onClick={() => signIn(provider.id, { callbackUrl: "/home" })} />
                                <br></br>
                                {/* <Button onClick={() => signIn(provider.id, { callbackUrl: "/home" })}>
                                {provider.name}
                            </Button> */}
                            </div>
                        ))}
                        <Link href="/home">
                            <p style={{ alignSelf: "center", cursor: "pointer" }}>Continue as a guest</p>
                        </Link>
                    </Center>
                </LayoutRight>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
