import ProfileSection from "../../components/Organisms/ProfileBanner"
import NavBar from '../../components/Organisms/NavBar';
import styled from "styled-components";
import { useState } from "react";
import FloatButton from '../../components/Atoms/FloatButton';
import Tabs from "../../components/Organisms/Tabs/tabs";
import ProfileCard from "../../components/Organisms/ProfileCard/ProfileCard";

import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";

const ProfileTab = styled.div`
display:flex;
height: 200px;
width: 100%
justify-content: flex-end;
align-items: flex-end;

`
export default function Profile() {
    const { data: session } = useSession()
    console.log(session.user);
    if (session) {
        return (
            <>
                <ProfileSection></ProfileSection>
                <ProfileTab>
                <Tabs lefttxt="Recent Posts" righttxt="Past Posts"/>
                </ProfileTab>
                <ProfileCard/>
                <NavBar value={4} />
                <FloatButton/>
                Signed in as {session.user.email} <br />
                <img src={session.user.image}></img>
                {session.user.name}
                <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
} 

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
        },
    }
}