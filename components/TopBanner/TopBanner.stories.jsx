import TopBanner from ".";


export default {
   title: 'TopBanner',
   component: TopBanner,
 };

 const Default = (args) => <TopBanner {...args} />;

export const Base = Default.bind({});

Default.args = {
   text:"1234 BCIT Street",
   back:true
};