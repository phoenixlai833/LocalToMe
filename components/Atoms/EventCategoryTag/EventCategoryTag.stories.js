import EventCategoryTag from "./index";


export default {
   title: 'Atoms/EventCategoryTag',
   component: EventCategoryTag,
};

const Template = (args) => <EventCategoryTag {...args} />;

export const Default = Template.bind({});

Default.args = {
   eventCategories: [
      { id: '3vsClAOfVwttEUvxLaXf', categoryName: 'Help' },
      { id: '9zg9HAEoHYzEUlnpfu2j', categoryName: 'Resources' },
      { id: 'D1m7ubq7VZyQFbFAfisa', categoryName: 'Fundraiser' },
      { id: 'IL6FhCC8b2kCxoFlqkhX', categoryName: 'Event' },
      { id: 'Igw92hsH6WPixrFZYLed', categoryName: 'Games' },
      { id: 'Kcj1wTvIHgxUv1Y9CreG', categoryName: 'All Ages' },
      { id: 'yJ97hNwUkO1f8zQ5q7p3', categoryName: 'Food' }
   ]
};

