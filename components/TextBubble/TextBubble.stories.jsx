import TextBubble from ".";


export default {
   title: 'TextBubble',
   component: TextBubble,
};

const Template = (args) => <TextBubble {...args} />;

export const Default = Template.bind({});

Default.args = {
   text: ["123 BCIT Street, Vancouver, BC", "Henries"],
   icon: ["schedule", "people"]
};