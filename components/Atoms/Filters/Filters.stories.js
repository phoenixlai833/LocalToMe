import Filter from "./index";
import EventFilter from "./index";

export default {
   title: 'Atoms/Filter',
   component: Filter,
   subcomponents: { EventFilter }
};


const Template = (args) => <Filter {...args} />;
const EventTemplate = (args) => <EventFilter {...args} />;


export const Bank = Template.bind({});
export const Fridge = Template.bind({});
export const Pantry = Template.bind({});
export const Event = Template.bind({});

export const EventFilt = EventTemplate.bind({});
export const EventFiltDeny = EventTemplate.bind({});


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
   tag: "Accepts Henry",
   active: true,
   icon: "check",
   tagline: "test",
   color: 'white',
   txtcolor: "green",
   border: "green 2px solid"
}
EventFiltDeny.args = {
   tag: "Accepts Sam",
   active: true,
   icon: "close",
   tagline: "test",
   color: 'white',
   txtcolor: "red",
   border: "red 2px solid"
}