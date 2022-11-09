import NavBar from ".";


export default {
   title: 'Organisms/NavBar',
   component: NavBar,
 };

 const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  value:0
};