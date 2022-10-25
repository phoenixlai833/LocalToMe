import CarouselCard from ".";

export default {
   title: 'CarouselCard',
   component: CarouselCard,
 };

 const Template = (args) => <CarouselCard {...args} />;

export const Base = Template.bind({});

Base.args = {
  day: 20,
  event: "Event Name",
  time: "12:00PM - 3:00PM",
  month: "OCT",

};