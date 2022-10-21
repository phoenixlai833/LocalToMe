import TextBubble from ".";


export default {
   title: 'TextBubble',
   component: TextBubble,
};

const Template = (args) => <TextBubble {...args} />;

export const Base = Template.bind({});

Base.args = {
   text: ["123 BCIT Street, Vancouver, BC", "dogs and cats"],
   icon: ["schedule", "people"]
};