import TopBanner from '../../components/Molecules/TopBanner';
import ProfileDisplay from '../../components/Molecules/ProfileDisplay/ProfileDisplay';
import styled from 'styled-components';
import ThemeSection from '../../components/Molecules/ThemeSection/ThemeSection';
import AccountSection from '../../components/Molecules/AccountSection/AccountSection';
import { useRouter } from 'next/router';
import { FlexBox } from '../../styles/globals';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';
import NotificationSection from '../../components/Molecules/NotificationSection/NotificationSection';
import PrivacySection from '../../components/Molecules/PrivacySection/PrivacySection';
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from '../api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import TopNavigation from '../../components/Organisms/NavBarTop';
import NavBar from '../../components/Organisms/NavBar';
import { useEffect } from 'react';

export const ProfileDisplayCont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
padding: 30px;
width:100%;
height: 100%;
max-height: 200%;
`
const TopBar = styled.div`
  @media (max-width: 767px) {
    display:none;
}
`
// export const WhiteSecondCont = styled(WhiteCont)`
// @media (min-width: 767px) {
//     // margin-top: 80px;
//     margin-top:8vh;
// margin-left: 18vw;
// margin-right: 18vw;
// min-height: 92vh;
// box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
// // overflow: hidden;
// }
// `

const DesktopBox = styled.div`
@media (min-width: 768px) {
margin-top: 8vh;
margin-left: 18vw;
margin-right: 18vw;
min-height: 92vh;
box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
}
`

const AboutUsSection = styled.div`
padding-top:25px;
`

const AboutUs = styled.a`
padding:10px 20px 10px 0px;
color:#108928;
font-size:16px;
`

export default function Setting() {
    const { data: session } = useSession()
    console.log(session.user);
    const r = useRouter();

    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, [])

    if (session) {
        return (
            <>
                <TopBar>
                    <TopNavigation value={4} />
                </TopBar>

                <DesktopBox>
                    <TopBanner text='Settings'></TopBanner>
                    <div>
                        <ProfileDisplayCont>
                            <ProfileDisplay name={session.user.name} email={session.user.email} />
                            <AccountSection onRoute={() => r.push('./editaccount')} />
                            <ThemeSection />
                            <NotificationSection />
                            <PrivacySection></PrivacySection>
                            <AboutUsSection>
                                <AboutUs href={"https://localtome.carrd.co/"} target="_blank">About LocalToMe</AboutUs>
                            </AboutUsSection>
                        </ProfileDisplayCont>

                        <FlexBox style={{ alignSelf: "center", marginTop: "5%" }}>
                            {/* <Link href={"/auth/signout"}> */}
                            <GeneralGreenBtn w={'25%'} text='Log out' onClick={() => r.push('/auth/signout')}></GeneralGreenBtn>
                            {/* </Link> */}
                        </FlexBox>
                    </div>
                    <div style={{ padding: "11%" }}></div>
                </DesktopBox>
                <div className="TEMPMEDIA">
                    <NavBar value={4} />
                </div>
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