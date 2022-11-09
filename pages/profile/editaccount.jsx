import TopBanner from '../../components/Molecules/TopBanner';
import ShortTextInput from '../../components/Molecules/ShortTextInput';
import { FlexBox, Wrapper } from '../../styles/globals';
import { MainHeader } from '../../components/Atoms/AppText/AppText.stories';
import GeneralGreenBtn from '../../components/Atoms/GeneralGreenBtn';

export default function EditAccount () {
    return <div>
        <TopBanner text='Account'></TopBanner>
        <Wrapper gap={'10px'} direction={'column'} padding={'30px'}>
        <MainHeader fontweight={700} txt='Account Information'></MainHeader>
        <ShortTextInput label='Name'></ShortTextInput>
        <ShortTextInput label='Email'></ShortTextInput>
        <ShortTextInput label='Password'></ShortTextInput>
        <FlexBox gap={'40px'}>
        <GeneralGreenBtn w={'137px'} text='Save Changes'></GeneralGreenBtn>        
        </FlexBox>
        </Wrapper>
    </div>
}