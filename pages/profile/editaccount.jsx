import TopBanner from '../../components/Molecules/TopBanner';
import ShortTextInput from '../../components/Molecules/ShortTextInput';
import { FlexBox, Wrapper } from '../../styles/globals';
import { MainHeader } from '../../components/Atoms/AppText/AppText.stories';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';
import styled from 'styled-components';

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

export default function EditAccount() {
    return <div>
        <TopBanner text='Account'></TopBanner>
        <Wrapper gap={'10px'} direction={'column'} padding={'30px'}>
            <MainHeader fontweight={700} txt='Account Information'></MainHeader>
            <ShortTextInput label='Name'></ShortTextInput>
            <ShortTextInput label='Email'></ShortTextInput>
            <ShortTextInput label='Password'></ShortTextInput>
            <FlexBox gap={'40px'}>
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
            </FlexBox>
        </Wrapper>
    </div>
}