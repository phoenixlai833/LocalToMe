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

export default function Setting() {
    const r = useRouter();

    return <div >
        <TopBanner text='Settings'></TopBanner>
        <ProfileDisplayCont>
           <ProfileDisplay/>
            <AccountSection onRoute={() => r.push('./editaccount')} />
            <ThemeSection/>
            <NotificationSection/>
            <PrivacySection></PrivacySection>
        </ProfileDisplayCont>
        <FlexBox style={{ height: '60vh' }}>
            <GeneralGreenBtn w={'200px'} text='Log out'></GeneralGreenBtn>
        </FlexBox>
    </div>
}