import News from ".";

export default {
   title: 'NewsCard',
   component: News,
};

const Template = (args) => <News {...args} />;

export const Base = Template.bind({});

Base.args = {
   tag: "event",
   organizer: "Organizer",
   avatar: "",
   date: "Today, 3:00PM",
   info: "Lorem ipsum dolor sit amet, conse ctetur adi piscing elit. Fringilla risus est sociis bibendum. Nunc...",
   expanded:false

};