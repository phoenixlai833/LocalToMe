import Filter from "./index";
import EventFilter from "./index";

export default {
   title: 'Filter',
   component: Filter,
   subcomponents: {EventFilter}
};


const Template = (args) => <Filter {...args} />;
const EventTemplate = (args) => <EventFilter {...args} />;


export const Bank = Template.bind({});
export const Fridge = Template.bind({});
export const Pantry = Template.bind({});
export const Event = Template.bind({});

export const EventFilt = EventTemplate.bind({});


Bank.args = {
   tag: "bank",
   active: true,
};

Fridge.args = {
   tag: "fridge",
   active: true,
};
Pantry.args = {
   tag: "pantry",
   active: true,
};
Event.args = {
   tag: "event",
   active: true,
};

EventFilt.args = {
   tag: "Accepts xxx",
   active: true,
   icon:"check",
   tagline:"test",
   color:'red',
   txtcolor:"red"

}