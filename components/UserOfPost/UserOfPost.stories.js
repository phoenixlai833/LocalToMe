import UserOfPost from "./index";


export default {
   title: 'UserOfPost',
   component: UserOfPost,
};

const Template = (args) => <UserOfPost {...args} />;

export const Base = Template.bind({});

Base.args = {
   userImg:"https://com-greenpeakfestival.s3.eu-central-1.amazonaws.com/_338xAUTO_fit_center-center_80_none/22458/Jan-Jaap-Verhoeve.jpg",
   name:"Shane",
};