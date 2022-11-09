import TopBanner from '../../components/Molecules/TopBanner';
import ProfileDisplay from '../../components/Molecules/profiledisplay/profiledisplay';
import styled from 'styled-components';
import AccountSection from '../../components/Molecules/Accountsection/accountsection';
import { useRouter } from 'next/router';
import ThemeSection from '../../components/Molecules/ThemeSection/themesection';
import { FlexBox } from '../../styles/globals';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';

export const ProfileDisplayCont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-even;
align-items: flex-start;
padding: 30px;
width:100%;
max-width:100%;
`

export default function Setting() {
    const r = useRouter();

    return <div>
        <TopBanner text='Settings'></TopBanner>
        <ProfileDisplayCont>
            <ProfileDisplay></ProfileDisplay>

            <AccountSection onRoute={()=>r.push('./editaccount')}/>
            <ThemeSection/>
            
        </ProfileDisplayCont>
        <FlexBox>
            <GeneralGreenBtn w={'200px'} text='Log out'></GeneralGreenBtn>
        </FlexBox>
    </div>
}