import NewsCard from "./index.jsx";

export default {
   title: 'NewsCard',
   component: NewsCard,
};

const Template = (args) => <NewsCard {...args} />;

export const Default = Template.bind({});

Default.args = {
   tag: "event",
   organizer: "Organizer",
   avatar: "",
   date: "Today, 3:00PM",
   info: "Lorem ipsum dolor sit amet, conse ctetur adi piscing elit. Fringilla risus est sociis bibendum. Nunc...",
   expanded:false

};