import TextBubble from ".";


export default {
   title: 'Molecules/TextBubble',
   component: TextBubble,
};

const Template = (args) => <TextBubble {...args} />;

export const Default = Template.bind({});

Default.args = {
   text: ["123 BCIT Street, Vancouver, BC", "Henry and Sam²", "Tonight"],
   icon: ["location_on", "people", "schedule"]
};