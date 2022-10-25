import EventCategoryTag from "./index";


export default {
   title: 'EventCategoryTag',
   component: EventCategoryTag,
};

const Template = (args) => <EventCategoryTag {...args} />;

export const Base = Template.bind({});

Base.args = {
   eventCategories: ["Food", "Funraiser"],
};

