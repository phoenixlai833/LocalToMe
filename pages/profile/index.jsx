import ProfileSection from "../../components/Organisms/ProfileBanner"
import NavBar from '../../components/Organisms/NavBar';
import styled from "styled-components";
import { useState } from "react";
import FloatingActionButton from '../../components/Atoms/FloatButton';
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
                <ProfileSection src={session.user.image} name={session.user.name} email={session.user.email} />
                <ProfileTab>
                    <Tabs lefttxt="Recent Posts" righttxt="Past Posts" />
                </ProfileTab>
                <ProfileCard />
                <NavBar value={4} />
                <FloatingActionButton />

            </>
        )
    }
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: '/auth/signin',
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