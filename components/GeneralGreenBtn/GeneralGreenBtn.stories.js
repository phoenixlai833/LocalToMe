import GeneralGreenBtn from "."

export default {
    title: "GeneralGreenBtn",
    component: GeneralGreenBtn
}

const Template = (args) => <GeneralGreenBtn {...args} />;

export const Default = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  text:"Button text"
};