import EventCategoryTag from "./index";


export default {
   title: 'Atoms/EventCategoryTag',
   component: EventCategoryTag,
};

const Template = (args) => <EventCategoryTag {...args} />;

export const Default = Template.bind({});

Default.args = {
   eventCategories: ["Food", "Funraiser"],
};

