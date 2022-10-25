import TopNavigation from ".";


export default {
   title: 'TopNavigation',
   component: TopNavigation,
 };

 const Template = (args) => <TopNavigation {...args} />;

export const Base = Template.bind({});

Base.args = {
  value:0
};