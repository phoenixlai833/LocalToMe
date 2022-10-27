import { fontSize } from "@mui/system";
import AppText from "."

export default {
    title: 'App Text',
    component: AppText,
 }; 

 const Template = (args) => <AppText {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
   txt: 'This is the Header',
   variant: 'primary',
   txtsize: '24px'
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
    txt: 'This is secondary text ',
    variant: 'secondary',
    txtsize: '20px'
}

export const Default = (args) => <AppText/>
export const Error = (args) => <AppText />