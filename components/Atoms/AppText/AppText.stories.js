import { fontSize } from "@mui/system";
import AppText from "."

export default {
    title: 'Atoms/AppText',
    component: AppText,
};

const Template = (args) => <AppText {...args} />;

export const ThinHeader = Template.bind({});
ThinHeader.args = {
   txt: 'This is the thin Header',
   variant: 'primary',
   txtsize: '24px',
   fontweight: 400
};

export const SubHeader = Template.bind({});
SubHeader.args = {
    txt: 'This is secondary text ',
    variant: 'secondary',
    txtsize: '20px',
    fontweight: 400
}


export const MainHeader =  Template.bind({});
MainHeader.args = {
    txt: 'This is main header',
    variant: 'third',
    txtsize: '20px',
    fontweight: 700
}



export const Default = (args) => <AppText/>
export const Error = (args) => <AppText />