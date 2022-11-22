import TopBanner from '../../components/Molecules/TopBanner';
import ShortTextInput from '../../components/Molecules/ShortTextInput';
import { FlexBox, Wrapper } from '../../styles/globals';
import { MainHeader } from '../../components/Atoms/AppText/AppText.stories';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';
import styled from 'styled-components';
import { getProviders, useSession } from "next-auth/react";
import TopNavigation from '../../components/Organisms/NavBarTop';
import { MainCont } from '.';
import { WhiteSecondCont } from './setting';

const ButtonCont = styled.div`
display: flex;
height: 45vh;
width: 100%;
max-height: 50vh;
align-items: flex-end;
flex-direction: row;
justify-content: center;
align-self: flex-end;
gap: 20px;
`
const TopBar = styled.div`
  @media (max-width: 767px) {
    display:none;
}
`

export default function EditAccount() {
    const { data: session } = useSession()

    const providers = async () => await getProviders()
    console.log(providers)

    if (session) {
        return <div>
              <TopBar>
                    <TopNavigation />
                </TopBar>
            <MainCont>
                <WhiteSecondCont>
                    <TopBanner text='Account'></TopBanner>
                    <Wrapper gap={'10px'} direction={'column'} padding={'30px'}>
                        <MainHeader fontweight={700} txt='Account Information'></MainHeader>
                        <ShortTextInput label='Name' value={session.user.name}></ShortTextInput>
                        <ShortTextInput label='Email' value={session.user.email}></ShortTextInput>
                        {session.user.image ? <p>Signed in with {session.user.image.split(".")[1].split("user")[0]}.</p> : null}
                        {/* <ShortTextInput label='Password'></ShortTextInput> */}
                        {/* <FlexBox gap={'40px'}>
                    <ButtonCont>
                        <GeneralGreenBtn
                            active={'#D1EAC8'}
                            txtcolor={'#108928'}
                            inactive={'white'}
                            borderstyle={' 3px solid #108928 '}
                            w={'137px'}
                            text='Discard Changes'></GeneralGreenBtn>
                        <GeneralGreenBtn w={'137px'} text='Save Changes'></GeneralGreenBtn>
                    </ButtonCont>
                </FlexBox> */}
                    </Wrapper>
                    </WhiteSecondCont>
                    </MainCont>
                </div>
    }
}