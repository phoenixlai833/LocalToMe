import SharePost from "./index";


export default {
    title: 'Molecules/SharePost',
    component: SharePost,
};

const shareUrl = 'https://google.com';

export const Template = () => <SharePost shareUrl={shareUrl} share={true} closeShare />;
