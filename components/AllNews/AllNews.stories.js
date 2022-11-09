import AllNews from "./index";

export default {
    title: "AllNews",
    component: AllNews
}

const allNews = [

    {
        newsAvatar: "",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        newsCreatorId: 1,
        // newsDateCreated:"October 31, 2022 at 1: 10: 53 AM UTC- 7",
        newsDateCreated: { seconds: 1667203853, nanoseconds: 489000000 },
        newsImage: "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/Screen%20Shot%202022-10-20%20at%2012.37.26%20PM.png?alt=media&token=08353691-6c44-423c-a6bf-019d74719eea",
        newsTags: ['event', 'food bank'],
        newsTitle: "Title Testing"

    }

];

export const Template = () => <AllNews allNews={allNews} />;

