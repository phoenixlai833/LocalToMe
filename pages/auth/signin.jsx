import { getProviders, signIn, getSession, csrfToken } from "next-auth/react";
// import { authOptions } from './api/auth/[...nextauth].js';
// import { unstable_getServerSession } from "next-auth/next";
import styled from 'styled-components';
import Link from 'next/link';

export default function Signin({ providers }) {


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
    `

    const Button = styled.button`
    background-color: #108928;
    border: none;
    border-radius: 10px;
    height: 60px;
    width: 85vw;
    color: white;
    font-size: 20px;
    margin-bottom: 5%;
    &:hover {
        background-color: #085617;
      }
    `
    const ButtonB = styled.button`
    // background-color: #108928;
    // border: none;
    border-radius: 10px;
    border-color: #108928;
    height: 60px;
    width: 85vw;
    color: black;
    font-size: 20px;
    margin-bottom: 5%;
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
                            <Button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                {provider.name}
                            </Button>
                        </div>
                    ))}
                    <Link href="/">
                        {/* <Button>Continue as guest</Button> */}
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