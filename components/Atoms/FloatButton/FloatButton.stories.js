import FloatingActionButton from ".";

export default {
   title: 'Atoms/FloatButton',
   component: FloatingActionButton,
 };

 const Template = (args) => <FloatingActionButton {...args} />;

export const Default = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  text:"Button text"
};