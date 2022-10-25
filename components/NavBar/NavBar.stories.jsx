import NavBar from ".";


export default {
   title: 'NavBar',
   component: NavBar,
 };

 const Template = (args) => <NavBar {...args} />;

export const Base = Template.bind({});

Base.args = {
  value:0

};