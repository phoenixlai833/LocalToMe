import TopBanner from ".";


export default {
   title: 'Molecules/TopBanner',
   component: TopBanner,
};

const Template = (args) => <TopBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
   text: "1234 BCIT Street",
   back: true
};