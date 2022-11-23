import TopBanner from '../../components/Molecules/TopBanner';
import ShortTextInput from '../../components/Molecules/ShortTextInput';
import { FlexBox, Wrapper } from '../../styles/globals';
import { MainHeader } from '../../components/Atoms/AppText/AppText.stories';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';
import styled from 'styled-components';
import { getProviders, useSession } from "next-auth/react";
import TopNavigation from '../../components/Organisms/NavBarTop';
import NavBar from '../../components/Organisms/NavBar';

const TopBar = styled.div`
  @media (max-width: 767px) {
    display:none;
}
`

const DesktopBox = styled.div`
@media (min-width: 768px) {
margin-top: 12vh;
margin-left: 18vw;
margin-right: 18vw;
min-height: 92vh;
box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
}
`

export default function EditAccount() {
    const { data: session } = useSession()

    const providers = async () => await getProviders()
    console.log(providers)

    if (session) {
        return <div>
            <TopBar>
                <TopNavigation value={4} />
            </TopBar>
            <DesktopBox>
                <TopBanner text='Account'></TopBanner>
                <Wrapper gap={'10px'} direction={'column'} padding={'30px'}>
                    <MainHeader fontweight={700} txt='Account Information'></MainHeader>
                    <ShortTextInput label='Name' value={session.user.name}></ShortTextInput>
                    <ShortTextInput label='Email' value={session.user.email}></ShortTextInput>
                    {/* {session.user.image ? <p>Signed in with {session.user.image.split(".")[1].split("user")[0]}.</p> : null} */}
                </Wrapper>
            </DesktopBox>
            <NavBar value={4} />
        </div>
    }
}