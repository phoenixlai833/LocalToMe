import NavBar from ".";


export default {
   title: 'NavBar',
   component: NavBar,
 };

 const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  value:0
};