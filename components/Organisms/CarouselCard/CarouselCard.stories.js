import CarouselCard from ".";

export default {
   title: 'Organisms/CarouselCard',
   component: CarouselCard,
 };

 const Template = (args) => <CarouselCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  day: 20,
  event: "Event Name",
  time: "12:00PM - 3:00PM",
  month: "OCT",

};