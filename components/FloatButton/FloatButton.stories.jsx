import FloatingActionButton from ".";

export default {
   title: 'FloatingActionButton',
   component: FloatingActionButton,
 };

 const Template = (args) => <FloatingActionButton {...args} />;

export const Default = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  text:"Button text"
};