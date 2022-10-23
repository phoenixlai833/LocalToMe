import Filter from "./index";

export default {
   title: 'Filter',
   component: Filter,
 };

 const Template = (args) => <Filter {...args} />;

export const Bank = Template.bind({});

export const Fridge = Template.bind({});
export const Pantry = Template.bind({});
export const Event = Template.bind({});

Bank.args = {
  tag:"bank",
  active:false,
};

Fridge.args = {
   tag:"fridge",
   active:false,
};
Pantry.args = {
   tag:"pantry",
   active:false,
};
Event.args = {
   tag:"event",
   active:false,
};