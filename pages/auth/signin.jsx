import { getProviders, signIn, getSession, csrfToken } from "next-auth/react";
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';
import styled from 'styled-components';
import Link from 'next/link';

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100vh;
width: 100vw;
padding:5% 5% 3% 5%;
h1{s
@media(max-width: 768px) {
    margin:0 10%
}
`
const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
@media(min-width: 768px) {
    width: auto;
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
            <Layout>
                <SplashLogo>
                    <img src="../../Splash.png" />
                </SplashLogo>
                <Center>

                    < LoginText>Login with</LoginText>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <GeneralGreenBtn text={provider.name} h={"4.5em"} onClick={() => signIn(provider.id, { callbackUrl: "/" })} />
                            <br></br>
                            {/* <Button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                {provider.name}
                            </Button> */}
                        </div>
                    ))}
                    <Link href="/">
                        <p style={{ alignSelf: "center" }}>Continue as a guest</p>
                    </Link>
                </Center>
            </Layout>
        </>
    )
}


export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}