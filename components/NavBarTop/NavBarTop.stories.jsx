import TopNavigation from ".";


export default {
   title: 'TopNavigation',
   component: TopNavigation,
 };

 const Template = (args) => <TopNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
  value:0
};