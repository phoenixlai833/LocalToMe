import TopNavigation from ".";


export default {
   title: 'Organisms/TopNavigation',
   component: TopNavigation,
 };

 const Template = (args) => <TopNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
  value:0
};