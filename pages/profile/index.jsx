import ProfileSection from "../../components/Organisms/ProfileBanner"
import NavBar from '../../components/Organisms/NavBar';
import styled from "styled-components";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";

// export default function Profile() {

//     return (
//         <>
//             <ProfileSection></ProfileSection>
//             <NavBar value={4} />
//         </>
//     )
// }

export default function Profile() {
    const { data: session } = useSession()
    console.log(session.user);
    if (session) {
        return (
            <>
                <ProfileSection></ProfileSection>
                <NavBar value={4} />
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